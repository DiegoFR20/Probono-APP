function AdvogadosDAO(connection){
    this._connection = connection;
}

AdvogadosDAO.prototype.inserirAdvogado = function(advogado, res){
    var dados = {
        operacao: 'inserir',
        advogado: advogado,
        collection: 'advogados',
        callback: function(err, result){
            res.send('Salvo');
        }
    };
    this._connection(dados);
};

AdvogadosDAO.prototype.pesquisarAdvogado = function(advogado, res){
    var dados = {
        operacao: 'pesquisar',
        advogado: advogado,
        collection: 'advogados',
        callback: function(err, result){
            res.send('Encontrado');
        }
    };
    this._connection(dados);
};

AdvogadosDAO.prototype.atualizarAdvogado = function(advogado, res){
    var dados = {
        operacao: 'atualizar',
        advogado: advogado,
        collection: 'advogados',
        callback: function(err, result){
            res.send('Atualizado');
        }
    };
    this._connection(dados);
};

AdvogadosDAO.prototype.excluirAdvogado = function(advogado, res){
    var dados = {
        operacao: 'remover',
        advogado: advogado,
        collection: 'advogados',
        callback: function(err, result){
            res.send('Removido');
        }
    };
    this._connection(dados);
};

module.exports = function(){
    return AdvogadosDAO();
}