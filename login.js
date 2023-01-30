function validateform(){  
    var email=document.login_form.email.value;  
    var password=document.login_form.password.value;  
      
    if (email==null || email==""){  
      alert("Name can't be blank");  
      return false;  
    }else if(password.length<6){  
      alert("Password must be at least 6 characters long.");  
      return false;  
      }  
    }  