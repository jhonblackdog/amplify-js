# amplify-sign-in



<!-- Auto Generated Below -->


## Properties

| Property           | Attribute            | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       | Type                         | Default              |
| ------------------ | -------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------- | -------------------- |
| `formFields`       | --                   | Form fields allows you to utilize our pre-built components such as username field, code field, password field, email field, etc. by passing an array of strings that you would like the order of the form to be in. If you need more customization, such as changing text for a label or adjust a placeholder, you can follow the structure below in order to do just that. ``` [   {     type: 'username'\|'password'\|'email'\|'code'\|'default',     label: string,     placeholder: string,     hint: string \| Functional Component \| null,     required: boolean   } ] ``` | `FormFieldTypes \| string[]` | `SIGN_IN_COMPONENTS` |
| `handleSubmit`     | --                   | Fires when sign in form is submitted                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              | `(Event: any) => void`       | `undefined`          |
| `headerText`       | `header-text`        | Used for header text in sign in component                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         | `string`                     | `HEADER_TEXT`        |
| `overrideStyle`    | `override-style`     | (Optional) Overrides default styling                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              | `boolean`                    | `false`              |
| `submitButtonText` | `submit-button-text` | Used for the submit button text in sign in component                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              | `string`                     | `SUBMIT_BUTTON_TEXT` |
| `validationErrors` | `validation-errors`  | Engages when invalid actions occur, such as missing field, etc.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   | `string`                     | `undefined`          |


## Dependencies

### Used by

 - [amplify-authenticator](../amplify-authenticator)
 - [amplify-examples](../amplify-examples)

### Depends on

- [amplify-form-section](../amplify-form-section)
- [amplify-auth-fields](../amplify-auth-fields)
- [amplify-link](../amplify-link)
- [amplify-link](../amplify-link)
- [amplify-button](../amplify-button)

### Graph
```mermaid
graph TD;
  amplify-sign-in --> amplify-form-section
  amplify-sign-in --> amplify-auth-fields
  amplify-sign-in --> amplify-link
  amplify-sign-in --> amplify-link
  amplify-sign-in --> amplify-button
  amplify-form-section --> amplify-section
  amplify-form-section --> amplify-button
  amplify-auth-fields --> amplify-username-field
  amplify-auth-fields --> amplify-password-field
  amplify-auth-fields --> amplify-email-field
  amplify-auth-fields --> amplify-code-field
  amplify-auth-fields --> amplify-form-field
  amplify-auth-fields --> amplify-form-field
  amplify-username-field --> amplify-form-field
  amplify-form-field --> amplify-label
  amplify-form-field --> amplify-input
  amplify-form-field --> amplify-hint
  amplify-password-field --> amplify-form-field
  amplify-email-field --> amplify-form-field
  amplify-code-field --> amplify-form-field
  amplify-authenticator --> amplify-sign-in
  amplify-examples --> amplify-sign-in
  style amplify-sign-in fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
