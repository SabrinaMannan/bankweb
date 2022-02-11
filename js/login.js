document.getElementById('login').addEventListener('click', function () {
    const emailField = document.getElementById('user-email');
    const userEmail = emailField.value;

    //get user password

    const passField = document.getElementById('user-password');
    const userPassword = passField.value;

    //experimental password match
    if (userEmail == 'sabrina1@gmail.com' && userPassword == 'secret') {
        window.location.href = "banking.html";
        //will redirect to another page
    }

});


