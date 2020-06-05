const { check, validationResult } = require('express-validator');

module.exports = function (application) {
    application.post('/processo/incluir', [
        check('descAndamento').isLength({ min: 10 }).withMessage('teste'),
        check('cpfCliente').isNumeric({ min: 11 })
    ], (req, res) => {
        var error = validationResult(req);
        if (!error.isEmpty()) {
            res.render('home/homeAdvogado', { validacao: error });
            return;
        }
        application.app.controllers.processos.incluir(application, req, res);
    });

    application.get('/processos', function (req, res) {
        application.app.controllers.processos.processos(application, req, res);
    })

    application.get('/processo/pesquisar:id', function (req, res) {
        application.app.controllers.processos.pesquisar(application, req, res);
    });

    application.put('/processo/atualizar:id', function (req, res) {
        application.app.controllers.processos.atualizar(application, req, res);
    });

    application.delete('/processo/remover:id', function (req, res) {
        application.app.controllers.processos.remover(application, req, res);
    });
}