//algo
//1.copy/new arr
//2.iterate arr
//3.apply callback for every el
//4. push el to the res if callback true 

//input arr
//output:array

//callback 
//input: element, index, array
//output:boolean
//Option 2

const callback = (el) => el < 5;
const filterArrayElement = (arr, callback) => {
        const res = [];
        for (let index = 0; index < arr.length; index += 1) {
            if (callback(arr[index], index, arr)) {
                res.push(arr[index])
            }
        }
        return res;
    }
    // console.log(filterArrayElement(arr, callback))
    // //test data
    // 1
    // const arr = [1, 5, 10, 3, 9,];
    // const func = el => el >7;
    // console.log(filterArrayElement(arr, func))

//2
const array = [10, 5, 4, 99, 100, 213, 152, 50, 21]
const func = (el, index, arr) => {
    if (arr.length < 5) {
        return true;
    }
    return el > 7;
}
console.log(filterArrayElement(array, func))