// function getUserData(callback){
//     setTimeout(() =>{
//         const user={ id:20, name:"ciise"}
//         const people={ id: 39, name:"abdi"}
//         callback(user,people)
//     }, 3000)
// }

// getUserData(function(user,people){
// console.log(user,people)
// })

// blocking

function fetchMassageSync(){
    alert("waa so daahday")
    return ("hada so gal")
}
console.log("Start fetching massage...");
const user = fetchMassageSync();
console.log(user);
console.log("massage kan wa blocked inta ka hore so baxayo.");



console.log("exercise 2")
// non-blocking

function fetchMassage(callback){
    setTimeout(()=> {
        const massage = ("waad so daahday");
        callback(massage);
    }, 2000)
}
fetchMassage(function(massage){
console.log(massage);})
console.log("soo gal");

