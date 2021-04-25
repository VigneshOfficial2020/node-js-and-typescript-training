const getDetails = (...args: number[]): void => {
  console.log(args);
};

getDetails(23, 23, 55, 222, 122);

let [hobby1, hobby2] = ["games", "music"];
console.log(hobby1);
