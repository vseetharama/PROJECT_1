
// default url address
const URL  = "http://localhost:8080"


// delete user
async function deleteById(id) {
    if(confirm(`Are you sure to delete user ${id}?`)) {
        await fetch(`${URL}/users/${id}`,{
            headers: {
                "Content-Type": "application/json"
            },
            method: "DELETE"
        }).then(res => res.json())
        .then(res => {
            alert('User data deleted successfully');
            window.location.reload();// reload the current page
        }).catch(err => {
            console.error(err.message)
        })
    } else {
        alert('delete terminated')
    }
}


// method to read the data
async function readUsers() {
    await fetch(`${URL}/users`, {
        headers: {
            "Content-Type": "application/json"
        },
        method: "GET"
    })
    .then(res => res.json())
    .then(res => {
        console.log("users = ", res)
        printUsers(res)
    }).catch(err => {
        console.error(err.message)
    })
}

readUsers()

// target the table body id
let tableEl = document.getElementById("userList")

function printUsers(data) {
    console.log('print data = ', data)
    data.forEach(function(item,index){
        tableEl.innerHTML += `<tr>
            <td> ${item.id} </td>
            <td> ${item.name} </td>
            <td> ${item.email} </td>
            <td> ${item.mobile} </td>
            <td> ${item.gender} </td>
            <td> ${item.address} </td>
            <td>
                <a href="update.html?userId=${item.id}" class="btn info">Edit</a>
                <button onclick="deleteById('${item.id}')" class="btn danger">Delete</button>
            </td>
        </tr>`
    })
}