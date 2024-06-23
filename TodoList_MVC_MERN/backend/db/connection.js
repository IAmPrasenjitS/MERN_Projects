const mongoose = require('mongoose');
const dbUrl = ''

const dbConnection = () => {
    return mongoose.connect(dbUrl)
}

module.exports = dbConnection