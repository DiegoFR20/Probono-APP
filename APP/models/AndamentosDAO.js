function AndamentosDAO(connection) {
    this._connection = connection;
}

AndamentosDAO.prototype.inserirAndamento = function (numeroProcesso, descAndamento) {
    var numero = parseInt(numeroProcesso);
    var ano = new Date().getFullYear();
    var mes = new Date().getMonth();
    var dia = new Date().getDay();
    var hora = new Date().getHours();
    var minuto = new Date().getMinutes();
    var segundo = new Date().getSeconds();

    var data = {
        operacao: 'inserir',
        dados: {
            numeroProcesso: numero, descAndamento: descAndamento, date: {
                ano: ano,
                mes: mes,
                dia: dia,
                hora: hora,
                minuto: minuto,
                segundo: segundo,
            }
        },
        collection: 'andamentos'
    };
    this._connection(data);
};

AndamentosDAO.prototype.inserirTraducao = function (traducao) {
    var data = {
        operacao: 'inserir',
        dados: traducao,
        collection: 'traducoes'
    };
    this._connection(data);
};

AndamentosDAO.prototype.pesquisarTraducao = function (descAndamento, res) {
    var data = {
        operacao: 'pesquisar',
        dados: { 'descAndamento': descAndamento },
        collection: 'traducoes',
        callback: function (error, result) {
            if(result){
            var trad = JSON.stringify(result[0].tradAndamento);
            var traducao = trad.split('"').join('');
            res.send(traducao);
            }
            if(error){
                res.send('Não encontrada tradução.');
            }
        }
    };
    this._connection(data);
};

AndamentosDAO.prototype.pesquisarDataAndamento = function (descAndamento, res) {
    var data = {
        operacao: 'pesquisar',
        dados: { 'descAndamento': descAndamento },
        collection: 'andamentos',
        callback: function (error, result) {
            if (error) {
                res.send(error);
            }
            else {
                res.send('Ela será realizada no dia ' + result.date.dia + '/' + result[0].date.mes + '/' + result[0].date.dia + ' às ' + result[0].date.hora + ':' + result[0].date.minuto);
            }
        }
    };
    this._connection(data);
};

AndamentosDAO.prototype.pesquisarAndamento = function (andamento, req, res) {
    var numeroProcesso = parseInt(andamento.numeroProcesso);
    var data = {
        operacao: 'pesquisar',
        dados: { 'numeroProcesso': numeroProcesso },
        collection: 'andamentos',
        callback: function (error, result) {
            if (error) {
                res.send(error);
            }
            else {
                res.render('processos/processo', { numeroProcesso: numeroProcesso, andamento: result, req: req, traducao: {} });
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