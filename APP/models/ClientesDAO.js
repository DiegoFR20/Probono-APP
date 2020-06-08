var crypto = require('crypto');

function ClientesDAO(connection) {
    this._connection = connection;
}

ClientesDAO.prototype.inserirCliente = function (cliente) {
    var senhaCriptografada = crypto.createHash('md5').update(cliente.password).digest('hex');
    cliente.password = senhaCriptografada;
    var data = {
        operacao: 'inserir',
        dados: cliente,
        collection: 'clientes'
    };
    this._connection(data);
};

ClientesDAO.prototype.autenticarCliente = function (cliente, req, res) {
    var senhaCriptografada = crypto.createHash('md5').update(cliente.password).digest('hex');
    cliente.password = senhaCriptografada;
    var data = {
        operacao: 'pesquisar',
        dados: cliente,
        collection: 'clientes',
        callback: function (error, result) {
            if (result != undefined) {
                req.session.autorizadoCliente = true;
            }

            if (req.session.autorizadoCliente) {
                req.session.cpf = cliente.cpf;
                res.render('home/homeCliente', { validacao: {} });
            } else {
                res.render('index', { validacao: {} });
            }
        }
    };
    this._connection(data);
}

ClientesDAO.prototype.pesquisarCliente = function (clientes) {
    var data = {
        operacao: 'pesquisar',
        dados: cliente,
        collection: 'clientes'
    };
    this._connection(data);
};

ClientesDAO.prototype.atualizarCliente = function (cliente) {
    var data = {
        operacao: 'atualizar',
        dados: cliente,
        collection: 'clientes'
    };
    this._connection(data);
};

ClientesDAO.prototype.excluirCliente = function (cliente) {
    var data = {
        operacao: 'remover',
        dados: cliente,
        collection: 'clientes'
    };
    this._connection(data);
};

module.exports = function () {
    return ClientesDAO;
}