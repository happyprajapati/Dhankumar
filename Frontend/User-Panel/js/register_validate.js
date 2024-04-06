const fname = document.getElementById('fname');
const email = document.getElementById('email');
const password = document.getElementById('password');
const cpassword = document.getElementById('cpassword');
const number = document.getElementById('number');
const address = document.getElementById('address');
const city = document.getElementById('city');
const pincode = document.getElementById('pincode');
const form = document.getElementById('form');

form.addEventListener('submit', (event) => {
    event.preventDefault();
    // alert("hello");
    validate();
});

const senddata = (count, srate, fnameval) => {
    if (srate == count) {
        alert("Registration Successfull");
        swal("Data Successfull Added!", "You clicked the Ok button!", "success");
    }
}
// SuccessMsg Function
const successMsg = (fnameval) => {
    let formgroup = document.getElementsByClassName('form-group');
    var count = formgroup.length - 1;

    for (var i = 0; i < formgroup.length; i++) {
        if (formgroup[i].className == "form-group w-75 success") {
            var srate = 0 + i;
            console.log(srate);
            senddata(count, srate, fnameval);
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
    const fnameval = fname.value.trim();
    const emailval = email.value.trim();
    const passwordval = password.value.trim();
    const cpasswordval = cpassword.value.trim();
    const numberval = number.value.trim();
    const addressval = address.value.trim();
    const cityval = city.value.trim();
    const pincodeval = pincode.value.trim();
    // Validate the Username 
    if (fnameval == "") {
        seterror(fname, 'Name Can not be Blank');
    }
    else if (fnameval.length <= 2) {
        seterror(fname, 'Name Minimum 3 Character');
    }
    else {
        setsucess(fname);
    }

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

    // Validate the Conform Password 
    if (cpasswordval == "") {
        seterror(cpassword, 'Conform-Password Can not be Blank');
    }
    else if (cpasswordval.length <= 7) {
        seterror(cpassword, 'pasword must be at last 8 character');
    }
    else if (cpasswordval != passwordval) {
        seterror(cpassword, 'Conform-pasword and Password is Miss Match');
    }
    else {
        setsucess(cpassword)
    }
    // Validate the Number 
    if (numberval == "") {
        seterror(number, 'Number Can not be Blank');
    }
    else if (numberval.length != 10) {
        seterror(number, 'Number Must be 10 digit');
    }
    else {
        setsucess(number);
    }

    // Validate the Address
    if (addressval == "") {
        seterror(address, 'Address Can not be Blank');
    }
    else if (addressval.length <= 7) {
        seterror(address, 'Address Must be 8 character');
    }
    else {
        setsucess(address);
    }
    // City validate
    if (cityval == "") {
        seterror(city, 'City Can not be Blank');
    }
    else if (cityval.length <= 2) {
        seterror(city, 'City Must be 3 character');
    }
    else {
        setsucess(city);
    }

    // Validate the Pincode
    if (pincodeval == "") {
        seterror(pincode, 'Pincode Can not be Blank');
    }
    else if (pincodeval.length != 6) {
        seterror(pincode, 'Pincode Must be 6 digit')
    }
    else {
        setsucess(pincode);
    }


    // Call the Success the function
    successMsg(fnameval);



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


