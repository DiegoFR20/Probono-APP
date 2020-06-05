module.exports = function (application) {
    application.get('/', function (req, res) {
        application.app.controllers.index.index(application, req, res);
    });

    application.post('/autenticarCliente', function (req, res) {
        application.app.controllers.index.autenticarCliente(application, req, res);
    });

    application.post('/autenticarAdvogado', function (req, res) {
        application.app.controllers.index.autenticarAdvogado(application, req, res);
    });
}