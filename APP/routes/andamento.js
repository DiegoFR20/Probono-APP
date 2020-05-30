module.exports = function(application){
    application.post('/api/andamento/incluir', function(req, res){
        application.api.controllers.andamentos.incluir(application, req, res);
    });

    application.get('/api/andamento/pesquisar:id', function(req, res){
        application.api.controllers.andamentos.pesquisar(application, req, res);
    });

    application.put('/api/andamento/atualizar:id', function(req, res){
        application.api.controllers.andamentos.atualizar(application, req, res);
    });

    application.delete('/api/andamento/remover:id', function(req, res){
        application.api.controllers.andamentos.remover(application, req, res);
    });
}