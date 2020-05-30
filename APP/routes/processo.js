module.exports = function(application){
    application.post('/api/processo/incluir', function(req, res){
        application.api.controllers.processos.incluir(application, req, res);
    });

    application.get('/api/processo/pesquisar:id', function(req, res){
        application.api.controllers.processos.pesquisar(application, req, res);
    });

    application.put('/api/processo/atualizar:id', function(req, res){
        application.api.controllers.processos.atualizar(application, req, res);
    });

    application.delete('/api/processo/remover:id', function(req, res){
        application.api.controllers.processos.remover(application, req, res);
    });
}