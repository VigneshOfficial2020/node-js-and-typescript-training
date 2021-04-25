type ComplexDetails = {
  age: number[];
  getAgeDetails: (all: boolean) => number[];
};

let complex: ComplexDetails = {
  age: [34, 34, 23, 123],
  getAgeDetails: function (all: boolean): number[] {
    return this.age;
  },
};

let complex2: ComplexDetails = {
  age: [34, 343434, 12312312321],
  getAgeDetails: function (all: boolean): number[] {
    return this.age;
  },
};
