const price = [1,2,3,4,5];
const total = price.reduce((total , num)=> total + num, 0)
console.log("$" + total.toFixed(2))