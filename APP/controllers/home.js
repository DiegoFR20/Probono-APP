module.exports.homeCliente = function (application, req, res) {
    if (req.session.autorizadoCliente !== true) {
        res.send('Você precisa logar primeiro!');
        return
    }
}

module.exports.homeAdvogado = function (application, req, res) {
    if (req.session.autorizadoAdvogado !== true) {
        res.send('Você precisa logar primeiro!');
        return;
    }
}

module.exports.sair = function (application, req, res) {
    req.session.destroy(function (err) {
        res.render('index', { validacao: {} });
    })
}