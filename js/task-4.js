const form = document.querySelector(".login-form");

form.addEventListener("submit", handlerSubmit);

function handlerSubmit(event) {
    event.preventDefault();
    
    const elements = event.target.elements;
    const email = elements.email;
    const password = elements.password;
        
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();

    if (emailValue === "" || passwordValue === "") {
    alert("All form fields must be filled in");
        return;
    }
    const info = {
        email: elements.email.value,
        password: elements.password.value,
    }
    console.log(info);
    event.target.reset()
}