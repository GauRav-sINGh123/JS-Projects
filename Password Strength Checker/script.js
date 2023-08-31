let password=document.getElementById("password");
let message=document.getElementById("message");
let strength=document.getElementById("strength");

password.addEventListener('input',(e)=>{
    if(password.value.length==0){
       
        message.style.display="none";

    }
    else (password.value.length>0)
    {
        message.style.display="block";
}

if(password.value.length<4){
      password.style.borderColor="#ff5925";
      strength.innerHTML="weak";
    message.style.color="#ff5925";
}
else if(password.value.length>4 && password.value.length<8)
{
    password.style.borderColor="yellow";
    strength.innerHTML="medium";
    message.style.color="yellow";
}
else if(password.value.length>=8  )
{
    password.style.borderColor="#0ac536";
    strength.innerHTML="strong";
    message.style.color="#0ac536";
}
})