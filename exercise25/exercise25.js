const arr1 = [1,2,3];
const allArr = [...arr1, 4,5,6];

console.log(allArr);


function multiply(...numbers){
    return numbers.reduce((total ,num) => total*num,1);
}
console.log(multiply(1,2,3,4,5,6));