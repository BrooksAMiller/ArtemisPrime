const contactForm = document.querySelector('.contact-form');

let name = document.getElementById('name');
let email = document.getElementById('email');
let subject = document.getElementById('subject');
let message = document.getElementById('message');

contactForm.addEventListener('submit', (e)=>{
    e.preventDefault();

    //form data Javascript object
    let formData = {
        name: name.value,
        email: email.value,
        subject: subject.value,
        message: message.value
    }

    //AJAX request submits as json file
    //Look into FETCH API as a replacement if needed
    let xhr = new XMLHttpRequest();
    xhr.open('POST', '/');
    xhr.setRequestHeader('content-type', 'application/json');
    xhr.onload == function() {
        console.log(xhr.responseText);
        //Alert front-end that the email was sumbitted successfully
        if(xhr.responseText == 'success'){
            alert('Email sent');

            //clear form 
            name.value = '';
            email.value = '';
            subject.value = '';
            message.value = '';
        } else {
            alert('Error sending message!');
        }
    }
    //JSON cannot be submitted to back-end, this must be submitted as a string
    xhr.send(JSON.stringify(formData));

})