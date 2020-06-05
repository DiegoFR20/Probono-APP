module.exports.cadastroCliente = function (application, req, res) {
    res.render('cadastro/cadastroCliente', { validacao: {} });
}

module.exports.incluir = function (application, req, res) {
    var dadosForm = req.body;
    var connection = application.config.dbConnection;
    var ClientesDAO = new application.app.models.ClientesDAO(connection);

    ClientesDAO.inserirCliente(dadosForm, res);

    res.render('index', { validacao: {} });
}

module.exports.atualizar = function (application, req, res) {
    var dadosForm = req.body;
    var connection = application.config.dbConnection;
    var ClientesDAO = new application.app.models.ClientesDAO(connection);

    ClientesDAO.atualizarCliente(dadosForm);

    res.render('index', { validacao: {} });
}

module.exports.pesquisar = function (application, req, res) {
    var dadosForm = req.body;
    var connection = application.config.dbConnection;
    var ClientesDAO = new application.app.models.ClientesDAO(connection);

    ClientesDAO.pesquisarCliente(dadosForm);

    res.render('index', { validacao: {} });
}

module.exports.excluir = function (application, req, res) {
    var dadosForm = req.body;
    var connection = application.config.dbConnection;
    var ClientesDAO = new application.app.models.ClientesDAO(connection);

    ClientesDAO.excluirCliente(dadosForm);

    res.render('index', { validacao: {} });
}