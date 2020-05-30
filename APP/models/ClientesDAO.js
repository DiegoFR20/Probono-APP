function clientesDAO(connection){
    this._connection = connection;
}

clientesDAO.prototype.inserircliente = function(cliente, res){
    var dados = {
        operacao: 'inserir',
        cliente: cliente,
        collection: 'clientes',
        callback: function(err, result){
            res.send('Salvo');
        }
    };
    this._connection(dados);
};

clientesDAO.prototype.pesquisarcliente = function(cliente, res){
    var dados = {
        operacao: 'pesquisar',
        cliente: cliente,
        collection: 'clientes',
        callback: function(err, result){
            res.send('Encontrado');
        }
    };
    this._connection(dados);
};

clientesDAO.prototype.atualizarcliente = function(cliente, res){
    var dados = {
        operacao: 'atualizar',
        cliente: cliente,
        collection: 'clientes',
        callback: function(err, result){
            res.send('Atualizado');
        }
    };
    this._connection(dados);
};

clientesDAO.prototype.excluircliente = function(cliente, res){
    var dados = {
        operacao: 'remover',
        cliente: cliente,
        collection: 'clientes',
        callback: function(err, result){
            res.send('Removido');
        }
    };
    this._connection(dados);
};

module.exports = function(){
    return clientesDAO();
}