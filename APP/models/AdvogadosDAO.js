var crypto = require('crypto');

function AdvogadosDAO(connection) {
    this._connection = connection;
}

AdvogadosDAO.prototype.inserirAdvogado = function (advogado) {
    var senhaCriptografada = crypto.createHash('md5').update(advogado.password).digest('hex');
    advogado.password = senhaCriptografada;
    var data = {
        operacao: 'inserir',
        dados: advogado,
        collection: 'advogados'
    };
    this._connection(data);
};

AdvogadosDAO.prototype.autenticarAdvogado = function (advogado, req, res) {
    var senhaCriptografada = crypto.createHash('md5').update(advogado.password).digest('hex');
    advogado.password = senhaCriptografada;
    var data = {
        operacao: 'pesquisar',
        dados: advogado,
        collection: 'advogados',
        callback: function (error, result) {
            if (result != undefined) {
                req.session.autorizadoAdvogado = true;
            }
            if (req.session.autorizadoAdvogado) {
                res.render('home/homeAdvogado', { validacao: {} });
            } else {
                res.render('index', { validacao: {} });
            }
        }
    };
    this._connection(data);
}

AdvogadosDAO.prototype.pesquisarAdvogado = function (advogado) {
    var data = {
        operacao: 'pesquisar',
        dados: advogado,
        collection: 'advogados'
    };
    this._connection(data);
};

AdvogadosDAO.prototype.atualizarAdvogado = function (advogado) {
    var data = {
        operacao: 'atualizar',
        dados: advogado,
        collection: 'advogados'
    };
    this._connection(data);
};

AdvogadosDAO.prototype.excluirAdvogado = function (advogado) {
    var data = {
        operacao: 'remover',
        dados: advogado,
        collection: 'advogados'
    };
    this._connection(data);
};

module.exports = function () {
    return AdvogadosDAO;
}