// Exercise 2
var greet = function (name) {
    if (name === undefined) {
        name = "Max";
    }
    console.log("Hello, " + name);
};
greet();
greet("Anna");
