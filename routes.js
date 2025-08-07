const fs = require('fs');

const requestHandler = (req, res) => {
    const url = req.url;
    const method = req.method;
    if (url === '/') {
        console.log(req.url, req.method, req.headers);
        res.setHeader('Content-Type', 'text/html');
        res.write('<html>');
        res.write('<head><title>Enter Message</title></head>');
        res.write(`<body>`)
        res.write('<h1>Welcome to my first project</h1>');
        res.write('<form action="/create" method="POST"><input type="text" name="message"><button type="submit">send</button></input></form>');
        res.write('</body>');
        res.write('</html>');
        return res.end();
    }
    if (url === '/create' && method === 'POST') {
        const body = [];
        req.on('data', (chunk) => {
            console.log(chunk);
            body.push(chunk);
        });
        return req.on('end', () => {
            const parsedBody = Buffer.concat(body).toString();
            const message = parsedBody.split('=')[1];
            console.log(`Your message : ${message}`);
            fs.writeFile('message.txt', message, err => {
                res.statusCode = 302;
                res.setHeader('Location', '/');
                return res.end();
            });
        });
    }
    if (url === '/users') {
        res.setHeader('Content-Type', 'text/html');
        res.write('<html>');
        res.write('<head><title>Users</title></head>');
        res.write('<body>');
        res.write('<h1>Users Page</h1>');
        res.write('<ul><li>User 1</li><li>User 2</li><li>User 3</li></ul>');
        res.write('</body>');
        res.write('</html>');
        return res.end();
    }
    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head><title>My First Page</title></head>');
    res.write('<body><h1>Hello from my Node.js server!</h1></body>');
    res.write('</html>');
    res.end();
}

module.exports = {
    handler: requestHandler,
    someText: 'Some text here'
};