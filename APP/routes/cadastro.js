module.exports = function (application) {    
    application.get('/cadastroCliente', function (req, res) {
        application.app.controllers.cadastro.cadastroCliente(application, req, res);
    });

    application.get('/cadastroAdvogado', function (req, res) {
        application.app.controllers.cadastro.cadastroAdvogado(application, req, res);
    });

    application.get('/cadastroAndamento', function (req, res) {
        application.app.controllers.cadastro.cadastroAndamento(application, req, res);
    });

    application.get('/cadastroProcesso', function (req, res) {
        application.app.controllers.cadastro.cadastroProcesso(application, req, res);
    });
}