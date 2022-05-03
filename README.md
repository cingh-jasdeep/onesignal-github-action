WIP
# Github Action for OneSignal Notification
Receive push notification from OneSignal to your devices using Github Actions

## Pre-requisites

To run this action you'll need:

- An API key and an App ID from OneSignal (https://documentation.onesignal.com/docs/accounts-and-keys)

## Setup

1. Create the workflow and choose any event of your choice.
2. Copy and paste the following snippet into your .yml file.
```
- name: Send OneSignal Notification
  uses: cingh-jasdeep/onesignal-github-action@0.0.1
```
1. Required environment variables
   ```
   APP_ID
   API_KEY
   ```
   Optional environment variables
   ```
   MESSAGE
   IS_ANDROID
   IS_IOS
   IS_ANY_WEB
   WEB_URL
   ```
   reference for these variables
   https://documentation.onesignal.com/reference/create-notification

2. Commit your changes!

## Sample Workflows

### Send notification on every commit

```yaml
name: Push on commit

on: [push]

jobs:
  build:

    runs-on: ubuntu-latest

    steps:
    - name: Send OneSignal Notification
      uses: cingh-jasdeep/onesignal-github-action@0.0.1
      env:
        API_KEY: ${{ secrets.API_KEY }}
        APP_ID: "YOUR_APP_ID_HERE"
        MESSAGE: "There is a new commit!"
```

### Send notification using schedule trigger

```yaml
name: Test push every day

on: 
  schedule:
    - cron: '* 0 * * *'

jobs:
  build:

    runs-on: ubuntu-latest

    steps:
    - name: Send OneSignal Notification
      uses: cingh-jasdeep/onesignal-github-action@0.0.1
      env:
        API_KEY: ${{ secrets.API_KEY }}
        APP_ID: "YOUR_APP_ID_HERE"
        MESSAGE: "Test notification from GitHub"
```

### Customize notification title / add a link
```yaml
name: Test push every day

on: 
  schedule:
    - cron: '* 0 * * *'
jobs:
  build:

    runs-on: ubuntu-latest

    steps:
    - name: Send OneSignal Notification
      uses: cingh-jasdeep/onesignal-github-action@0.0.1
      env:
        API_KEY: ${{ secrets.API_KEY }}
        MESSAGE: "Test notification from GitHub 🧪"
        TITLE: Testing
        APP_ID: "YOUR_APP_ID_HERE"
        WEB_URL: https://github.com/techulus/push-github-action
```

## Support
Feel free to add issues in this repo, fork or make changes
original code from https://github.com/techulus/push-github-action 
