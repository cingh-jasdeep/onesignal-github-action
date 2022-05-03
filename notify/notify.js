// const fs = require('fs')
// const API_URL = 'https://push.techulus.com/api/v1/notify'

// const eventPayload = JSON.parse(fs.readFileSync(process.env.GITHUB_EVENT_PATH, 'utf8'))

// const message = {
// 	body: process.env.MESSAGE || 'No message specified',
// 	title: process.env.TITLE || `GitHub Notification from ${process.env.GITHUB_REPOSITORY}`
// }

// if (process.env.LINK) {
// 	message.link = process.env.LINK;
// }

// if (!process.env.API_KEY) {
// 	return console.error('API KEY is missing')
// }

// console.log("Sending message", JSON.stringify(message))

// request({
// 	url: API_URL,
// 	method: 'POST',
// 	headers: {
// 		'x-api-key': process.env.API_KEY
// 	},
// 	body: message,
// 	json: true
// }, (err, response) => {
// 	if (err) {
// 		return console.error(err.toString())
// 	}
// 	console.log("Notification sent!", response.body)
// })

var sendNotification = function (data) {
  var headers = {
    "Content-Type": "application/json; charset=utf-8",
    Authorization: "Basic " + process.env.API_KEY,
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
    console.error("ERROR:" + JSON.parse(e));
  });

  req.write(JSON.stringify(data));
  req.end();
};

var message = {
  app_id: process.env.APP_ID,
  contents: { en: process.env.MESSAGE || "No message specified" },
  included_segments: ["Subscribed Users"],
  headings: {
    en:
      process.env.TITLE ||
      `GitHub Notification from ${process.env.GITHUB_REPOSITORY}`,
  },
  isAndroid: process.env.IS_ANDROID == "false",
  isIos: process.env.IS_IOS == "false",
  isAnyWeb: process.env.IS_ANY_WEB == "false",
  web_url: process.env.WEB_URL || null,
};

sendNotification(message);
