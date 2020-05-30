function processosDAO(connection){
    this._connection = connection;
}

processosDAO.prototype.inserirprocesso = function(processo, res){
    var dados = {
        operacao: 'inserir',
        processo: processo,
        collection: 'processos',
        callback: function(err, result){
            res.send('Salvo');
        }
    };
    this._connection(dados);
};

processosDAO.prototype.pesquisarprocesso = function(processo, res){
    var dados = {
        operacao: 'pesquisar',
        processo: processo,
        collection: 'processos',
        callback: function(err, result){
            res.send('Encontrado');
        }
    };
    this._connection(dados);
};

processosDAO.prototype.atualizarprocesso = function(processo, res){
    var dados = {
        operacao: 'atualizar',
        processo: processo,
        collection: 'processos',
        callback: function(err, result){
            res.send('Atualizado');
        }
    };
    this._connection(dados);
};

processosDAO.prototype.excluirprocesso = function(processo, res){
    var dados = {
        operacao: 'remover',
        processo: processo,
        collection: 'processos',
        callback: function(err, result){
            res.send('Removido');
        }
    };
    this._connection(dados);
};

module.exports = function(){
    return processosDAO();
}