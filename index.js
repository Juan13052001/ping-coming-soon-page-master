const inputEmail = document.querySelector("#email");
const formulario = document.querySelector("form");
const textError = document.querySelector(".text-error");

formulario.addEventListener("submit", (e) => {
    const email = inputEmail.value;
    const RegEmail = /^w+@[a-zA-Z_]+?.[a-zA-Z]{2,3}$/;
    e.preventDefault();
    if (email == "" || email === undefined) {
        inputEmail.classList.add("hover-error");
        inputEmail.placeholder = "example@email.com";
        inputEmail.classList.add("text-error-placeholder");
        textError.innerHTML = "Please provide a valid email address";
    } else {
        inputEmail.classList.remove("hover-error");
        textError.innerHTML = "";
        inputEmail.classList.remove("text-error-placeholder");
        inputEmail.placeholder = "Your email address...";
    }
});
