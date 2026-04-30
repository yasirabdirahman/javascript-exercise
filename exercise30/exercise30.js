// function greet(name){
//     console.log("hello " , name)
// }

// function salaan(callback){
//     const name = prompt("enter your name")
//     callback(name)
// }
// salaan(greet)



function operate(a,b,callback){
    return callback(a,b)
}

function add(a,b){
    return a + b;
}

function sub(a,b){
    return a-b;
}

function mult(a,b){
    return a*b;
}

function div(a,b){
    return a/b;
}

console.log("Add:", operate(10, 3, add));
console.log("Sub:", operate(50, 23, sub));
console.log("mult:", operate(5, 10, mult));
console.log("div:", operate(50, 2, div));
