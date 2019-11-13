import { Component, Prop, h } from '@stencil/core';
import { input } from './amplify-input.style';
import { styleNuker } from '../../common/helpers';
import { TextFieldTypes } from '../../common/types/ui-types';
import { AMPLIFY_UI_PREFIX } from '../../common/constants';

const STATIC_INPUT_CLASS_NAME = `${AMPLIFY_UI_PREFIX}--input`;

@Component({
  tag: 'amplify-input',
  shadow: false,
})
export class AmplifyInput {
  /** The ID of the field.  Should match with its corresponding input's ID. */
  @Prop() fieldId: string;
  /** The text of the description.  Goes just below the label. */
  @Prop() description: string | null;
  /** The input type.  Can be any HTML input type. */
  @Prop() type?: TextFieldTypes = 'text';
  /** The callback, called when the input is modified by the user. */
  @Prop() handleInputChange?: (inputEvent: Event) => void;
  /** (Optional) The placeholder for the input element.  Using hints is recommended, but placeholders can also be useful to convey information to users. */
  @Prop() placeholder?: string = '';
  /** (Optional) Override default styling */
  @Prop() overrideStyle: boolean = false;
  /** (Optional) String value for the name of the input. */
  @Prop() name?: string;
  /** The value of the content inside of the input field */
  @Prop() value: string;
  /** Attributes places on the input element: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#Attributes */
  @Prop() inputProps?: object;
  /** Will disable the input if set to true */
  @Prop() disabled?: boolean;

  render() {
    return (
      <input
        id={this.fieldId}
        aria-describedby={this.fieldId && this.description ? `${this.fieldId}-description` : null}
        type={this.type}
        onInput={this.handleInputChange}
        placeholder={this.placeholder}
        name={this.name}
        class={styleNuker(this.overrideStyle, STATIC_INPUT_CLASS_NAME, input)}
        value={this.value}
        disabled={this.disabled}
        {...this.inputProps}
      />
    );
  }
}
