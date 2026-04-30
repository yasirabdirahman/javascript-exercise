function password(){
    return new Promise((resolve, reject) => {
        setTimeout(()=> {
            const correct = true
            if (correct)
                {resolve ({id:20, name: "yaser"})}
            else 
                {reject ("password ka wa khalad ")}
        }, 2000)
    })
}

async function catchPassword() {
    try{
        const user = await password()
        console.log(user)
    }catch(err){
        console.log(err)
    }
}

catchPassword()