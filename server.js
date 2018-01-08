const express = require('express');
const path = require('path');
const port = process.env.PORT || 8080;
const app = express();

app.use(express.static(__dirname + 'public/dist'));

app.get('*', (request, response) => {
    response.sendFile(path.resolve(__dirname, 'public/dist', 'index.html'));
});

app.listen(port);
console.log(`server started on port ${port}`);