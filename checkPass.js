function validate_pass() {
    var password1 = document.getElementById("password1").value;
    var password2 = document.getElementById("password2").value;
    if (password1.length <= 7) {
        alert("Error: Password One less than 8 letters")
    } else if (password2.length <= 7) {
        alert("Error: Password Two less than 8 letters")
    } else if (password1 != password2) {
        alert("Passwords do not match")
    } else {
        alert("Sucess: Passwords are validated")
    }
}