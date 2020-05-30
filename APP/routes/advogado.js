module.exports = function(application){
    application.post('/api/advogado/incluir', function(req, res){
        application.api.controllers.advogados.incluir(application, req, res);
    });

    application.get('/api/advogado/pesquisar:id', function(req, res){
        application.api.controllers.advogados.pesquisar(application, req, res);
    });

    application.put('/api/advogado/atualizar:id', function(req, res){
        application.api.controllers.advogados.atualizar(application, req, res);
    });

    application.delete('/api/advogado/remover:id', function(req, res){
        application.api.controllers.advogados.remover(application, req, res);
    });
}