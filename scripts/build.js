'use strict';

const path = require('path');
const utility = require('./utility');
const ts = require('typescript');
const externals = require('./rollup-externals');

// path of root
const rootPath = path.resolve(__dirname, '../');
// path of each package
const pkgRootPath = process.cwd();

const pkgTscES5OutDir = path.join(pkgRootPath, 'lib');
const pkgTscES6OutDir = path.join(pkgRootPath, 'lib-esm');
const pkgSrcDir = path.join(pkgRootPath, 'src');
const typeRoots = [rootPath, pkgRootPath].map(basePath =>
	path.join(basePath, 'node_modules/@types')
);
const packageJsonPath = path.join(pkgRootPath, 'package');
const packageInfo = require(packageJsonPath);
const pkgRollUpInputFile = path.join(pkgTscES5OutDir, 'index.js');
const pkgRollUpOutputFile = path.join(pkgRootPath, packageInfo.main);

async function buildRollUp() {
	console.log(`Building Roll up bundle file under ${pkgRootPath}`);
	const rollup = require('rollup');
	const resolve = require('rollup-plugin-node-resolve');
	const sourceMaps = require('rollup-plugin-sourcemaps');
	const json = require('rollup-plugin-json');

	// For more info see: https://github.com/rollup/rollup/issues/1518#issuecomment-321875784
	const onwarn = warning => {
		if (warning.code === 'THIS_IS_UNDEFINED') {
			return;
		}
		console.warn(warning.message);
	};

	const inputOptions = {
		pkgRollUpInputFile,
		plugins: [json(), resolve({ extensions: ['.js', '.json'] }), sourceMaps()],
		external: externals[packageInfo.name],
		onwarn,
	};

	const outputOptions = {
		pkgRollUpOutputFile,
		format: 'cjs',
		name: 'index',
		sourcemap: true,
		exports: 'named',
	};

	console.log(`Using the rollup configuration:`);
	console.log(inputOptions);
	console.log(outputOptions);

	try {
		const bundle = await rollup.rollup(inputOptions);
		await bundle.write(outputOptions);
	} catch (e) {
		console.log(e);
	}
}

function tsc(fileNames, options) {
	let program = ts.createProgram(fileNames, options);
	let emitResult = program.emit();

	let allDiagnostics = ts
		.getPreEmitDiagnostics(program)
		.concat(emitResult.diagnostics);

	allDiagnostics.forEach(diagnostic => {
		if (diagnostic.file) {
			let { line, character } = diagnostic.file.getLineAndCharacterOfPosition(
				diagnostic.start
			);
			let message = ts.flattenDiagnosticMessageText(
				diagnostic.messageText,
				'\n'
			);
			console.log(
				`${diagnostic.file.fileName} (${line + 1},${character + 1}): ${message}`
			);
		} else {
			console.log(
				`${ts.flattenDiagnosticMessageText(diagnostic.messageText, '\n')}`
			);
		}
	});

	let exitCode = emitResult.emitSkipped ? 1 : 0;
	console.log(`Process exiting with code '${exitCode}'.`);
	process.exit(exitCode);
}

async function buildES5() {
	const jsx = packageInfo.name === 'aws-amplify-react' ? 'react' : undefined;
	// tsconfig for ES5 generating
	let compilerOptions = {
		noImplicitAny: false,
		lib: ['dom', 'es2017', 'esnext.asynciterable'],
		jsx: jsx,
		sourceMap: true,
		target: 'es5',
		module: 'commonjs',
		moduleResolution: 'node',
		declaration: true,
		noEmitOnError: true,
		typeRoots,
		// temporary fix
		types: ['node'],
		outDir: pkgTscES5OutDir,
	};

	compilerOptions = ts.convertCompilerOptionsFromJson(compilerOptions);
	const include = [pkgSrcDir];
	console.log(`Using the typescript compiler options:`);
	console.log(compilerOptions);

	let fileList = [];
	Promise.all(
		include.map(async source => {
			const list = await utility.iterateFiles(source);
			return (fileList = fileList.concat(list));
		})
	).then(() => {
		console.log('Files to be transpiled by tsc:');
		console.log(fileList);
		tsc(fileList, compilerOptions.options);
	});
}

function buildES6() {
	const jsx = packageInfo.name === 'aws-amplify-react' ? 'react' : undefined;
	// tsconfig for ESM generating
	let compilerOptions = {
		noImplicitAny: false,
		lib: ['dom', 'es2017', 'esnext.asynciterable'],
		jsx: jsx,
		sourceMap: true,
		target: 'es5',
		module: 'es2015',
		moduleResolution: 'node',
		declaration: true,
		noEmitOnError: true,
		typeRoots,
		// temporary fix
		types: ['node'],
		outDir: pkgTscES6OutDir,
	};

	compilerOptions = ts.convertCompilerOptionsFromJson(compilerOptions);
	const include = [pkgSrcDir];
	console.log(`Using the typescript compiler options:`);
	console.log(compilerOptions);

	let fileList = [];
	Promise.all(
		include.map(async source => {
			const list = await utility.iterateFiles(source);
			return (fileList = fileList.concat(list));
		})
	).then(() => {
		console.log('Files to be transpiled by tsc:');
		console.log(fileList);
		tsc(fileList, compilerOptions.options);
	});
}

function build(type) {
	if (type === 'rollup') buildRollUp();
	if (type === 'es5') buildES5();
	if (type === 'es6') buildES6();
}

module.exports = build;
