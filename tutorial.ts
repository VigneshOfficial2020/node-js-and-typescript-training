// Exercise 2
var greet = (name?: string): void => {
  if (name === undefined) {
    name = "Max";
  }
  console.log("Hello, " + name);
};
greet();
greet("Anna");
