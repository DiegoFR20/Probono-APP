function AndamentosDAO(connection) {
    this._connection = connection;
}

AndamentosDAO.prototype.inserirAndamento = function (numero, desc) {
    var data = {
        operacao: 'inserir',
        dados: { numero: numero, desc: desc },
        collection: 'andamentos'
    };
    this._connection(data);
};

AndamentosDAO.prototype.pesquisarAndamento = function (andamento, req, res) {
    var data = {
        operacao: 'pesquisar',
        dados: { 'numeroProcesso': parseInt(andamento.numeroProcesso) },
        collection: 'processos',
        callback: function (error, result) {
            if (error)
                res.send(error);
            else {
                res.render('processos/processo', { numeroProcesso: andamento.numeroProcesso, andamento: result , req: req});
            }
        }
    };
    this._connection(data);
};

AndamentosDAO.prototype.atualizarAndamento = function (andamento) {
    var data = {
        operacao: 'atualizar',
        dados: andamento,
        collection: 'andamentos'
    };
    this._connection(data);
};

AndamentosDAO.prototype.excluirAndamento = function (andamento) {
    var data = {
        operacao: 'remover',
        dados: andamento,
        collection: 'andamentos'
    };
    this._connection(data);
};

module.exports = function () {
    return AndamentosDAO;
}