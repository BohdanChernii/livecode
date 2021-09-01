//learn requirement
//Algorythm
//draft solution & testing
//Refactoring



//TASK1

//input: arr, arr
//output: object

//algo
//1. res create res obj
//2. iterate keylist
//3. get value by index
//4. add key-value to the object

//BAD
function buildObjectBad(keysList, valuesList) {
    let obj = {};

    for(let index = 0; index < keysList.length; index +=1){
        obj = {...obj, [keysList[index]]:valuesList[index]}
    }
    return obj;
  }
  
//GOOD!!!
    function buildObjectGood(keylist, valuesList){
        return keylist.reduce((obj,key, index) => {
         return{...obj, [key]: valuesList[index]};
        }, {})
    }

  //GOOD2!!!
  const buildObject = (keysList, valuesList) =>
    keysList.reduce((obj, key, index) => ({...obj,[key]: valuesList[index]}),{});
  
  

  // examples
  const keys = ['name', 'address', 'age'];
  const values = ['Bob', 'Ukraine', 34];
  const result = buildObject(keys, values); // ==> { name: 'Bob', address: 'Ukraine', age: 56 }
  console.log(result)

//========================================================================================================
  

//TASK2