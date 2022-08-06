const form = document.querySelector(".login-form");

form.addEventListener("submit", onDataCollection);

function onDataCollection(event) {
    event.preventDefault();
    const formElements = event.currentTarget.elements;
    const email = formElements.email.value;
    const password = formElements.password.value;

    if (email === "" || password === "") {
       return alert("Все поля должны быть заполнены!");
    } 
    console.log(`email: ${email}, password: ${password}`);
    
    event.currentTarget.reset();

}



