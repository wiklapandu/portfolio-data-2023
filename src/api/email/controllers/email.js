const emailServices = require('../services/email');

module.exports = {
    async send(ctx) {
        emailServices.SendEmail(ctx.request.body);

        ctx.send({
            success: true,
            message: 'Success Sending email to wikla'
        });
    }
}