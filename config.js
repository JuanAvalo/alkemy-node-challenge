require('dotenv').config();

module.exports = {
    // Set your db connection data
    db_mysql: {
        database: process.env.DATABASE,
        host: process.env.HOST,
        user: process.env.USER,
        password: process.env.PASSWORD
    },

    // More info on how to configure this in: https://sendgrid.com/
    mail_Service: {
        apiKey: '',
        from: '',
        templateId: ''
    }
}