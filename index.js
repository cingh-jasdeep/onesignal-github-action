const core = require("@actions/core");

//https://documentation.onesignal.com/reference/create-notification#example-code---create-notification
var sendNotification = function (data) {
  var headers = {
    "Content-Type": "application/json; charset=utf-8",
    Authorization: "Basic " + core.getInput("apiKey"),
  };

  var options = {
    host: "onesignal.com",
    port: 443,
    path: "/api/v1/notifications",
    method: "POST",
    headers: headers,
  };

  var https = require("https");
  var req = https.request(options, function (res) {
    res.on("data", function (data) {
      console.log("Response:");
      console.log(JSON.parse(data));
    });
  });

  req.on("error", function (e) {
    //https://docs.github.com/en/actions/creating-actions/setting-exit-codes-for-actions#setting-a-failure-exit-code-in-a-javascript-action
    core.setFailed(e.message);
  });

  req.write(JSON.stringify(data));
  req.end();
};

var message = {
  app_id: core.getInput("appId"),
  contents: { en: core.getInput("contentsEn") },
  included_segments: ["Subscribed Users"],
  headings: {
    en: core.getInput("headingsEn"),
  },
  isAndroid: core.getInput("isAndroid") == "false",
  isIos: core.getInput("isIos") == "false",
  isAnyWeb: core.getInput("isAnyWeb") == "false",
  web_url: core.getInput("webUrl") || null,
};

sendNotification(message);
