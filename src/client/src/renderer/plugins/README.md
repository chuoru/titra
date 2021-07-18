# Using i18n manage text and translation
1. Manage text
- Get text: syntax `{{$t('<path-to-text>')}}
- Example: `<h1>{{ $t('general.userName') }}!</h1>`

`/locales/en/general.json`
```
{
  "general": {
    "userName": "User Name",
    "password": "Password",
    "logIn": {
      "header": "Log In Page",
      "btnLogin": "Log In"
    },
    "notifications": {
      "title": "Pop Up",
      "bodyConfirm": "Confirm Message",
      "bodySuccess": "Successful Message",
      "btnOk": "OK",
      "btnCancel": "CANCEL"
    }
  }
}
```
- Result: User Name