
/* /aglo */
/* 1. iterate from 2 to num

2. check every number if price
    2.1 iterate from 2  to N
    2.2 check if num % index === 0 - not prime

examples
9
step1: 9/2
sterp: 9/3  ---> not prime
step:  9/4 

input:
output:

*/

// function getPrimes(num){
//     for(index = 2; index <= num; index +=1){
//         let isPrime = true;
//         console.log('checking if ' + index + ' is prime');
//         for(let number = 2; number < index; number+=1){
//             console.log('checking  if number % index ' + number + ' ' + index );
//             if(index % number === 0){
//                 console.log('number is not prime: ' + index)
//                 isPrime= false;
//                 break
//             }
//         }
//         if(isPrime){
//             console.log(index);
//         }
//     }
// }
// getPrimes(15);

function isPrime(number){
    for(let index = 2;   index<number; index+=1){
        
        if(number%index === 0){
            return false
        }
    }
        return true
};

function getPrimes(num){
    for(index = 2; index <= num; index += 1){
        if(isPrime(index)){
            console.log(index);
        }
    }
}
getPrimes(15);