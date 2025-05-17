
// dom id targets
let nameEl = document.getElementById("name")
let emailEl = document.getElementById("email")
let mobileEl = document.getElementById("mobile")
let genderEl = document.getElementById("gender")
let addressEl = document.getElementById("address")

// server url
const URL = "http://localhost:8080"

// submit function
async function submitHandler(event) {
    event.preventDefault(); // to avoid page reload after submit event

    let newUser = {
        // key: value
        name: nameEl.value,
        email: emailEl.value,
        mobile: mobileEl.value,
        gender: genderEl.value,
        address: addressEl.value
    }

    console.log('new user =', newUser)

    // promise request - post
    await fetch(`${URL}/users`, {
        headers: {
            "Content-Type": "application/json"
        },
        method: "POST",
        body: JSON.stringify(newUser)
    }).then(res => res.json())
    .then(res => {
        alert('New user data added successfully')
        window.location.href = "/index.html";
    }).catch(err => {
        console.error(err.message)
    })
}