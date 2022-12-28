const usersName = document.querySelector("#name");
const age = document.querySelector("#age");
const id = document.querySelector("#id");
const password = document.querySelector("#pw");
const signinBtn = document.querySelector(".button-area");
console.log(id);

function signin() {
    const req = {
        name: usersName.value,
        age: age.value,
        id: id.value,
        password: password.value,
    };
    console.log(req);
}

signinBtn.addEventListener("click", signin);
