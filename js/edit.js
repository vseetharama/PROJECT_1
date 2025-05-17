
// dom id targets
let nameEl = document.getElementById("name")
let emailEl = document.getElementById("email")
let mobileEl = document.getElementById("mobile")
let genderEl = document.getElementById("gender")
let addressEl = document.getElementById("address")

// server url
const URL = "http://localhost:8080"


// read the single user data with ref to user id
let urlParams = new URLSearchParams(window.location.search);
let id = urlParams.get("userId")
console.log('userid = ', id)

// read the data from api
async function readUserById() {
    await fetch(`${URL}/users/${id}`,{
        headers: {
            "Content-Type": "application/json"
        },
        method: "GET"
    }).then(res => res.json())
    .then(res => {
        console.log('single user =', res)
        nameEl.value = res.name;
        emailEl.value = res.email;
        mobileEl.value = res.mobile;
        genderEl.value = res.gender;
        addressEl.value = res.address;
    }).catch(err => console.error(err.message))
}

readUserById()

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

    // promise request - put
    await fetch(`${URL}/users/${id}`, {
        headers: {
            "Content-Type": "application/json"
        },
        method: "PUT",
        body: JSON.stringify(newUser)
    }).then(res => res.json())
    .then(res => {
        alert('User data updated successfully')
        window.location.href = "/index.html";
    }).catch(err => {
        console.error(err.message)
    })
}