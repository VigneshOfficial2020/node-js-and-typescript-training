"use strict";
const express = require('express');
const app = express();
app.listen(4000, () => {
    console.log('server is running in 4000 ');
});
app.use((req, res, next) => {
    console.log("This is first default execution");
    res.send("<h1>hello world</h1>");
});
