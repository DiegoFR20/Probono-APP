function ProcessosDAO(connection) {
    this._connection = connection;
}

ProcessosDAO.prototype.getProcessos = function (res, req) {
    var data = {
        operacao: 'pesquisar',
        collection: 'processos',
        callback: function (error, result) {
            if (error)
                res.send('error');
            res.render('processos/processos', { processos: result, req: req });
        }
    };
    this._connection(data);
}

ProcessosDAO.prototype.getProcessosCliente = function (res, req) {
    var data = {
        operacao: 'pesquisar',
        dados: { 'cpfCliente': { $eq: req.session.cpf } },
        collection: 'processos',
        callback: function (error, result) {
            if (error)
                res.send('error');
            else {
                res.render('processos/processos', { processos: result, req: req });
            }
        }
    };
    this._connection(data);
}

ProcessosDAO.prototype.inserirProcesso = function (processo) {
    var data = {
        operacao: 'inserir',
        dados: processo,
        collection: 'processos'
    };
    this._connection(data);
};

ProcessosDAO.prototype.pesquisarProcesso = function (processo) {
    var data = {
        operacao: 'pesquisar',
        dados: processo,
        collection: 'processos'
    };
    this._connection(data);
};

ProcessosDAO.prototype.atualizarProcesso = function (processo, numeroProcesso) {
    var data = {
        operacao: 'atualizar',
        where: processo.numeroProcesso,
        set: numeroProcesso,
        collection: 'processos'
    };
    this._connection(data);
};

ProcessosDAO.prototype.excluirProcesso = function (processo) {
    var data = {
        operacao: 'remover',
        dados: processo,
        collection: 'processos'
    };
    this._connection(data);
};

module.exports = function () {
    return ProcessosDAO;
}