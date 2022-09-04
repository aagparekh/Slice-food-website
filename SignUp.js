function validateSignIn() {
    var name = document.sign_in.name;
    var address = document.sign_in.address;
    var contact = document.sign_in.contact;
    var username = document.sign_in.username;
    var pass1 = document.sign_in.pass1;
    var pass2 = document.sign_in.pass2;

    if (isBlank(name, "Enter a Name")) {
        if (isAlpha(name, "Enter a Valid Name")) {
            if (isBlank(address, "Enter a Address")) {
                if (isBlank(contact, "Enter a Contact No")) {
                    if (isNumeric(contact, "Enter a Valid Mobile No")) {
                        if (isBlank(username, "Enter a Username")) {
                            if (isAlphaNum(username, "No Special Charecters Allowed")) {
                                if (isBlank(pass1, "Enter a Password")) {
                                    if (validPassword(pass1, "Length of Password should be between 6-8 Charecters")) {
                                        if (isBlank(pass2, "Re-Enter Your Password")) {
                                            if (matchPasswords(pass2,"password not match")) {
                                                return true;
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
    return false;
}
function isBlank(x, mess) {
    if (x.value.trim() == "") {
        // x.focus();
        alert(mess);
        x.style.border = "solid 4px red";
        return false;
    }
    else {
        x.style.border = "solid 2px rgba(255, 166, 0, 0.548)";
        return true;
    }
}
function isAlpha(x, mess) {
    var exp = /^[A-Za-z ]+$/;
    if (x.value.match(exp)) {
        return true;
    }
    else {
        // x.focus();
        alert(mess);
        x.style.border = "solid 4px red";
        return false;
    }
}

function isNumeric(x, mess) {
    var exp = /^[0-9]{10}$/;
    if (x.value.match(exp)) {
        return true;
    }
    else {
        // x.focus();
        alert(mess);
        x.style.border = "solid 4px red";
        return false;
    }
}

function isAlphaNum(x, mess) {
    var exp = (/^[A-Za-z0-9]+$/);
    if (x.value.match(exp)) {
        return true;
    }
    else {
        // x.focus();
        alert(mess);
        x.style.border = "solid 4px red";
        return false;
    }
}

function validPassword(x, mess) {
    if (x.value.length <= 6 || x.value.length >= 8) {
        // x.focus();
        alert(mess);
        x.style.border = "solid 4px red";
        return false;
    } else {
        return true;
    }
}

function matchPasswords(p2,mess) {
    var pass1 = document.sign_in.pass1;
    console.log("2");
    if (pass1.value == p2.value) {
        return true;
    } else {
        // p2.focus();
        alert(mess);
        p2.style.border = "solid 4px red";
        return false;
    }

}

