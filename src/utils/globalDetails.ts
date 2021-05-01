const requestDetails: any = require("request");

const globalDetails = (address: any, callback: any) => {
  const url = address;
  console.log("It is in the getDetails API");
  requestDetails({ url: url, json: true }, (error: any, response: any) => {
    if (error) {
      console.log("getDetails Error");
      callback("some data 1", null);
    }
    console.log("getDetails inside body");
    callback("some data 2", response.body);
  });
};
module.exports = globalDetails;
