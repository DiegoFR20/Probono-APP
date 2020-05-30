var mongodb = require('mongodb').MongoClient,
    assert = require('assert');

var dbName = 'probono';
var mongoURL = 'mongodb://localhost:27017';

var connMongoDB = function () {
    mongodb.connect(mongoURL, function (err, client) {
        assert.equal(null, err);
        console.log("Contectado com sucesso");
        const db = client.db(dbName);
        query(db, data);
        client.close();
    });
}

function query(db, data) {
    var collection = db.collection(data.collection);
    switch (data.operacao) {
        case 'atualizar':
            collection.update(data.where, data.set);
            break;
        case 'inserir':
            collection.insertOne(data.dados, data.callback);
            break;
        case 'pesquisar':
            collection.find(data.dados).toArray(data.callback);
            break;
        case 'remover':
            data.where._id = objectId(data.where._id);
            collection.remove(data.where, data.callback);
            break;
    }
}

module.exports = function(){
    return connMongoDB;
}