const { check, validationResult } = require('express-validator');

module.exports = function (application) {
    application.post('/andamento/incluir', [
        check('descAndamento').isLength({ min: 10 })
    ], (req, res) => {
        var error = validationResult(req);
        if (!error.isEmpty()) {
            res.render('cadastro/cadastroAndamento', { validacao: error });
            return;
        }
        application.app.controllers.andamentos.incluir(application, req, res);
    });

    application.get('/andamento/pesquisar:id', function (req, res) {
        application.app.controllers.andamentos.pesquisar(application, req, res);
    });

    application.put('/andamento/atualizar:id', function (req, res) {
        application.app.controllers.andamentos.atualizar(application, req, res);
    });

    application.delete('/andamento/remover:id', function (req, res) {
        application.app.controllers.andamentos.remover(application, req, res);
    });
}