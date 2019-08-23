/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */


import { HTMLStencilElement, JSXBase } from '@stencil/core/internal';
import {
  TextFieldTypes,
} from './common/types';
import {
  IconNameType,
} from './components/amplify-icon/icons';
import {
  SelectOptionsNumber,
  SelectOptionsString,
} from './components/amplify-select/amplify-select-interface';

export namespace Components {
  interface AmplifyAuthenticator {
    'content': Function;
    'override': boolean;
    'signIn': Function;
  }
  interface AmplifyButton {
    'role': string;
    'styleOverride': boolean;
    'type': string;
  }
  interface AmplifyCheckbox {
    /**
    * If `true`, the checkbox is selected.
    */
    'checked': boolean;
    /**
    * If `true`, the checkbox is disabled
    */
    'disabled': boolean;
    /**
    * Field ID used for the 'htmlFor' in the label
    */
    'fieldId': string;
    /**
    * Label for the checkbox
    */
    'label': string;
    /**
    * Name of the checkbox
    */
    'name'?: string;
    /**
    * (Optional) Overrides default styling
    */
    'styleOverride'?: boolean;
    /**
    * Value of the checkbox
    */
    'value'?: string;
  }
  interface AmplifyExamples {}
  interface AmplifyFormField {
    /**
    * The text of the description.  Goes between the label and the input.
    */
    'description': string | null;
    /**
    * The ID of the field.  Should match with its corresponding input's ID.
    */
    'fieldId': string;
    /**
    * The text of a hint to the user as to how to fill out the input.  Goes just below the input.
    */
    'hint': string | null;
    /**
    * The text of the label.  Goes above the input. Ex: 'First name'
    */
    'label': string | null;
    /**
    * The callback, called when the input is modified by the user.
    */
    'onInputChange'?: (inputEvent: Event) => void;
    /**
    * (Optional) Override default styling
    */
    'overrideStyle'?: boolean;
    /**
    * (Optional) The placeholder for the input element.  Using hints is recommended, but placeholders can also be useful to convey information to users.
    */
    'placeholder'?: string;
    /**
    * The input type.  Can be any HTML input type.
    */
    'type'?: TextFieldTypes;
  }
  interface AmplifyFormSection {
    /**
    * (Required) Function called upon submission of form
    */
    'handleSubmit': (inputEvent: Event) => void;
    /**
    * Used for form section header
    */
    'headerText': string;
    /**
    * (Optional) Overrides default styling
    */
    'overrideStyle'?: boolean;
    /**
    * (Optional) Used as a the default value within the default footer slot
    */
    'submitButtonText'?: string;
  }
  interface AmplifyHint {
    'overrideStyle': boolean;
  }
  interface AmplifyIcon {
    /**
    * (Required) Name of icon used to determine the icon rendered
    */
    'name': IconNameType;
    /**
    * (Optional) Override default styling
    */
    'overrideStyle': boolean;
  }
  interface AmplifyInput {
    /**
    * The text of the description.  Goes just below the label.
    */
    'description': string | null;
    /**
    * The ID of the field.  Should match with its corresponding input's ID.
    */
    'fieldId': string;
    /**
    * The callback, called when the input is modified by the user.
    */
    'onInputChange'?: (inputEvent: Event) => void;
    /**
    * (Optional) Override default styling
    */
    'overrideStyle'?: boolean;
    /**
    * (Optional) The placeholder for the input element.  Using hints is recommended, but placeholders can also be useful to convey information to users.
    */
    'placeholder'?: string;
    /**
    * The input type.  Can be any HTML input type.
    */
    'type'?: TextFieldTypes;
  }
  interface AmplifyLabel {
    'htmlFor': string;
    'overrideStyle': boolean;
  }
  interface AmplifyLink {
    'role': string;
    'styleOverride': boolean;
  }
  interface AmplifyRadioButton {
    /**
    * If `true`, the radio button is selected.
    */
    'checked': boolean;
    /**
    * If `true`, the checkbox is disabled
    */
    'disabled': boolean;
    /**
    * Field ID used for the 'for' in the label
    */
    'fieldId': string;
    /**
    * Label for the radio button
    */
    'label': string;
    /**
    * (Optional) Name of radio button
    */
    'name'?: string;
    /**
    * (Optional) Overrides default styling
    */
    'styleOverride'?: boolean;
    /**
    * (Optional) Value of radio button
    */
    'value'?: string;
  }
  interface AmplifySceneLoading {
    'loadPercentage': number;
    'sceneError': object;
    'sceneName': string;
  }
  interface AmplifySection {
    'overrideStyle'?: boolean;
    'role': string;
  }
  interface AmplifySelect {
    /**
    * Used for id field
    */
    'fieldId': string;
    /**
    * The options of the select input. Must be an Array of Objects with an Object shape of {label: string, value: string|number}
    */
    'options': SelectOptionsString | SelectOptionsNumber;
    /**
    * (Optional) Overrides default styling
    */
    'styleOverride': boolean;
  }
  interface AmplifySignIn {
    'handleSubmit': (Event) => void;
    'overrideStyle'?: boolean;
    'validationErrors': string;
  }
  interface AmplifySignInPasswordField {
    'component': Function;
    'description': string | null;
    'fieldId': string;
    'hint': string | null;
    'inputProps': {
      type?: TextFieldTypes;
      onChange?: (Event) => void;
    };
    'label': string | null;
  }
  interface AmplifySignInUsernameField {
    'component': Function;
    'description': string | null;
    'fieldId': string;
    'hint': string | null;
    'inputProps': {
      type?: TextFieldTypes;
      onChange?: (Event) => void;
    };
    'label': string | null;
  }
  interface AmplifyTextField {
    'description': string | null;
    'fieldId': string;
    'inputProps': {
      type?: string;
      onInput?: (Event) => void;
    };
    'label': string | null;
  }
  interface AmplifyTextInput {
    'description': string | null;
    'fieldId': string;
    'inputProps': {
      type?: string;
      onInput?: (Event) => void;
    };
    'label': string | null;
  }
  interface RockPaperScissor {
    'icon': Function;
  }
}

declare global {


  interface HTMLAmplifyAuthenticatorElement extends Components.AmplifyAuthenticator, HTMLStencilElement {}
  var HTMLAmplifyAuthenticatorElement: {
    prototype: HTMLAmplifyAuthenticatorElement;
    new (): HTMLAmplifyAuthenticatorElement;
  };

  interface HTMLAmplifyButtonElement extends Components.AmplifyButton, HTMLStencilElement {}
  var HTMLAmplifyButtonElement: {
    prototype: HTMLAmplifyButtonElement;
    new (): HTMLAmplifyButtonElement;
  };

  interface HTMLAmplifyCheckboxElement extends Components.AmplifyCheckbox, HTMLStencilElement {}
  var HTMLAmplifyCheckboxElement: {
    prototype: HTMLAmplifyCheckboxElement;
    new (): HTMLAmplifyCheckboxElement;
  };

  interface HTMLAmplifyExamplesElement extends Components.AmplifyExamples, HTMLStencilElement {}
  var HTMLAmplifyExamplesElement: {
    prototype: HTMLAmplifyExamplesElement;
    new (): HTMLAmplifyExamplesElement;
  };

  interface HTMLAmplifyFormFieldElement extends Components.AmplifyFormField, HTMLStencilElement {}
  var HTMLAmplifyFormFieldElement: {
    prototype: HTMLAmplifyFormFieldElement;
    new (): HTMLAmplifyFormFieldElement;
  };

  interface HTMLAmplifyFormSectionElement extends Components.AmplifyFormSection, HTMLStencilElement {}
  var HTMLAmplifyFormSectionElement: {
    prototype: HTMLAmplifyFormSectionElement;
    new (): HTMLAmplifyFormSectionElement;
  };

  interface HTMLAmplifyHintElement extends Components.AmplifyHint, HTMLStencilElement {}
  var HTMLAmplifyHintElement: {
    prototype: HTMLAmplifyHintElement;
    new (): HTMLAmplifyHintElement;
  };

  interface HTMLAmplifyIconElement extends Components.AmplifyIcon, HTMLStencilElement {}
  var HTMLAmplifyIconElement: {
    prototype: HTMLAmplifyIconElement;
    new (): HTMLAmplifyIconElement;
  };

  interface HTMLAmplifyInputElement extends Components.AmplifyInput, HTMLStencilElement {}
  var HTMLAmplifyInputElement: {
    prototype: HTMLAmplifyInputElement;
    new (): HTMLAmplifyInputElement;
  };

  interface HTMLAmplifyLabelElement extends Components.AmplifyLabel, HTMLStencilElement {}
  var HTMLAmplifyLabelElement: {
    prototype: HTMLAmplifyLabelElement;
    new (): HTMLAmplifyLabelElement;
  };

  interface HTMLAmplifyLinkElement extends Components.AmplifyLink, HTMLStencilElement {}
  var HTMLAmplifyLinkElement: {
    prototype: HTMLAmplifyLinkElement;
    new (): HTMLAmplifyLinkElement;
  };

  interface HTMLAmplifyRadioButtonElement extends Components.AmplifyRadioButton, HTMLStencilElement {}
  var HTMLAmplifyRadioButtonElement: {
    prototype: HTMLAmplifyRadioButtonElement;
    new (): HTMLAmplifyRadioButtonElement;
  };

  interface HTMLAmplifySceneLoadingElement extends Components.AmplifySceneLoading, HTMLStencilElement {}
  var HTMLAmplifySceneLoadingElement: {
    prototype: HTMLAmplifySceneLoadingElement;
    new (): HTMLAmplifySceneLoadingElement;
  };

  interface HTMLAmplifySectionElement extends Components.AmplifySection, HTMLStencilElement {}
  var HTMLAmplifySectionElement: {
    prototype: HTMLAmplifySectionElement;
    new (): HTMLAmplifySectionElement;
  };

  interface HTMLAmplifySelectElement extends Components.AmplifySelect, HTMLStencilElement {}
  var HTMLAmplifySelectElement: {
    prototype: HTMLAmplifySelectElement;
    new (): HTMLAmplifySelectElement;
  };

  interface HTMLAmplifySignInElement extends Components.AmplifySignIn, HTMLStencilElement {}
  var HTMLAmplifySignInElement: {
    prototype: HTMLAmplifySignInElement;
    new (): HTMLAmplifySignInElement;
  };

  interface HTMLAmplifySignInPasswordFieldElement extends Components.AmplifySignInPasswordField, HTMLStencilElement {}
  var HTMLAmplifySignInPasswordFieldElement: {
    prototype: HTMLAmplifySignInPasswordFieldElement;
    new (): HTMLAmplifySignInPasswordFieldElement;
  };

  interface HTMLAmplifySignInUsernameFieldElement extends Components.AmplifySignInUsernameField, HTMLStencilElement {}
  var HTMLAmplifySignInUsernameFieldElement: {
    prototype: HTMLAmplifySignInUsernameFieldElement;
    new (): HTMLAmplifySignInUsernameFieldElement;
  };

  interface HTMLAmplifyTextFieldElement extends Components.AmplifyTextField, HTMLStencilElement {}
  var HTMLAmplifyTextFieldElement: {
    prototype: HTMLAmplifyTextFieldElement;
    new (): HTMLAmplifyTextFieldElement;
  };

  interface HTMLAmplifyTextInputElement extends Components.AmplifyTextInput, HTMLStencilElement {}
  var HTMLAmplifyTextInputElement: {
    prototype: HTMLAmplifyTextInputElement;
    new (): HTMLAmplifyTextInputElement;
  };

  interface HTMLRockPaperScissorElement extends Components.RockPaperScissor, HTMLStencilElement {}
  var HTMLRockPaperScissorElement: {
    prototype: HTMLRockPaperScissorElement;
    new (): HTMLRockPaperScissorElement;
  };
  interface HTMLElementTagNameMap {
    'amplify-authenticator': HTMLAmplifyAuthenticatorElement;
    'amplify-button': HTMLAmplifyButtonElement;
    'amplify-checkbox': HTMLAmplifyCheckboxElement;
    'amplify-examples': HTMLAmplifyExamplesElement;
    'amplify-form-field': HTMLAmplifyFormFieldElement;
    'amplify-form-section': HTMLAmplifyFormSectionElement;
    'amplify-hint': HTMLAmplifyHintElement;
    'amplify-icon': HTMLAmplifyIconElement;
    'amplify-input': HTMLAmplifyInputElement;
    'amplify-label': HTMLAmplifyLabelElement;
    'amplify-link': HTMLAmplifyLinkElement;
    'amplify-radio-button': HTMLAmplifyRadioButtonElement;
    'amplify-scene-loading': HTMLAmplifySceneLoadingElement;
    'amplify-section': HTMLAmplifySectionElement;
    'amplify-select': HTMLAmplifySelectElement;
    'amplify-sign-in': HTMLAmplifySignInElement;
    'amplify-sign-in-password-field': HTMLAmplifySignInPasswordFieldElement;
    'amplify-sign-in-username-field': HTMLAmplifySignInUsernameFieldElement;
    'amplify-text-field': HTMLAmplifyTextFieldElement;
    'amplify-text-input': HTMLAmplifyTextInputElement;
    'rock-paper-scissor': HTMLRockPaperScissorElement;
  }
}

declare namespace LocalJSX {
  interface AmplifyAuthenticator extends JSXBase.HTMLAttributes<HTMLAmplifyAuthenticatorElement> {
    'content'?: Function;
    'onAuthStateChange'?: (event: CustomEvent<any>) => void;
    'override'?: boolean;
    'signIn'?: Function;
  }
  interface AmplifyButton extends JSXBase.HTMLAttributes<HTMLAmplifyButtonElement> {
    'role'?: string;
    'styleOverride'?: boolean;
    'type'?: string;
  }
  interface AmplifyCheckbox extends JSXBase.HTMLAttributes<HTMLAmplifyCheckboxElement> {
    /**
    * If `true`, the checkbox is selected.
    */
    'checked'?: boolean;
    /**
    * If `true`, the checkbox is disabled
    */
    'disabled'?: boolean;
    /**
    * Field ID used for the 'htmlFor' in the label
    */
    'fieldId'?: string;
    /**
    * Label for the checkbox
    */
    'label'?: string;
    /**
    * Name of the checkbox
    */
    'name'?: string;
    /**
    * (Optional) Overrides default styling
    */
    'styleOverride'?: boolean;
    /**
    * Value of the checkbox
    */
    'value'?: string;
  }
  interface AmplifyExamples extends JSXBase.HTMLAttributes<HTMLAmplifyExamplesElement> {}
  interface AmplifyFormField extends JSXBase.HTMLAttributes<HTMLAmplifyFormFieldElement> {
    /**
    * The text of the description.  Goes between the label and the input.
    */
    'description'?: string | null;
    /**
    * The ID of the field.  Should match with its corresponding input's ID.
    */
    'fieldId'?: string;
    /**
    * The text of a hint to the user as to how to fill out the input.  Goes just below the input.
    */
    'hint'?: string | null;
    /**
    * The text of the label.  Goes above the input. Ex: 'First name'
    */
    'label'?: string | null;
    /**
    * The callback, called when the input is modified by the user.
    */
    'onInputChange'?: (inputEvent: Event) => void;
    /**
    * (Optional) Override default styling
    */
    'overrideStyle'?: boolean;
    /**
    * (Optional) The placeholder for the input element.  Using hints is recommended, but placeholders can also be useful to convey information to users.
    */
    'placeholder'?: string;
    /**
    * The input type.  Can be any HTML input type.
    */
    'type'?: TextFieldTypes;
  }
  interface AmplifyFormSection extends JSXBase.HTMLAttributes<HTMLAmplifyFormSectionElement> {
    /**
    * (Required) Function called upon submission of form
    */
    'handleSubmit'?: (inputEvent: Event) => void;
    /**
    * Used for form section header
    */
    'headerText'?: string;
    /**
    * (Optional) Overrides default styling
    */
    'overrideStyle'?: boolean;
    /**
    * (Optional) Used as a the default value within the default footer slot
    */
    'submitButtonText'?: string;
  }
  interface AmplifyHint extends JSXBase.HTMLAttributes<HTMLAmplifyHintElement> {
    'overrideStyle'?: boolean;
  }
  interface AmplifyIcon extends JSXBase.HTMLAttributes<HTMLAmplifyIconElement> {
    /**
    * (Required) Name of icon used to determine the icon rendered
    */
    'name'?: IconNameType;
    /**
    * (Optional) Override default styling
    */
    'overrideStyle'?: boolean;
  }
  interface AmplifyInput extends JSXBase.HTMLAttributes<HTMLAmplifyInputElement> {
    /**
    * The text of the description.  Goes just below the label.
    */
    'description'?: string | null;
    /**
    * The ID of the field.  Should match with its corresponding input's ID.
    */
    'fieldId'?: string;
    /**
    * The callback, called when the input is modified by the user.
    */
    'onInputChange'?: (inputEvent: Event) => void;
    /**
    * (Optional) Override default styling
    */
    'overrideStyle'?: boolean;
    /**
    * (Optional) The placeholder for the input element.  Using hints is recommended, but placeholders can also be useful to convey information to users.
    */
    'placeholder'?: string;
    /**
    * The input type.  Can be any HTML input type.
    */
    'type'?: TextFieldTypes;
  }
  interface AmplifyLabel extends JSXBase.HTMLAttributes<HTMLAmplifyLabelElement> {
    'htmlFor'?: string;
    'overrideStyle'?: boolean;
  }
  interface AmplifyLink extends JSXBase.HTMLAttributes<HTMLAmplifyLinkElement> {
    'role'?: string;
    'styleOverride'?: boolean;
  }
  interface AmplifyRadioButton extends JSXBase.HTMLAttributes<HTMLAmplifyRadioButtonElement> {
    /**
    * If `true`, the radio button is selected.
    */
    'checked'?: boolean;
    /**
    * If `true`, the checkbox is disabled
    */
    'disabled'?: boolean;
    /**
    * Field ID used for the 'for' in the label
    */
    'fieldId'?: string;
    /**
    * Label for the radio button
    */
    'label'?: string;
    /**
    * (Optional) Name of radio button
    */
    'name'?: string;
    /**
    * (Optional) Overrides default styling
    */
    'styleOverride'?: boolean;
    /**
    * (Optional) Value of radio button
    */
    'value'?: string;
  }
  interface AmplifySceneLoading extends JSXBase.HTMLAttributes<HTMLAmplifySceneLoadingElement> {
    'loadPercentage'?: number;
    'sceneError'?: object;
    'sceneName'?: string;
  }
  interface AmplifySection extends JSXBase.HTMLAttributes<HTMLAmplifySectionElement> {
    'overrideStyle'?: boolean;
    'role'?: string;
  }
  interface AmplifySelect extends JSXBase.HTMLAttributes<HTMLAmplifySelectElement> {
    /**
    * Used for id field
    */
    'fieldId'?: string;
    /**
    * The options of the select input. Must be an Array of Objects with an Object shape of {label: string, value: string|number}
    */
    'options'?: SelectOptionsString | SelectOptionsNumber;
    /**
    * (Optional) Overrides default styling
    */
    'styleOverride'?: boolean;
  }
  interface AmplifySignIn extends JSXBase.HTMLAttributes<HTMLAmplifySignInElement> {
    'handleSubmit'?: (Event) => void;
    'overrideStyle'?: boolean;
    'validationErrors'?: string;
  }
  interface AmplifySignInPasswordField extends JSXBase.HTMLAttributes<HTMLAmplifySignInPasswordFieldElement> {
    'component'?: Function;
    'description'?: string | null;
    'fieldId'?: string;
    'hint'?: string | null;
    'inputProps'?: {
      type?: TextFieldTypes;
      onChange?: (Event) => void;
    };
    'label'?: string | null;
  }
  interface AmplifySignInUsernameField extends JSXBase.HTMLAttributes<HTMLAmplifySignInUsernameFieldElement> {
    'component'?: Function;
    'description'?: string | null;
    'fieldId'?: string;
    'hint'?: string | null;
    'inputProps'?: {
      type?: TextFieldTypes;
      onChange?: (Event) => void;
    };
    'label'?: string | null;
  }
  interface AmplifyTextField extends JSXBase.HTMLAttributes<HTMLAmplifyTextFieldElement> {
    'description'?: string | null;
    'fieldId'?: string;
    'inputProps'?: {
      type?: string;
      onInput?: (Event) => void;
    };
    'label'?: string | null;
  }
  interface AmplifyTextInput extends JSXBase.HTMLAttributes<HTMLAmplifyTextInputElement> {
    'description'?: string | null;
    'fieldId'?: string;
    'inputProps'?: {
      type?: string;
      onInput?: (Event) => void;
    };
    'label'?: string | null;
  }
  interface RockPaperScissor extends JSXBase.HTMLAttributes<HTMLRockPaperScissorElement> {
    'icon'?: Function;
    'onIconChange'?: (event: CustomEvent<any>) => void;
  }

  interface IntrinsicElements {
    'amplify-authenticator': AmplifyAuthenticator;
    'amplify-button': AmplifyButton;
    'amplify-checkbox': AmplifyCheckbox;
    'amplify-examples': AmplifyExamples;
    'amplify-form-field': AmplifyFormField;
    'amplify-form-section': AmplifyFormSection;
    'amplify-hint': AmplifyHint;
    'amplify-icon': AmplifyIcon;
    'amplify-input': AmplifyInput;
    'amplify-label': AmplifyLabel;
    'amplify-link': AmplifyLink;
    'amplify-radio-button': AmplifyRadioButton;
    'amplify-scene-loading': AmplifySceneLoading;
    'amplify-section': AmplifySection;
    'amplify-select': AmplifySelect;
    'amplify-sign-in': AmplifySignIn;
    'amplify-sign-in-password-field': AmplifySignInPasswordField;
    'amplify-sign-in-username-field': AmplifySignInUsernameField;
    'amplify-text-field': AmplifyTextField;
    'amplify-text-input': AmplifyTextInput;
    'rock-paper-scissor': RockPaperScissor;
  }
}

export { LocalJSX as JSX };


declare module "@stencil/core" {
  export namespace JSX {
    interface IntrinsicElements extends LocalJSX.IntrinsicElements {}
  }
}


