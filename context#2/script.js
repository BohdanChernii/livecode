function printMessage(country, city) {
  console.log(this);

  console.log(
    `Hello, ${this.firstName}. My age is ${this.age}. I am from ${country}, ${city}`
  );
}

const user = {
  firstName: "Andrey",
  age: 111,
  tempFunc: "some secret data",
};
console.dir(printMessage);

console.log(user);

//printMessage('Ukraine', 'Lviv');

//input: context, arg1 ...argN(optimal)
//output: func;

//option 1
//const printMessageBinded = printMessage.bind(user);
//printMessageBinded('Ukraine','Lviv')

//Option 2
printMessage.bind(user)("Ukraine", "Lviv");

const printMessageBinded2 = printMessage.bind(user, "UK", "London");
printMessageBinded2("France", "Paris");

const printMessageBinded3 = printMessage.bind(user, "UK", "London");
printMessageBinded3("Warsaw");

//input: func, context, arg1 ...argN (optimal)
//output: bindedFunc
function myBind(func, context, ...args) {
  //call
  //input: context, arg1 ...argN
  //output: func result

  //input: the same as func
  //out: func result
  return function (...funcArgs) {
    func.call(context, ...args, ...funcArgs);
  };
}
const bindedFunc = myBind(printMessage, user);
bindedFunc('Poland','Warsaw');

const bindedFunc2 = myBind(printMessage, user, "UA");
bindedFunc2('Sokal');
