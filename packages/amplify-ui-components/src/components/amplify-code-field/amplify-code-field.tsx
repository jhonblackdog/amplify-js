import { Component, Prop, FunctionalComponent, h } from '@stencil/core';
import { CODE_SUFFIX, CODE_LABEL, CODE_PLACEHOLDER } from '../../common/constants';

@Component({
  tag: 'amplify-code-field',
  shadow: false,
})
export class AmplifyCodeField {
  /** Based on the type of field e.g. sign in, sign up, forgot password, etc. */
  @Prop() fieldId: string = CODE_SUFFIX;
  /** Used for the code label */
  @Prop() label: string = CODE_LABEL;
  /** Used for the placeholder label */
  @Prop() placeholder: string = CODE_PLACEHOLDER;
  /** Used as the hint in case you forgot your confirmation code, etc. */
  @Prop() hint: string | FunctionalComponent | null;
  /** The required flag in order to make an input required prior to submitting a form */
  @Prop() required: boolean = false;
  /** The callback, called when the input is modified by the user. */
  @Prop() handleInputChange?: (inputEvent: Event) => void;
  /** The value of the content inside of the input field */
  @Prop() value?: string;
  /** Attributes places on the input element: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#Attributes */
  @Prop() inputProps?: object;
  /** Will disable the input if set to true */
  @Prop() disabled?: boolean;

  render() {
    return (
      <amplify-form-field
        fieldId={this.fieldId}
        label={this.label}
        placeholder={this.placeholder}
        type="number"
        hint={this.hint}
        required={this.required}
        handleInputChange={this.handleInputChange}
        value={this.value}
        inputProps={this.inputProps}
        disabled={this.disabled}
      />
    );
  }
}
