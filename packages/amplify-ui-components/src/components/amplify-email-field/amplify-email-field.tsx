import { Component, Prop, h } from '@stencil/core';
import { EMAIL_SUFFIX, EMAIL_LABEL, EMAIL_PLACEHOLDER } from '../../common/constants';
@Component({
  tag: 'amplify-email-field',
  shadow: false,
})
export class AmplifyEmailField {
  /** Based on the type of field e.g. sign in, sign up, forgot password, etc. */
  @Prop() fieldId: string = EMAIL_SUFFIX;
  /** Used for the EMAIL label */
  @Prop() label: string = EMAIL_LABEL;
  /** Used for the placeholder label */
  @Prop() placeholder: string = EMAIL_PLACEHOLDER;
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
        type="email"
        required={this.required}
        handleInputChange={this.handleInputChange}
        value={this.value}
        inputProps={this.inputProps}
        disabled={this.disabled}
      />
    );
  }
}
