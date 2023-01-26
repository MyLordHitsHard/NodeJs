// const EventEmitter = require('events')

// const customEmitter = new EventEmitter()

// customEmitter.on('response', (name, id) => {
//     console.log(`data received ${name} with id: ${id} `)
// })

// customEmitter.on('response', () => {
//     console.log(`some other logic here `)
// })

// customEmitter.emit('response', 'john', 34)



const http = require('http')
const server = http.createServer()

server.on('request', (req, res) => {

    if (req.url === '/') {
        res.end('Hello World! Welcome to my page')
        return
    }

    if (req.url === '/about') {
        res.end('This is about page')
        return
    }

    res.end(`<h1>Oops!</h1><p>We can't seem to find the page you are looking for</p><a href="/">Back to home</a>`)

})
    

server.listen(5000)