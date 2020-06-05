module.exports = function (application) {    
    application.get('/cadastroCliente', function (req, res) {
        application.app.controllers.clientes.cadastroCliente(application, req, res);
    });

    application.get('/cadastroAdvogado', function (req, res) {
        application.app.controllers.advogados.cadastroAdvogado(application, req, res);
    });

    application.get('/cadastroAndamento', function (req, res) {
        application.app.controllers.andamentos.cadastroAndamento(application, req, res);
    });

    application.get('/cadastroProcesso', function (req, res) {
        application.app.controllers.processos.cadastroProcesso(application, req, res);
    });
}