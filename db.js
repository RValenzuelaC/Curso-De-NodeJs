const db = require("mongoose");

db.Promise = global.Promise;
//    "mongodb://user:user1234@cluster0-shard-00-00.o9nte.mongodb.net:27017,cluster0-shard-00-01.o9nte.mongodb.net:27017,cluster0-shard-00-02.o9nte.mongodb.net:27017/myFirstDatabase?ssl=true&replicaSet=atlas-13ic1i-shard-0&authSource=admin&retryWrites=true&w=majority";

async function connect(url) {
  /* const uri =
    "mongodb://user:user1234@cluster0-shard-00-00.o9nte.mongodb.net:27017,cluster0-shard-00-01.o9nte.mongodb.net:27017,cluster0-shard-00-02.o9nte.mongodb.net:27017/myFirstDatabase?ssl=true&replicaSet=atlas-13ic1i-shard-0&authSource=admin&retryWrites=true&w=majority"; */

  await db
    .connect(url, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log("[db] Conectada con éxito"))
    .catch((err) => console.error("[db]", err));
}

module.exports = connect;
