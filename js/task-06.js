const form = document.querySelector('#validation-input');

form.addEventListener('blur', onCorrectPassword);

function onCorrectPassword(event) {

    if (event.currentTarget.value.length != form.getAttribute('data-length')) {
        form.classList.add('invalid');
        form.classList.remove("valid");
        console.log("hello")
        return
    }  
    form.classList.add('valid');
    form.classList.remove('invalid');
    
    console.log("ok")
    


};



