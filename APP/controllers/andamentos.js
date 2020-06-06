module.exports.cadastroAndamento = function (application, req, res) {
    res.render('cadastro/cadastroAndamento');
}

module.exports.incluir = function (application, req, res) {
    var dadosForm = req.body;
    var connection = application.config.dbConnection;
    var AndamentosDAO = new application.app.models.AndamentosDAO(connection);

    AndamentosDAO.inserirAndamento(dadosForm);

    res.render('home/homeAdvogado', { validacao: {} });
}

module.exports.atualizar = function (application, req, res) {
    var dadosForm = req.body;
    var connection = application.config.dbConnection;
    var AndamentosDAO = new application.app.models.AndamentosDAO(connection);

    AndamentosDAO.atualizarAndamento(dadosForm);

    res.render('index', { validacao: {} });
}

module.exports.pesquisar = function (application, req, res) {
    var numeroProcesso = req.query;
    var connection = application.config.dbConnection;
    var AndamentosDAO = new application.app.models.AndamentosDAO(connection);

    AndamentosDAO.pesquisarAndamento(numeroProcesso, req, res);
}

module.exports.excluir = function (application, req, res) {
    var dadosForm = req.body;
    var connection = application.config.dbConnection;
    var AndamentosDAO = new application.app.models.AndamentosDAO(connection);

    AndamentosDAO.excluirAndamento(dadosForm);

    res.render('index', { validacao: {} });
}