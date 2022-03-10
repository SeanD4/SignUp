const form = document.getElementById('form');
const fname = document.getElementById('fname');
const lname = document.getElementById('lname');
const email = document.getElementById('email');
const password = document.getElementById('password');

form.addEventListener('submit', e => {
        e.preventDefault();
 
        var firstName = fname.value.trim();
        var lastName = lname.value.trim();
        var emailValue = email.value.trim();
        var passwordValue = password.value.trim();
        var pattern = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

        if (firstName === "") {
            errorFunc(fname, 'Please enter First Name!');
        } else {
            successFunc(fname);
        }
        if (lastName === "") {
            errorFunc(lname, "Please enter Last Name!");
        } else {
            successFunc(lname);
        }
        if (emailValue === "") {
            errorFunc(email, "Please enter valid Email!");
        } else if (!emailValue.match(pattern)) {
            errorFunc(email, 'Please enter valid email address!');
        }
        else {
            successFunc(email);
        }
        if (passwordValue === "") {
            errorFunc(password, "Password cannot be empty");
        } else {
            successFunc(password);
        }
    });

    function errorFunc(req, message) {
        const formControl = req.parentElement;
        const span = formControl.querySelector("span");
        span.innerText = message;
        req.className += "error";
        span.className += "error-text";
        
        if(req !== email) {
            req.value = ' ';
        } else {
            req.style.color = "hs1(0, 100% 74%)";
        }
}

    function successFunc(req) {
        req.className += "Success";
}
