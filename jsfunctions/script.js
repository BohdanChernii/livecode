function getSenseOfLife(){
    return 42;
}
console.log(getSenseOfLife())

function getSenseOfLife(num){
    return (num ** 2)
   }
   console.log(getSenseOfLife(42));
   console.log(getSenseOfLife(0));
   console.log(getSenseOfLife(10));
   console.log(getSenseOfLife(-4));

   const sum = (num1, num2) => {
    return num1 + num2;
   }
   console.log(sum(10,10));
   console.log(sum(1,2));
   console.log(sum(0,-1));
   
   function getMessage(age){
       return (`I am ${age} years old!`)
   }
   console.log(getMessage(20));

   const mult = (numOne, numTwo) => {
       return numOne * numTwo;
   }
   console.log(mult(2, 2));

   
const suare = num => num ** 2
   console.log(square(5));

function getMagicNumber(){
     return 17;
}
console.log(getMagicNumber())