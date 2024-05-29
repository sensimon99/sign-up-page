const form = document.getElementById('form')
const button = document.getElementById('button')
const firstName = document.querySelector('.firstName')
const lastName = document.querySelector('.lastName')
const email = document.querySelector('.email')
const password = document.querySelector('.password')

console.log(firstName, lastName, email, password)

form.addEventListener('submit', (e) => {
    e.preventDefault()
    const fName = firstName.value;
    const lName = lastName.value;
    const emailVal = email.value;
    const password = password.value;
})


const validateEmail = (email) => {
    return email.match(
        /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
        return re.test(String(email).toLocaleLowerCase)
}

function myFunction() {
    var x = document.getElementById("myInput");
    if (x.type === "password") {
      x.type = "text";
    } else {
      x.type = "password";
    }
  }