var winston = require("winston");
var fs = require("fs");
var logDir = "logs/common";

if (!fs.existsSync("logs")) {
  fs.mkdirSync("logs");
}
if (!fs.existsSync(logDir)) {
  fs.mkdirSync(logDir);
}

var tsFormat = () => new Date().toLocaleTimeString();
module.exports = winston.createLogger({
  transports: [
    new (require("winston-daily-rotate-file"))({
      filename: `${logDir}/-results.log`,
      timestamp: tsFormat,
      datePattern: "yyyy-MM-DD",
      prepend: true,
      maxSize: "20m",
      maxFiles: "14d",
    }),
  ],
});
