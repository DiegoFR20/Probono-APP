const { check, validationResult } = require('express-validator');

module.exports = function (application) {
    application.post('/cliente/incluir', [
        check('password').isLength({ min: 4 })], function(req, res) {
            var error = validationResult(req);
            if (!error.isEmpty()) {
                res.render('cadastro/cadastroCliente', { validacao: error });
                return;
            }
            application.app.controllers.clientes.incluir(application, req, res);
        });

    application.get('/cliente/pesquisar:id', function (req, res) {
        application.app.controllers.clientes.pesquisar(application, req, res);
    });

    application.put('/cliente/atualizar:id', function (req, res) {
        application.app.controllers.clientes.atualizar(application, req, res);
    });

    application.delete('/cliente/remover:id', function (req, res) {
        application.app.controllers.clientes.remover(application, req, res);
    });
}