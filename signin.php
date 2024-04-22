function redirectToSignUp() {
    window.location.href = "signup.html";
}

function validateSignIp(event) {
    event.preventDefault();
  
    var emailInput = document.getElementById("email");
    var passwordInput = document.getElementById("password");
    
    var email = emailInput.value;
    var password = passwordInput.value;

    let emailRegex
  
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(emailInput)) {
      // Successful sign-in, redirect to home page
      window.location.href = "index.html";
    } else {
      
      alert("Please enter a valid email.");
    }

}