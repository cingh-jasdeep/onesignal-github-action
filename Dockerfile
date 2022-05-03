FROM node:10.11.0-alpine

COPY ./notify /notify

ENTRYPOINT ["/notify/entrypoint.sh"]

LABEL "com.github.actions.name"="Github Action for OneSignal Notification"
LABEL "com.github.actions.description"="Receive push notification to your devices using Github Actions"
# LABEL "com.github.actions.icon"="send"
# LABEL "com.github.actions.color"="red"
LABEL "repository"="https://github.com/cingh-jasdeep/onesignal-github-action"
LABEL "homepage"="https://documentation.onesignal.com/reference/create-notification"
LABEL "maintainer"="https://github.com/cingh-jasdeep"
