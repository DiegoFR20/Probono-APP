module.exports.cadastroAdvogado = function (application, req, res) {
    res.render('cadastro/cadastroAdvogado', { validacao: {} });
}

module.exports.incluir = (application, req, res) => {
    var dadosForm = req.body;
    var connection = application.config.dbConnection;
    var AdvogadosDAO = new application.app.models.AdvogadosDAO(connection);

    AdvogadosDAO.inserirAdvogado(dadosForm, res);

    res.render('index', { validacao: {} });
}

module.exports.atualizar = function (application, req, res) {
    var dadosForm = req.body;
    var connection = application.config.dbConnection;
    var AdvogadosDAO = new application.app.models.AdvogadosDAO(connection);

    AdvogadosDAO.atualizarAdvogado(dadosForm);

    res.render('index', { validacao: {} });
}

module.exports.pesquisar = function (application, req, res) {
    var dadosForm = req.body;
    var connection = application.config.dbConnection;
    var AdvogadosDAO = new application.app.models.AdvogadosDAO(connection);

    AdvogadosDAO.pesquisarAdvogado(dadosForm);
}

module.exports.excluir = function (application, req, res) {
    var dadosForm = req.body;
    var connection = application.config.dbConnection;
    var AdvogadosDAO = new application.app.models.AdvogadosDAO(connection);

    AdvogadosDAO.excluirAdvogado(dadosForm);

    res.render('index', { validacao: {} });
}