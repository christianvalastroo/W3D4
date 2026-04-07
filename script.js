const filterSelect = document.querySelector("#filterSelect")
const searchInput = document.querySelector("#searchInput")
const  usersTable = document.querySelector("#usersTable")

let users = []

const renderUsers = (usersToRender) => {
    usersTable.innerHTML = ""

    usersToRender.forEach(user => {
        
        const tr = document.createElement("tr")
        const tdName = document.createElement("td")
        const tdUsername = document.createElement("td")
        const tdEmail = document.createElement("td")
  

        tdName.textContent = user.name
        tdUsername.textContent = user.username
        tdEmail.textContent = user.email 
        
        tr.append(tdName, tdUsername, tdEmail)
        usersTable.appendChild(tr)
    })

}

const getUsers = async () => {
    try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/users`)
        const data = await response.json()

        users = data
        renderUsers(users)

searchInput.addEventListener("input", () => {
    const text = searchInput.value.toLowerCase()
    const filterType = filterSelect.value

    const usersFiltered = users.filter(user => user[filterType].toLowerCase().includes(text))

    renderUsers(usersFiltered)
})

   console.log(users)

    } catch(error) {
        console.log(error)
    }
    
    
}
getUsers()
