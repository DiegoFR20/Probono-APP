module.exports.index = function (application, req, res) {
    res.render('index', { validacao: {} });
}

module.exports.autenticarAdvogado = function (application, req, res) {
    var dadosForm = req.body;
    var connection = application.config.dbConnection;
    var AdvogadosDAO = new application.app.models.AdvogadosDAO(connection);

    AdvogadosDAO.autenticarAdvogado(dadosForm, req, res);
}

module.exports.autenticarCliente = function (application, req, res) {
    var dadosForm = req.body;
    var connection = application.config.dbConnection;
    var ClientesDAO = new application.app.models.ClientesDAO(connection);

    ClientesDAO.autenticarCliente(dadosForm, req, res);
}