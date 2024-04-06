const email = document.getElementById('email');
const password = document.getElementById('password');
const form = document.getElementById('form');

form.addEventListener('submit', (event) => {
    event.preventDefault();
    // alert("hello");
    validate();
});

const senddata = (count, srate) => {
    if (srate == count) {
        alert("Login Successfull");
    }
}
// SuccessMsg Function
const successMsg = () => {
    let formgroup = document.getElementsByClassName('form-group');
    var count = formgroup.length - 1;

    for (var i = 0; i < formgroup.length; i++) {
        if (formgroup[i].className == "form-group w-75 success") {
            var srate = 0 + i;
            console.log(srate);
            senddata(count, srate);
        }
        else {
            return false;
        }

    }
}

// More valid E-mail
const isemail = (emailval) => {
    var atsysmbol = emailval.indexOf("@");
    var dot = emailval.indexOf('.');

    if (atsysmbol < 1)
        return false;
    if (dot < atsysmbol + 3)
        return false;
    if (dot == emailval.length - 1)
        return false
    // if all condition is satisfied then function return true
    return true;
}

const validate = () => {

    const emailval = email.value.trim();
    const passwordval = password.value.trim();

    // Validate the Mail
    if (emailval == "") {
        seterror(email, 'E-mail Can not be Blank');
    }
    else if (!isemail(emailval)) {
        seterror(email, 'E-mail Can not be Valid');
    }
    else {
        setsucess(email);
    }

    // Validate the Password 
    if (passwordval == "") {
        seterror(password, 'Password Can not be Blank');
    }
    else if (passwordval.length <= 7) {
        seterror(password, 'pasword must be at last 8 character');
    }
    else {
        setsucess(password);
    }
    
    // Call the Success the function
    successMsg(emailval);

}

function seterror(input, errorMsg) {
    const formcontrol = input.parentElement;
    const small = formcontrol.querySelector('small');
    formcontrol.classList.remove('success');
    formcontrol.classList.add('error1');
    small.innerText = errorMsg;
}
// to Create setsucess function
function setsucess(input) {
    const formcontrol = input.parentElement;
    formcontrol.classList.remove('error1')
    formcontrol.classList.add('success');

}

function myFunction() {
    var person = prompt("Please enter your E-mail.");
    if (person == null || person == "") {
        if (confirm("Please fill up.")) {
            myFunction();
        }
    }
    else {
        alert("Sucessfully change the Email id password");
    }
}