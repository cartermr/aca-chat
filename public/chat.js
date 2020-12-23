let clientID = 0

window.onload = () => {
    fetch('http://192.168.0.150:8080/clients', {
        method: 'POST',
    })
        .then(res => res.json())
        .then(data => {
            clientID = Number(data)
            console.log(clientID)
        })

    window.setInterval(loadMessages, 1000)
}

const sendMessage = () => {
    let messageText = document.getElementById('message').value
    let newMessage = {
        "clientId": clientID,
        "text": messageText
    }

    fetch('http://192.168.0.150:8080/messages', {
        method: 'POST',
        body: JSON.stringify(newMessage),
        headers: {
            'Content-Type': 'application/json'
        }
    })
        .then(res => res.json())
        .then(data => console.log(data))

    document.getElementById('message').value = ''
}

const loadMessages = () => {
    let messages = []

    fetch('http://192.168.0.150:8080/messages')
        .then(res => res.json())
        .then(data => {
            messages = data
            displayMessages(messages)
            console.log(data)
            console.log(messages)
        })
}

const displayMessages = (msg) => {
    let msgArea = document.getElementById('messageArea')
    msgArea.innerHTML = ''

    msg.forEach( message => {
        let div = document.createElement('div')
        div.innerText = message.text
        if (message.clientId == clientID) {
            div.className = 'myMessage'
        } else {
            div.className = 'theirMessage'
        }
        msgArea.appendChild(div)
    })
}