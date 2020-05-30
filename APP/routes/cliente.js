module.exports = function(application){
    application.post('/api/cliente/incluir', function(req, res){
        application.api.controllers.clientes.incluir(application, req, res);
    });

    application.get('/api/cliente/pesquisar:id', function(req, res){
        application.api.controllers.clientes.pesquisar(application, req, res);
    });

    application.put('/api/cliente/atualizar:id', function(req, res){
        application.api.controllers.clientes.atualizar(application, req, res);
    });

    application.delete('/api/cliente/remover:id', function(req, res){
        application.api.controllers.clientes.remover(application, req, res);
    });
}