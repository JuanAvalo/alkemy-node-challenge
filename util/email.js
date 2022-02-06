const { mail_service } = require('/home/juan/projects/config/config');
const sgMail = require('@sendgrid/mail');

sgMail.setApiKey(mail_service.apiKey);
welcomeMail = ( mailTo ) => {
    const msg = {
    to: mailTo,
    from: mail_service.from,
    templateId: 'd-51d52bec627f42f7bf0987f10b689c02'
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