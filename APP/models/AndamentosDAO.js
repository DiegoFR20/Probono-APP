function andamentosDAO(connection){
    this._connection = connection;
}

andamentosDAO.prototype.inserirandamento = function(andamento, res){
    var dados = {
        operacao: 'inserir',
        andamento: andamento,
        collection: 'andamentos',
        callback: function(err, result){
            res.send('Salvo');
        }
    };
    this._connection(dados);
};

andamentosDAO.prototype.pesquisarandamento = function(andamento, res){
    var dados = {
        operacao: 'pesquisar',
        andamento: andamento,
        collection: 'andamentos',
        callback: function(err, result){
            res.send('Encontrado');
        }
    };
    this._connection(dados);
};

andamentosDAO.prototype.atualizarandamento = function(andamento, res){
    var dados = {
        operacao: 'atualizar',
        andamento: andamento,
        collection: 'andamentos',
        callback: function(err, result){
            res.send('Atualizado');
        }
    };
    this._connection(dados);
};

andamentosDAO.prototype.excluirandamento = function(andamento, res){
    var dados = {
        operacao: 'remover',
        andamento: andamento,
        collection: 'andamentos',
        callback: function(err, result){
            res.send('Removido');
        }
    };
    this._connection(dados);
};

module.exports = function(){
    return andamentosDAO();
}