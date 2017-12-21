'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Col12 = exports.Col11 = exports.Col10 = exports.Col9 = exports.Col8 = exports.Col7 = exports.Col6 = exports.Col5 = exports.Col4 = exports.Col3 = exports.Col2 = exports.Col1 = exports.Pre = exports.A = exports.Space = exports.SignInButton = exports.Button = exports.Input = exports.ActionRow = exports.FormRow = exports.SectionBody = exports.SectionFooter = exports.SectionHeader = exports.ErrorSection = exports.FormSection = exports.FormContainer = exports.NavButton = exports.NavItem = exports.Nav = exports.NavRight = exports.NavBar = exports.Container = undefined;

var _awsAmplify = require('aws-amplify');

var Container = exports.Container = {
    fontFamily: '-apple-system,\n                BlinkMacSystemFont,\n                "Segoe UI",\n                Roboto,\n                "Helvetica Neue",\n                Arial,\n                sans-serif,\n                "Apple Color Emoji",\n                "Segoe UI Emoji",\n                "Segoe UI Symbol"',
    fontWeight: '400',
    lineHeight: '1.5',
    color: '#212529',
    textAlign: 'left',
    paddingLeft: '15px',
    paddingRight: '15px'
}; /*
    * Copyright 2017-2017 Amazon.com, Inc. or its affiliates. All Rights Reserved.
    *
    * Licensed under the Apache License, Version 2.0 (the "License"). You may not use this file except in compliance with
    * the License. A copy of the License is located at
    *
    *     http://aws.amazon.com/apache2.0/
    *
    * or in the "license" file accompanying this file. This file is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR
    * CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions
    * and limitations under the License.
    */

var NavBar = exports.NavBar = {
    position: 'relative',
    marginBottom: '20px',
    marginLeft: '-15px',
    marginRight: '-15px',
    border: '1px solid transparent',
    backgroundColor: '#f8f8f8',
    borderColor: '#e7e7e7'
};

var NavRight = exports.NavRight = {
    textAlign: 'right'
};

var Nav = exports.Nav = {
    margin: '7.5px'
};

var NavItem = exports.NavItem = {
    display: 'inline-block',
    padding: '10px 5px',
    lineHeight: '20px'
};

var NavButton = exports.NavButton = {
    display: 'inline-block',
    padding: '6px 12px',
    marginTop: '8px',
    marginBottom: '8px',
    fontSize: '14px',
    fontWeight: 400,
    lineHeight: '1.42857143',
    textAlign: 'center',
    whiteSpace: 'nowrap',
    verticalAlign: 'middle',
    touchAction: 'manipulation',
    cursor: 'pointer',
    userSelect: 'none',
    backgroundImage: 'none',
    border: '1px solid transparent',
    borderRadius: '4px',
    color: '#333',
    backgroundColor: '#fff',
    borderColor: '#ccc'
};

var FormContainer = exports.FormContainer = {
    textAlign: 'center'
};

var FormSection = exports.FormSection = {
    marginBottom: '20px',
    backgroundColor: '#fff',
    border: '1px solid #ddd',
    borderRadius: '4px',
    textAlign: 'left',
    width: '100%',
    display: 'inline-block'
};

var ErrorSection = exports.ErrorSection = {
    marginBottom: '20px',
    color: '#fff',
    backgroundColor: '#f0ad4e',
    border: '1px solid #eea236',
    borderRadius: '4px',
    textAlign: 'left'
};

var SectionHeader = exports.SectionHeader = {
    color: '#fff',
    backgroundColor: '#337ab7',
    borderColor: '#337ab7',
    padding: '10px 15px',
    borderBottom: '1px solid transparent',
    borderTopLeftRadius: '3px',
    borderTopRightRadius: '3px',
    textAlign: 'center'
};

var SectionFooter = exports.SectionFooter = {
    color: '#333',
    backgroundColor: '#f5f5f5',
    padding: '10px 15px',
    borderTop: '1px solid #ddd',
    borderTopLeftRadius: '3px',
    borderTopRightRadius: '3px'
};

var SectionBody = exports.SectionBody = {
    padding: '15px'
};

var FormRow = exports.FormRow = {
    marginBottom: '15px'
};

var ActionRow = exports.ActionRow = {
    marginBottom: '15px'
};

var Input = exports.Input = {
    display: 'block',
    width: '100%',
    height: '34px',
    padding: '6px 12px',
    fontSize: '14px',
    lineHeight: '1.42857143',
    color: '#555',
    backgroundColor: '#fff',
    backgroundImage: 'none',
    border: '1px solid #ccc',
    borderRadius: '4px',
    boxShadow: 'inset 0 1px 1px rgba(0,0,0,.075)',
    boxSizing: 'border-box',
    transition: 'border-color ease-in-out .15s,box-shadow ease-in-out .15s'
};

var Button = exports.Button = {
    display: 'inline-block',
    padding: '6px 12px',
    marginBottom: '0',
    fontSize: '14px',
    fontWeight: 400,
    lineHeight: '1.42857143',
    textAlign: 'center',
    whiteSpace: 'nowrap',
    verticalAlign: 'middle',
    touchAction: 'manipulation',
    cursor: 'pointer',
    userSelect: 'none',
    backgroundImage: 'none',
    border: '1px solid transparent',
    borderRadius: '4px',
    color: '#333',
    backgroundColor: '#fff',
    borderColor: '#ccc'
};

var SignInButton = exports.SignInButton = {
    position: 'relative',
    padding: '6px 12px 6px 44px',
    fontSize: '14px',
    textAlign: 'left',
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    display: 'block',
    width: '100%',
    marginTop: '2px',
    '#google_signin_btn': {
        color: '#fff',
        backgroundColor: '#dd4b39',
        borderColor: 'rgba(0,0,0,0.2)'
    },
    '#facebook_signin_btn': {
        color: '#fff',
        backgroundColor: '#3b5998',
        borderColor: 'rgba(0,0,0,0.2)'
    }
};

var Space = exports.Space = {
    display: 'inline-block',
    width: '20px'
};

var A = exports.A = {
    color: '#007bff',
    cursor: 'pointer'
};

var Pre = exports.Pre = {
    overflow: 'auto',
    fontFamily: 'Menlo,\n                Monaco,\n                Consolas,\n                "Courier New",\n                monospace',
    display: 'block',
    padding: '9.5px',
    margin: '0 0 10px',
    fontSize: '13px',
    lineHeight: '1.42857143',
    color: '#333',
    wordBreak: 'break-all',
    wordWrap: 'break-word',
    backgroundColor: '#f5f5f5',
    border: '1px solid #ccc',
    borderRadius: '4px'
};

var Col1 = exports.Col1 = {
    display: 'inline-block',
    width: '8.33333333%'
};

var Col2 = exports.Col2 = {
    display: 'inline-block',
    width: '16.66666667%'
};

var Col3 = exports.Col3 = {
    display: 'inline-block',
    width: '25%'
};

var Col4 = exports.Col4 = {
    display: 'inline-block',
    width: '33.33333333%'
};

var Col5 = exports.Col5 = {
    display: 'inline-block',
    width: '41.66666667%'
};

var Col6 = exports.Col6 = {
    display: 'inline-block',
    width: '50%'
};

var Col7 = exports.Col7 = {
    display: 'inline-block',
    width: '58.33333333%'
};

var Col8 = exports.Col8 = {
    display: 'inline-block',
    width: '66.66666667%'
};

var Col9 = exports.Col9 = {
    display: 'inline-block',
    width: '75%'
};

var Col10 = exports.Col10 = {
    display: 'inline-block',
    width: '83.33333333%'
};

var Col11 = exports.Col11 = {
    display: 'inline-block',
    width: '91.66666667%'
};

var Col12 = exports.Col12 = {
    display: 'inline-block',
    width: '100%'
};

var Bootstrap = {
    container: Container,

    navBar: NavBar,
    nav: Nav,
    navRight: NavRight,
    navItem: NavItem,
    navButton: NavButton,

    formContainer: FormContainer,
    formSection: FormSection,
    errorSection: ErrorSection,
    sectionHeader: SectionHeader,
    sectionBody: SectionBody,
    sectionFooter: SectionFooter,

    formRow: FormRow,
    actionRow: ActionRow,

    space: Space,

    signInButton: SignInButton,

    input: Input,
    button: Button,
    a: A,
    pre: Pre,

    col1: Col1,
    col2: Col2,
    col3: Col3,
    col4: Col4,
    col5: Col5,
    col6: Col6,
    col7: Col7,
    col8: Col8,
    col9: Col9,
    col10: Col10,
    col11: Col11,
    col12: Col12
};

exports['default'] = Bootstrap;