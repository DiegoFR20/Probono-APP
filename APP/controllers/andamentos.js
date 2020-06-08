module.exports.cadastroAndamento = function (application, req, res) {
    res.render('cadastro/cadastroAndamento');
}

module.exports.incluir = function (application, req, res) {
    var dadosForm = req.body;
    var connection = application.config.dbConnection;
    var AndamentosDAO = new application.app.models.AndamentosDAO(connection);
    dadosForm.numeroProcesso = parseInt(dadosForm.numeroProcesso);

    AndamentosDAO.inserirAndamento(dadosForm.numeroProcesso, dadosForm.descAndamento, dadosForm.date, dadosForm.time);

    res.render('home/homeAdvogado', { validacao: {} });
}

module.exports.incluirTraducao = function (application, req, res) {
    var dadosForm = req.body;
    var numeroProcesso = req.query;
    var connection = application.config.dbConnection;
    var AndamentosDAO = new application.app.models.AndamentosDAO(connection);

    if (dadosForm.descAndamento !== undefined && dadosForm.tradAndamento !== undefined) {
        AndamentosDAO.inserirTraducao(dadosForm);
        res.render('home/homeAdvogado', { validacao: {}, numeroProcesso: numeroProcesso });
    } else {
        res.send("Um ou mais campos faltando");
    }
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

    if (req.session.autorizadoAdvogado) {
        AndamentosDAO.pesquisarAndamento(numeroProcesso, req, res);
    }
    else if (req.session.autorizadoCliente) {
        AndamentosDAO.pesquisarAndamento(numeroProcesso, req, res)
    } else
        res.send('Você precisa logar');
}

module.exports.pesquisarTraducao = function (application, req, res) {
    var descAndamento = req.query.areaTraducao;
    var connection = application.config.dbConnection;
    var AndamentosDAO = new application.app.models.AndamentosDAO(connection);

    AndamentosDAO.pesquisarTraducao(descAndamento, res);
    //  AndamentosDAO.pesquisarDataAndamento(descAndamento, res);
}

module.exports.excluir = function (application, req, res) {
    var dadosForm = req.body;
    var connection = application.config.dbConnection;
    var AndamentosDAO = new application.app.models.AndamentosDAO(connection);

    AndamentosDAO.excluirAndamento(dadosForm);

    res.render('index', { validacao: {} });
}