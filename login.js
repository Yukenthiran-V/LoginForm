function myFunction(){
    var pass=document.getElementById("password");
    if(pass.type=="password"){
        pass.type="text";
    }
    else{
        pass.type="password";
    }
}

function validateForm(){
    const name=document.getElementById("username").value;
    const pass=document.getElementById("password").value;
    const msg=document.getElementById("err-msg");
    const msg_pass=document.getElementById("err-msg2");
     if(name.trim()==""){
        msg.textContent="username cannot be empty.";
        return false;
     }
     if(pass.length<8){
       msg_pass.textContent="at least 8 characters long.";
       return false;
     }
     alert("Login successful!")
     return true;
}