  let EmailValidation = (email) => {
    console.log('inside');
    var ref = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
    if (!email) {
        alert('Please enter email.')
    }
    else
        if (!ref.test(email)) {
            alert('Please enter valid email.')
        }
        else {
            return true
        }
}

let PasswordValidation = (password) => {
    var passref = /(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/;
    if (!password) {
        alert('Please enter password.')
    }
    else
        if ((!passref.test(password)) || password.length > 28) {
            alert('Password must have atleast 1 Capital letter, 1 Small letter, 1 numeric value, 1 special character and must contain a minimum of 8 and maximum of 28 characters.')
        } else {
            return true
        }
}