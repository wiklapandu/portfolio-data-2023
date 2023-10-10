
module.exports = {
    async SendEmail(body){
        const response = await strapi.plugin('email').service('email').send({
            to: 'wiklapandu2503@gmail.com',
            from: 'wiklapandu2503@gmail.com',
            subject: 'wiklapandu2503',
            text: 'wiklapandu2503',
        });

        return response;
    }
}