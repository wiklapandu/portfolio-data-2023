const emailServices = require('../services/email');

module.exports = {
    async send(ctx) {
        emailServices.SendEmail(ctx.body);
        ctx.send({
            success: true
        });
    }
}