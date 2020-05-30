module.exports.cadastro = function (application, req, res) {
    res.render('cadastro', { validacao: {} }, { dadosForm: {} });
}

module.exports.incluir = function(application, req, res){
    var dadosForm = req.body;

    var connection = application.config.dbConnection;
    var AdvogadosDAO = new application.app.models.AdvogadosDAO(connection);

    AdvogadosDAO.incluir(dadosForm);

    res.send('Incluido');
}