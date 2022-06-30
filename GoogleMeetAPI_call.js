

// Refer: https://www.npmjs.com/package/google-meet-api
const Meeting = require('google-meet-api').meet;

// Can be generated on GCP
clientID = "<clientID>"
clientSecret = "<clientSecret>"
refreshToken = "<refreshToken>"

Meeting({
    clientId: clientID,
    clientSecret: clientSecret,
    refreshToken: refreshToken,
    date: "2022-06-11",
    time: "12:59",
    summary: 'Sample Scheduled meeting',
    location: 'India',
    description: 'This scheduling is done using google-meet-api'
}).then(function (result) {
    console.log(result);
})
