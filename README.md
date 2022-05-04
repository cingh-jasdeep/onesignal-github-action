# Github Action for OneSignal Notification

Receive push notification from OneSignal to your devices using Github Actions
## Inputs

[from actions.yml](./action.yml)
```
inputs:
  apiKey: # id of input
    description: "OneSignal API Key"
    required: true
  appId: # id of input
    description: "OneSignal App Id"
    required: true
  contentsEn: # id of input
    description: 'Notification "contents" in En locale, https://documentation.onesignal.com/reference/create-notification'
    required: false
    default: "No message specified"
  headingsEn: # id of input
    description: 'Notification "headings" in En locale, https://documentation.onesignal.com/reference/create-notification'
    required: false
  isAndroid: # id of input
    description: "https://documentation.onesignal.com/reference/create-notification"
    required: false
  isIos: # id of input
    description: "https://documentation.onesignal.com/reference/create-notification"
    required: false
  isAnyWeb: # id of input
    description: "https://documentation.onesignal.com/reference/create-notification"
    required: false
  webUrl: # id of input
    description: "https://documentation.onesignal.com/reference/create-notification"
    required: false
```

## Example usage

- name: Send OneSignal Notification
        uses: cingh-jasdeep/onesignal-github-action@0.0.4
        with:
          apiKey: ${{ secrets.ONESIGNAL_TEST_API_KEY }}
          appId: ${{ env.ONESIGNAL_APP_ID }}
          contentsEn: "Message"
          headingsEn: "Title"
          isAndroid: true
          isIos: true
          isAnyWeb: true
          webUrl: "https://example.com"

## Support
Feel free to add issues in this repo, fork or make changes
original code from https://github.com/techulus/push-github-action 
