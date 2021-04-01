const config = require("../config/config")

var urlDbAnotaAi = config.db.anotaai

console.log("VERSAO::" + mongoose.version)

const connect = async () => {
    mongoose.connect(urlDbAnotaAi, {
        useNewUrlParser: true, 
        useUnifiedTopology: true 
    }).then(()=>{
        console.log('db connected')
    })
}

module.exports = {
    connect,
}
