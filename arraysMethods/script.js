const numbersList = [5, 0, 8, 10, -4, 50, 220];

console.log('numberslist before map', numbersList);

// input:WebGLUniformLocation, oobj(optional)
//output: array

// callback
// input:numbersList, index(optional), array (optional)
// output:number

// const mapRes = numberList.map(function(el, index, array){
//     console.log(el);
//     console.log(index);
//     console.log(array);

//     return el * el;
// });

const mapRes = numbersList.map(el => el * el);
console.log(mapRes);

console.log('numbersList after map', numbersList)

// Foreach
// input: callback, obj (optional)
// output undefined

// callback
// input:numbersList, index (optional), array 
//  *-output:undefined


const Res = numbersList.forEach(el => {
    if(el>=0){
        console.log(el)
    }
});

console.log(Res)

//FIND
//INPUT callback
//output number || undefined

//callback
//input number, index (optional, array (optional))
//output: number || undefined

//option1
// const findRes = numbersList.find(el =>{
//     if(el % 2 === 0 && el>0){
//         return true
//     }
//     return false;
// })
// console.log(findRes)

// option2
const findRes = numbersList.find(el =>el % 2 === 0 && el>0);
console.log(findRes);

//REDUCE 
const transactions = [5, 0, 8, 10, -4, 50, 220];

//input: callback, number (acc initial value, optional)
//ouput: number

//callback
//inpu: acc(number), number, index (optional), array(optional)
//output:number
const reduced = transactions.reduce((acc, element,index) =>{
    console.log('step: ' + index + ', acc is: ' + acc + ', element is: ' + element)
    acc+=element;
    return acc;
});

console.log(reduced)