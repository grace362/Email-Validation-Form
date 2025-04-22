document.getElementById("emailform").addEventListener("submit", function(event){

       event.preventDefault();
       
       const email =
       document.getElementById("email").value;
       
       const errMsg = document.getElementById("error-message");
       
       const pattern = /^[a-zA-z0-9 ._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z] {2,4}$/;     
            
       
             if (pattern.test(email)){
                errMsg.style.display = "none";
                    alert("Email is valid! form submitted.");
             
            
             document.getElementById("emailform").reset();
             
                  
                 }   
                 else {
              errMsg.style.display = "block";
                      
              errMsg.textContent = "Please enter a valid email address.";
                 }
     } );
