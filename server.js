var express = require('express');
var app = express();

app.post('/login', function(req, res){
    console.log('POST /');
    res.json({
        success: true,
        user: 'Jill',
        auth_token: 'abcdefg'
    });
});

port = 3030;
app.listen(port);
console.log('Listening at http://localhost:' + port)