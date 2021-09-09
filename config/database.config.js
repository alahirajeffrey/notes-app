const env = require('dotenv').config()

//environment variables
username = process.env.DB_USERNAME
password = process.env.DB_PASSWORD

module.exports = {
    url : `mongodb+srv://${username}:${password}@testcluster.vyyjz.mongodb.net/devDB?retryWrites=true&w=majority`
}
