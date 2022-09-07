let emailId = "abc@abc.com"

function validateEmail(emailId) {

    var mailformat = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;

    if (emailId.value.match(mailformat)) {
        console.log("Email ID is valid");
        return true;
    } else {
        console.log("Email ID is NOT valid");
        return false;
    }
}

validateEmail(emailId);