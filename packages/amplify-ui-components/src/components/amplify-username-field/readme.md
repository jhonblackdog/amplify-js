# amplify-username-field



<!-- Auto Generated Below -->


## Properties

| Property      | Attribute     | Description                                                                     | Type      | Default                |
| ------------- | ------------- | ------------------------------------------------------------------------------- | --------- | ---------------------- |
| `fieldId`     | `field-id`    | Based on the type of field e.g. sign in, sign up, forgot password, etc.         | `string`  | `USERNAME_SUFFIX`      |
| `label`       | `label`       | Used for the username label                                                     | `string`  | `USERNAME_LABEL`       |
| `placeholder` | `placeholder` | Used for the placeholder label                                                  | `string`  | `USERNAME_PLACEHOLDER` |
| `required`    | `required`    | The required flag in order to make an input required prior to submitting a form | `boolean` | `false`                |


## Dependencies

### Used by

 - [amplify-auth-fields](../amplify-auth-fields)

### Depends on

- [amplify-form-field](../amplify-form-field)

### Graph
```mermaid
graph TD;
  amplify-username-field --> amplify-form-field
  amplify-form-field --> amplify-label
  amplify-form-field --> amplify-input
  amplify-form-field --> amplify-hint
  amplify-auth-fields --> amplify-username-field
  style amplify-username-field fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
