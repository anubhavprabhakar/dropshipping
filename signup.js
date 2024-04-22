function validateSignUp(event) {
    event.preventDefault();
  
    var emailInput = document.getElementById("email");
    var passwordInput = document.getElementById("password");
    var confirmPasswordInput = document.getElementById("confirmPassword");
  
    var email = emailInput.value;
    var password = passwordInput.value;
    var confirmPassword = confirmPasswordInput.value;
  
    var isValid = True;

    if(email.trim() === '' && password !== confirmPassword){
      //validate email
      if(!validateEmail(emailInput.value)){
        alert('Please enter correct email format.')
      }else{
        // Validate password field
        var password = passwordInput.value.trim();
        if (password === "") {
        isValid = false;
        passwordInput.classList.add("error");
        } else {
          var passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
          if (!passwordRegex.test(password)) {
            isValid = false;
            passwordInput.classList.add("error");
            alert("Password should contain at least 8 characters, including one uppercase letter, one lowercase letter, and one digit.");
          } else {
            passwordInput.classList.remove("error");
          }
        }
      }
    }

    // Function to validate email using regex (as mentioned before)
    function validateEmail(email) {
      var regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
      return regex.test(email); 
    } 

    
  return isValid;
}


  function redirectToSignIn() {
    window.location.href = "signin.html";
}