const clients = JSON.parse(localStorage.getItem('clients')) ? JSON.parse(localStorage.getItem('clients')) : [];



document.querySelector("form").addEventListener("submit", (e) =>{
e.preventDefault()

const inputs = document.querySelectorAll("input")

    clients.push(
        {
       
        companyName: inputs[0].value,
        clientNumber: inputs[1].value,
        clientType: inputs[2].value,
        clientActivity: inputs[3].value,
        clientTurnover: inputs[4].value,
        clientStaff: inputs[5].value,
        clientAdress: inputs[6].value,
        clientPhone: inputs[7].value,
        contact: inputs[8].value,
        comercialComments: inputs[9].value

        }
    )

    const tr = document.createElement("tr")
    
    for (let i = 0; i< inputs.length; i++){
        const td = document.createElement("td")
        td.innerHTML = inputs[i].value

        tr.appendChild(td)

    }

document.querySelector("tbody").appendChild(tr)

console.log(clients)

// JSON
const clientsJSON = JSON.stringify(clients)

localStorage.setItem("clients", clientsJSON)

})