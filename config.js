const config = {
  dbUrl:
    process.env.DB_URL ||
    "mongodb://user:user1234@cluster0-shard-00-00.o9nte.mongodb.net:27017,cluster0-shard-00-01.o9nte.mongodb.net:27017,cluster0-shard-00-02.o9nte.mongodb.net:27017/myFirstDatabase?ssl=true&replicaSet=atlas-13ic1i-shard-0&authSource=admin&retryWrites=true&w=majority",
  port: process.env.PORT || 3000,
  host: process.env.HOST || "http://localhost",
  publicRoute: process.env.PUBLIC_ROUTE || "/app",
  filesRoute: process.env.FILES_ROUTE || "files",
};

module.exports = config;
