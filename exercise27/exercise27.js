// function fetchUserData(){
//     return new Promise((resolve, reject) => {
//         setTimeout(()=> {
//             const success = false
//             if (success){
//                 resolve({id:30, name:"ciise"})
//             }else { reject("Failed to fetch user data") }
            
//     }, 1000)
//     })
// }
// fetchUserData()
// .then(data => console.log("user data:", data))
// .catch(error => console.log("error:", error))






function password(){
    return new Promise((resolve, reject) => {
        setTimeout(()=> {
            const correct = false
            if (correct)
                {resolve ({id:20, name: "yaser"})}
            else 
                {reject ("password ka wa khalad ")}
        }, 2000)
    })
}
password()
.then(data=> console.log("user data:", data))
.catch(err=> console.log("error:", err))
