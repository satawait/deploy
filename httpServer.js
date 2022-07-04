const http = require('node:http')
// const html = `<!DOCTYPE html>
// <html lang="en">
// <head>
//   <meta charset="UTF-8">
//   <title></title>
// </head>
// <body>
//   hello, world. 
// </body>
// </html>`
const fs = require('node:fs')
const html = fs.readFileSync('./index.html')

const server = http.createServer((req, res) => {
    res.writeHead(200, {
        'Content-Length': Buffer.byteLength(html),
        'Content-Type': 'text/html'
    })
    res.end(html)
})
server.listen(9099, () => {
    console.log('Listening 9099')
})