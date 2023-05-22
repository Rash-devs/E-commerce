const firstname = document.getElementById("firstname");
const surname = document.getElementById("surname");
const dial = document.getElementById("dial")
const mail = document.getElementById("email")
const password = document.getElementById("pass-word")
const conpassword = document.getElementById("confirm")
const passError = document.getElementById("passError")
const conPassError = document.getElementById("conPassError")
const submit = document.getElementById("btn-sub")
const form = document.getElementById("form")




firstname.addEventListener("keyup", function (e) {
    validateName(firstname)

})
const validateName = (field) => {
    const name = field.value
    if (name.match(/^[A-Za-z]{3,20}$/)) {
        return updateElementStyle(field, "valid")

    }

    return updateElementStyle(field, "invalid")

}

function updateElementStyle(field, action) {
    if (action == "valid") {
        field.style.borderWidth = "4px"
        field.style.borderColor = "green"
        return true
    }
    else {
        field.style.borderWidth = "4px"
        field.style.borderColor = "red"
        return false
    }
}

surname.addEventListener("keyup", (e) => {
    validateName(surname)
})



dial.addEventListener("keyup", (e) => {
    validateNumber()
})

function validateNumber() {
    const phone = dial.value
    if (phone.match(/^[0-9]{11}$/)) {
        return updateElementStyle(dial, "valid")

    }
    return updateElementStyle(dial, "invalid")
}



mail.addEventListener("keyup", (e) => {
    validateEmail()
})

function validateEmail() {
    const vmail = mail.value
    if (vmail.match(/^[a-z][a-z0-9\.\_]{2,30}@[a-z]{5,20}\.[a-z]{2}/)) {
        return updateElementStyle(mail, "valid")

    }
    return updateElementStyle(mail, "invalid")
}


password.addEventListener("keyup", (e) => {
    validatePassword(password, passError)
})

conpassword.addEventListener("keyup", (e) => {
    validatePassword(conpassword, conPassError)
})



const validatePassword = (field, errorfield) => {
    const pass = field.value
    if (!pass.match(/.{8}/)) {
        updateElementStyle(field, "invalid")
        return displayPasswordError(errorfield, "must be a minimum of 8 characters")

    }
    if (!pass.match(/[0-9]/)) {
        displayPasswordError(errorfield, "must have a minimum of a digit")
        return updateElementStyle(field, "invalid")

    }
    if (!pass.match(/[A-Z]/)) {
        displayPasswordError(errorfield, "must have a minimum of a Uppercase character")
        return updateElementStyle(field, "invalid")

    }
    if (!pass.match(/[a-z]/)) {
        displayPasswordError(errorfield, "must have a minimum of a lowercase character")
        return updateElementStyle(field, "invalid")

    }
    if (!pass.match(/[!-\/:-@\[-`\{-~]/)) {
        displayPasswordError(errorfield, "must have a minimum of a special character")
        return updateElementStyle(field, "invalid")

    }

    return updateElementStyle(field, "valid")

}

const displayPasswordError = (element, msg) => {
    element.style.display = "block";
    element.style.color = "red";
    element.innerHTML = msg

    setTimeout(() => {
        element.style.display = "none"

    }, 3000)

}

function validateBothPassword() {
    const pass = password.value
    const conpass = conpassword.value

    if (pass == conpass) {
        return true
    } else
        displayPasswordError(conPassError, "password dont match")
    return false
}



submit.onclick = (e) => {
    e.preventDefault()



    if (
        validateName(firstname) &&
        validateName(surname) &&
        validateNumber(dial) &&
        validateEmail(mail) &&
        validatePassword(password) &&
        validatePassword(conpassword) &&
        validateBothPassword()

    ) {
        form.submit = (e) => {
            e.preventDefault()

            const formData = new FormData(form);

            for (item of formData) {
               
            }
        }

        alert("account created successfully")


    } else {
        alert("form not validated")
    }
}

fetch("/products", {
    method: "POST",
    body: formData
})

.then(res => res.json())
.then(res => (res))






















