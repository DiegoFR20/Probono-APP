function AndamentosDAO(connection) {
    this._connection = connection;
}

AndamentosDAO.prototype.inserirAndamento = function (numeroProcesso, descAndamento) {
    var numero = parseInt(numeroProcesso);
    var data = {
        operacao: 'inserir',
        dados: { numeroProcesso: numero, descAndamento: descAndamento },
        collection: 'andamentos'
    };
    this._connection(data);
};

AndamentosDAO.prototype.pesquisarAndamento = function (andamento, req, res) {
    var numeroProcesso = parseInt(andamento.numeroProcesso);
    console.log({'numeroProcesso': numeroProcesso});
    var data = {
        operacao: 'pesquisar',
        dados: { 'numeroProcesso': numeroProcesso },
        collection: 'andamentos',
        callback: function (error, result) {
            if (error)
                res.send(error);
            else {
                console.log(result);
                res.render('processos/processo', { numeroProcesso: numeroProcesso, andamento: result, req: req });
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