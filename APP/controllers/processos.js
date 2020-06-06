module.exports.incluir = function (application, req, res) {
    var dadosForm = req.body;
    var connection = application.config.dbConnection;
    var ProcessosDAO = new application.app.models.ProcessosDAO(connection);
    var AndamentosDAO = new application.app.models.AndamentosDAO(connection);

    function gerarNumero() {
        var numeroProcesso = Math.floor(Math.random() * 99999999999999999999);
        if (ProcessosDAO.pesquisarProcesso(numeroProcesso) == undefined) {
            return dadosForm.numeroProcesso = numeroProcesso;
        } else
            return gerarNumero;
    }

    gerarNumero()

    ProcessosDAO.inserirProcesso(dadosForm);
    AndamentosDAO.inserirAndamento(dadosForm.numeroProcesso, dadosForm.descAndamento);

    res.render('home/homeAdvogado', { validacao: {} });
}

module.exports.processos = function (application, req, res) {
    var connection = application.config.dbConnection;
    var ProcessosDAO = new application.app.models.ProcessosDAO(connection);

    if (req.session.autorizadoCliente == true) {
        ProcessosDAO.getProcessosCliente(res, req);
    }
    else if (req.session.autorizadoAdvogado == true) {
        ProcessosDAO.getProcessos(res);
    } else {
        res.send("Usuario precisa logar!");
        return;
    }
}

module.exports.atualizar = function (application, req, res) {
    var dadosForm = req.body;
    var connection = application.config.dbConnection;
    var ProcessosDAO = new application.app.models.ProcessosDAO(connection);

    ProcessosDAO.atualizarProcesso(dadosForm);

    res.render('home/homeAdvogado', { validacao: {} });
}

module.exports.pesquisar = function (application, req, res) {
    var numeroProcesso = req.query;
    var connection = application.config.dbConnection;
    var ProcessosDAO = new application.app.models.ProcessosDAO(connection);

    ProcessosDAO.pesquisarProcesso(numeroProcesso);
}

module.exports.excluir = function (application, req, res) {
    var dadosForm = req.body;
    var connection = application.config.dbConnection;
    var ProcessosDAO = new application.app.models.ProcessosDAO(connection);

    ProcessosDAO.excluirProcesso(dadosForm);

    res.render('index', { validacao: {} });
}