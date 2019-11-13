import { Component, Prop, h } from '@stencil/core';
import { USERNAME_SUFFIX, USERNAME_LABEL, USERNAME_PLACEHOLDER } from '../../common/constants';

@Component({
  tag: 'amplify-username-field',
  shadow: false,
})
export class AmplifyUsernameField {
  /** Based on the type of field e.g. sign in, sign up, forgot password, etc. */
  @Prop() fieldId: string = USERNAME_SUFFIX;
  /** Used for the username label */
  @Prop() label: string = USERNAME_LABEL;
  /** Used for the placeholder label */
  @Prop() placeholder: string = USERNAME_PLACEHOLDER;
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
        required={this.required}
        handleInputChange={this.handleInputChange}
        value={this.value}
        inputProps={this.inputProps}
        disabled={this.disabled}
      />
    );
  }
}
