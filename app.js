var app = require('./config/server');

const PORT = 3000;
const HOST = '0.0.0.0';

app.listen(PORT, HOST, function(){
    console.log("Servidor ON");
});