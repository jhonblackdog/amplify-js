import { I18n } from '@aws-amplify/core';
import { Component, Prop, h, State } from '@stencil/core';
import { FormFieldTypes } from '../amplify-auth-fields/amplify-auth-fields-interface';
import { NO_AUTH_MODULE_FOUND } from '../../common/constants';
import { Translations } from '../../common/Translations';
import { AuthState, CognitoUserInterface, AuthStateHandler, UsernameAliasStrings } from '../../common/types/auth-types';

import { Auth } from '@aws-amplify/auth';
import { dispatchToastHubEvent, dispatchAuthStateChangeEvent, checkUsernameAlias } from '../../common/helpers';

@Component({
  tag: 'amplify-confirm-sign-up',
  shadow: true,
})
export class AmplifyConfirmSignUp {
  /** Fires when sign up form is submitted */
  @Prop() handleSubmit: (submitEvent: Event) => void = event => this.confirmSignUp(event);
  /** Used for header text in confirm sign up component */
  @Prop() headerText: string = I18n.get(Translations.CONFIRM_SIGN_UP_HEADER_TEXT);
  /** Used for the submit button text in confirm sign up component */
  @Prop() submitButtonText: string = I18n.get(Translations.CONFIRM_SIGN_UP_SUBMIT_BUTTON_TEXT);
  /**
   * Form fields allows you to utilize our pre-built components such as username field, code field, password field, email field, etc.
   * by passing an array of strings that you would like the order of the form to be in. If you need more customization, such as changing
   * text for a label or adjust a placeholder, you can follow the structure below in order to do just that.
   * ```
   * [
   *  {
   *    type: string,
   *    label: string,
   *    placeholder: string,
   *    hint: string | Functional Component | null,
   *    required: boolean
   *  }
   * ]
   * ```
   */
  @Prop() formFields: FormFieldTypes | string[] = [];
  /** Auth state change handler for this components
   * e.g. SignIn -> 'Create Account' link -> SignUp
   */
  @Prop() handleAuthStateChange: AuthStateHandler = dispatchAuthStateChangeEvent;
  /** Used for the username to be passed to resend code */
  @Prop() user: CognitoUserInterface;
  /** Username Alias is used to setup authentication with `username`, `email` or `phone_number`  */
  @Prop() usernameAlias: UsernameAliasStrings = 'username';

  @State() code: string;
  @State() loading: boolean = false;
  @State() userInput: string = this.user ? this.user.username : null;
  private _signUpAttrs = this.user && this.user.signUpAttrs ? this.user.signUpAttrs : null;
  private newFormFields: FormFieldTypes | string[] = [];

  componentWillLoad() {
    checkUsernameAlias(this.usernameAlias);
    if (this.formFields.length === 0) {
      this.newFormFields = [
        {
          type: `${this.usernameAlias}`,
          required: true,
          handleInputChange: this.handleFormFieldInputChange(`${this.usernameAlias}`),
          value: this.userInput,
          disabled: this.userInput ? true : false,
        },
        {
          type: 'code',
          label: I18n.get(Translations.CONFIRM_SIGN_UP_CODE_LABEL),
          placeholder: I18n.get(Translations.CONFIRM_SIGN_UP_CODE_PLACEHOLDER),
          required: true,
          hint: (
            <div>
              {I18n.get(Translations.CONFIRM_SIGN_UP_LOST_CODE)}{' '}
              <amplify-button variant="anchor" onClick={() => this.resendConfirmCode()}>
                {I18n.get(Translations.CONFIRM_SIGN_UP_RESEND_CODE)}
              </amplify-button>
            </div>
          ),
          handleInputChange: this.handleFormFieldInputChange('code'),
        },
      ];
    } else {
      this.formFields.forEach(field => {
        const newField = { ...field };
        newField['handleInputChange'] = event => this.handleFormFieldInputWithCallback(event, field);
        this.newFormFields.push(newField);
      });
    }
  }

  handleFormFieldInputChange(fieldType) {
    switch (fieldType) {
      case 'username':
      case 'email':
      case 'phone_number':
        return event => (this.userInput = event.target.value);
      case 'code':
        return event => (this.code = event.target.value);
      default:
        return;
    }
  }

  handleFormFieldInputWithCallback(event, field) {
    const fnToCall = field['handleInputChange']
      ? field['handleInputChange']
      : (event, cb) => {
          cb(event);
        };
    const callback = this.handleFormFieldInputChange(field.type);
    fnToCall(event, callback.bind(this));
  }

  async resendConfirmCode() {
    if (event) {
      event.preventDefault();
    }
    if (!Auth || typeof Auth.resendSignUp !== 'function') {
      throw new Error(NO_AUTH_MODULE_FOUND);
    }
    try {
      if (!this.userInput) throw new Error('Username can not be empty');
      await Auth.resendSignUp(this.userInput);
      this.handleAuthStateChange(AuthState.ConfirmSignUp);
    } catch (error) {
      dispatchToastHubEvent(error);
    }
  }

  // TODO: Add validation
  // TODO: Prefix
  async confirmSignUp(event: Event) {
    if (event) {
      event.preventDefault();
    }
    if (!Auth || typeof Auth.confirmSignUp !== 'function') {
      throw new Error(NO_AUTH_MODULE_FOUND);
    }

    this.loading = true;

    try {
      const confirmSignUpResult = await Auth.confirmSignUp(this.userInput, this.code);
      const user =
        confirmSignUpResult && this._signUpAttrs && (await Auth.signIn(this.userInput, this._signUpAttrs.password));
      this.handleAuthStateChange(AuthState.SignedIn, user);
    } catch (error) {
      dispatchToastHubEvent(error);
    } finally {
      this.loading = false;
    }
  }

  render() {
    return (
      <amplify-form-section
        headerText={this.headerText}
        submitButtonText={this.submitButtonText}
        handleSubmit={this.handleSubmit}
        secondaryFooterContent={
          <div>
            <span>
              <amplify-button variant="anchor" onClick={() => this.handleAuthStateChange(AuthState.SignIn)}>
                {I18n.get(Translations.BACK_TO_SIGN_IN)}
              </amplify-button>
            </span>
          </div>
        }
      >
        <amplify-auth-fields formFields={this.newFormFields} />
      </amplify-form-section>
    );
  }
}
