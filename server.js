var express = require('express');
var cors = require('cors');
var app = express();

app.use(cors());

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