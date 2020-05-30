module.exports = function (application) {
    application.get('/homeCliente', function (req, res) {
        application.app.controllers.home.homeCliente(application, req, res);
    });

    application.get('/homeAdvogado', function (req, res) {
        application.app.controllers.home.homeAdvogado(application, req, res);
    });
}