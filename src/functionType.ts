
// Neither of these assignments results in a type error.
type StringsToNumberFunction = (arg0: string, arg1: string) => number;

let myFunc: StringsToNumberFunction;
myFunc = function (firstName: string, lastName: string) {
  return firstName.length + lastName.length;
};

myFunc = function (whatever: string, blah: string) {
  return whatever.length - blah.length;
};
