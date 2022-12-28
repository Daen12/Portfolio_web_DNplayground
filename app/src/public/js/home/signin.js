// const { application } = require("express");

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
    fetch("/signin", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(req),
    });
}

signinBtn.addEventListener("click", signin);
