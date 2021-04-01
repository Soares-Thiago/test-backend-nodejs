express = require('express')
mongoose = require("mongoose")
ObjectIDForModel = mongoose.Schema.Types.ObjectId
ObjectId = mongoose.Types.ObjectId
mongoose.Promise = require("q").Promise
const database = require('./db/db')
var bodyParser = require("body-parser")
var app = express()

app.use(express.json())
app.use(bodyParser.json());

database
    .connect()
    .then(() => {
        var noAuthRoutes = require('./routes/noauth/routes')
        app.use("/noauth",noAuthRoutes);
    })
    .catch((err) => {
        console.log(err)
    })

app.listen(8080, () => {
  console.log('Server is running! 🚀')
});

module.exports = app