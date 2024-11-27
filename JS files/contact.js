document.getElementById('form').addEventListener('submit', function (event) {
    event.preventDefault();

    // Clear previous errors
    const errorElements = document.querySelectorAll('.error-message');
    errorElements.forEach(el => el.style.display = 'none');

    // Get form values
    
    const firstName = document.getElementById('inputName').value.trim();
    const lastName = document.getElementById('inputLName').value.trim();

    const email = document.getElementById('inputEmail4').value.trim();

    const phone = document.getElementById('inputUser').value.trim();

    const country = document.getElementById('inputState').value.trim();

    const message = document.getElementById('inputText').value.trim();

    // Validation flags
    let isValid = true;

    // Name validation
    if (firstName === '') {
        document.getElementById('firstNameError').style.display = 'block';
        isValid = false;
    }
    if (lastName === '') {
        document.getElementById('lastNameError').style.display = 'block';
        isValid = false;
    }
    if (country === 'Choose...') {
        document.getElementById('countryError').style.display = 'block';
        isValid = false;
    }


    // Email validation
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (email === '' || !emailPattern.test(email)) {
        document.getElementById('emailError').style.display = 'block';
        isValid = false;
    }

    // Phone validation
    const phonePattern = /^[0-9]{11}$/;
    if (phone === '' || !phonePattern.test(phone)) {
        document.getElementById('phoneError').style.display = 'block';
        isValid = false;
    }

    // Message validation
    if (message === '') {
        document.getElementById('messageError').style.display = 'block';
        isValid = false;
    }

    // If form is valid, you can submit it or perform any other action
    if (isValid) {

        document.getElementById('form').reset();
        alert('Form submitted successfully!');
        // You can also submit the form here using AJAX or similar methods
    }
});