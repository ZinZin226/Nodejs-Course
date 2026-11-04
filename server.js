const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {

    //console.log(req.url);

    let filename;

    switch (req.url) {

        case '/':
            filename = 'home.html';
            break;

        case '/about':
            filename = 'about.html';
            break;

        case '/contact':
            filename = 'contact.html';
            break;

        default:
            filename = '404.html';
            break;
    }

    res.setHeader('Content-Type', 'text/html');
    fs.readFile('./views/'+filename, (err, data) => {
        if(err) {
            console.log(err);
            res.end();
        } else {
            res.write(data);
            res.end();
        }
    })
    
})

server.listen(3000, 'localhost', () => {
    console.log('server is listening on port 3000'); // IP address of localhost => 127.0.0.1
})