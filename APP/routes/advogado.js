const { check, validationResult } = require('express-validator');

module.exports = function (application) {
    application.post('/advogado/incluir', [
        check('email').isEmail(),
        check('password').isLength({ min: 4 })], (req, res) => {
            var error = validationResult(req);
            if (!error.isEmpty()) {
                res.render('cadastro/cadastroAdvogado', { validacao: error });
                return;
            }
            application.app.controllers.advogados.incluir(application, req, res);
        });

    application.get('/advogado/pesquisar:id', function (req, res) {
        application.app.controllers.advogados.pesquisar(application, req, res);
    });

    application.put('/advogado/atualizar:id', function (req, res) {
        application.app.controllers.advogados.atualizar(application, req, res);
    });

    application.delete('/advogado/remover:id', function (req, res) {
        application.app.controllers.advogados.remover(application, req, res);
    });
}