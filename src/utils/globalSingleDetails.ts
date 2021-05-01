  const requestSingleDetails: any = require("request");

  const getSingleDetails = (address: any, callback: any) => {
    const url = address;
    console.log("It is in the getSingleDetails API", url);
    requestSingleDetails(
      { url: url, json: true },
      (error: any, response: any) => {
        if (error) {
          console.log("getSingleDetails Error");
          callback("some data 1", null);
        }
        console.log("getSingleDetails inside body");
        callback("some data 2", response.body);
      }
    );
  };
  module.exports = getSingleDetails;