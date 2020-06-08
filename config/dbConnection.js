var MongoClient = require('mongodb').MongoClient,
    objectID = require('mongodb').ObjectID;

var dbName = 'probono';
var mongoURL = 'mongodb+srv://DiegoFR:Freire15.@cluster0-wlpz2.mongodb.net/probono?retryWrites=true&w=majority';

var connMongoDB = function (data) {
    MongoClient.connect(mongoURL, { useNewUrlParser: true }, function (err, client) {
        const dB = client.db(dbName);
        query(dB, data);
        client.close();
    });
}

function query(db, data) {
    var collection = db.collection(data.collection);
    switch (data.operacao) {
        case 'inserir':
            collection.insertOne(data.dados, data.callback);
            break;
        case 'atualizar':
            collection.update(data.where, data.set);
            break;
        case 'pesquisar':
            collection.find(data.dados).toArray(data.callback);
            break;
        case 'remover':
            data.where._id = objectID(data.where._id);
            collection.remove(data.where, data.callback);
            break;
    }
}

module.exports = function () {
    return connMongoDB;
}