const clients = JSON.parse(localStorage.getItem('clients')) ? JSON.parse(localStorage.getItem('clients')) : [];
            
console.log(clients)

for (let i = 0; i < clients.length ; i++) {
    const customerTab = [
        clients[i].companyName,
        clients[i].clientNumber,
        clients[i].clientType,
        clients[i].clientActivity,
        clients[i].clientTurnover,
        clients[i].clientStaff,
        clients[i].clientAdress,
        clients[i].clientPhone,
        clients[i].contact,
        clients[i].comercialComments
    ]

    const tbody = document.getElementById("listCustomer");
    const tr = document.createElement("tr");
    tbody.appendChild(tr);

    for (let j = 0; j < customerTab.length; j++) {
        const td = document.createElement('td');
        td.innerHTML = customerTab[j];
        tr.appendChild(td);
    }
}