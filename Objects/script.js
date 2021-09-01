//input: object,string,string
//output:object
function addPropertyV1(obj, key, value) {
    obj[key] = value;
    return obj
  }
  const transaction = {
    value: 170,
  };
  console.log(addPropertyV1(transaction, 'currency','USD'));
  console.log(transaction)

  //input:target (object), source (object) .... source N (object)
  //output:object

  function addPropertyV2(obj, key, value) {
    return Object.assign (obj,{[key]: value})
  }
  const transaction2 = {
    value: 170,
  };
  console.log(addPropertyV2(transaction2,'name','Bohdan'));
  console.log(transaction2)

  const transaction3 = {
    value: 170,
  };
  function addPropertyV3(obj, key, value) {
    return  Object.assign ({},obj,{[key]: value})

  }
  console.log(addPropertyV3(transaction3, 'name','john'))
  console.log(addPropertyV3(transaction3, 'name','Uriy'))
  

  const transaction4 = {
    value: 170,
  };
  function addPropertyV4(obj, key, value) {
    return  {...obj, [key]:value}

  }
  console.log(addPropertyV4(transaction4, 'age',20 ))


const numbers = [1,2,3,4,5,6,7,8,9]
console.log(numbers)
console.log(...numbers)
const numbersCopy = [...numbers,111,22,22]
console.log(numbersCopy);

const transactionTest = {
    value:170
};

//rest operator
function sum(param1,...param){
    console.log(param1)
    console.log(param)
    return param.reduce((acc,el)=>{
        acc+=el;
        return acc;
    })
}
//test data
console.log(sum(1,2,55,9,0));
//data  destructing
const numberRest = [10,11,18, 7,0]
const [firstElement,...restArr] = numberRest;
console.log(firstElement);
console.log(restArr)  

const restArrCopy = [...restArr]; // spread