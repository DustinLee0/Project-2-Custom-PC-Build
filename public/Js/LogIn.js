async function logIn(event){
    event.preventDefault()
    try{
        const emailLogIn = document.querySelector("#loginEmail").value;
        const passwordLogIn = document.querySelector("#loginPassword").value;
        // console.log(email)

        if (emailLogIn && passwordLogIn){
            const response= await fetch(`${process.env.PORT}/api/user/login`,{
                method:'POST',
                body: JSON.stringify({email:emailLogIn,password:passwordLogIn}),
                headers: { 'Content-Type': 'application/json' }
            });
    
            console.log(response);
            if(response.ok){
                document.location.replace('/custom-pc');
            }else{
                alert(response.statusText);
            }
        }
       
    }catch(err){
        console.log(err);
    }
}

const loginButton = document.querySelector("#loginButton");
loginButton.addEventListener("click", logIn);