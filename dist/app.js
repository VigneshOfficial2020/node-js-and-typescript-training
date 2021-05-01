"use strict";
const request = require("request");
const reqUrl = "https://jsonplaceholder.typicode.com/posts";
request({ url: reqUrl, json: true }, (error, data) => {
    try {
        if (error) {
            console.log("error = ", error);
            return;
        }
        let finaDetails = data.body;
        console.log("finaDetails = ", finaDetails[0]);
    }
    catch (error1) {
        console.log("error = ", error1);
    }
});
