const { mail_Service } = require('../config');
const sgMail = require('@sendgrid/mail');

sgMail.setApiKey(mail_Service.apiKey);
welcomeMail = ( mailTo ) => {
    const msg = {
    to: mailTo,
    from: mail_Service.from,
    templateId: mail_Service.templateId
    };
    //ES6
    sgMail
    .send(msg)
    .then(() => {}, error => {
        console.error(error);

        if (error.response) {
        console.error(error.response.body)
        }
    });
    //ES8
    (async () => {
    try {
        await sgMail.send(msg);
    } catch (error) {
        console.error(error);

        if (error.response) {
        console.error(error.response.body)
        }
    }
    })();
}

module.exports = welcomeMail;