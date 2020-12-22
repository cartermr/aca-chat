let clientID = 0

window.onload = () => {
    fetch('http://localhost:8080/clients', {
        method: 'POST',
    })
        .then(res => res.json())
        .then(data => {
            clientID = Number(data)
            console.log(clientID)
        })
}