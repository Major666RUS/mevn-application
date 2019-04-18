module.exports = {
    port: 8083,
    dbURL: 'mongodb://localhost:27017/articles',
    dbOptions: {
        useCreateIndex: true,
        useNewUrlParser: true
    }
}