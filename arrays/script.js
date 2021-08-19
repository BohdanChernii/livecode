const numbersList1 = [1, 2, 3, 4, 5];

console.log(numbersList1);

numbersList1.pop

console.log(numbersList1);

const numbersList2 = [1, 2, 3, 4, 5];

console.log('before push ', numbersList2);
const res = numbersList2.push(100);
console.log(res);
console.log('after push ', numbersList2);

const numbersList3 = [1, 2, 3, 4, 5];
console.log('before shift ', numbersList3);
const res3 = numbersList3.shift();
console.log(res3);
console.log('after shift ', numbersList3)

const numbersList4 = [1, 2, 3, 4, 5];
console.log('before slice ', numbersList4);
const res4 = numbersList4.slice();
console.log(res4);
console.log('after slice ', numbersList4)


//CALLBACK
function sum (from, to, printer){
    let sum = 0;
    for(let index = from; index <= to; index +=1){
        sum+=index;
    }
    printer(sum);
}

// test data 
// function printResult{
//     alert(res)
// }

function printResult(res){
    alert(res);
}
// function printResult(res){
//     send email
// }
sum(5,8, printResult);


const anotherNumbersList = [5, 0, 8, 10, -4, 50, 220];
console.log('before filter ', anotherNumbersList)

//input: callback
//output: array

//callback
//input: nim, index (optimal), array (optimal)
//output: boolean

//OPTION 1
// function filterCallback(element){
//     console.log(element)
//     if(element>5){
//         return true;
//     }else{
//         return false;
//     }
// }

const filterRes = anotherNumbersList.filter(el => el > 5);
console.log(filterRes);

console.log('after filter ', anotherNumbersList)
