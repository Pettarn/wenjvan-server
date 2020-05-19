const http = require('http')
const fs = require('fs')
const path = require('path')

const server = http.createServer(function (req, res) {
    fs.readFile(path.join(__dirname, 'test.html'), function (err, file) {
        if (err) {
            res.writeHead(404, 'Not Found')
            res.end('找不到相关文件。。')
        } else {
            res.writeHead(200, 'OK')
            res.end(file)   
        }
    })
})

server.listen(3000)
