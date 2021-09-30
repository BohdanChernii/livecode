//input:object
//ouput:obj

//create function ():obj, 0:array
//get key & value
//add to object key(id)and
//good
// const getCustomersList = obj => {
//     //in:callback
//     //out:arr

//     //input: array
//     //output: obj
    
//     return Object.entries(obj).map(arr => {
//        
//         return { id: arr[0], ...arr[1]};
//     }).sort((a,b) => a.age -b.age);

// }
//best
const getCustomersList = obj => {
    //in:callback
    //out:arr

    //input: array
    //output: obj
    
    return Object.entries(obj)
    .map(([id, customerObj]) => ({ id, ...customerObj}))
    .sort((a,b) => a.age - b.age);

}

const customers = {
    'customers-id-1': {
      name: 'William',
      age: 54,
    },
    'customers-id-2': {
      name: 'Tom',
      age: 17,
    },
  };
  console.log(getCustomersList(customers));
