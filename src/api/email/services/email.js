const fs = require('fs');
const path = require('path');
const ROOT_PATH = path.join(__dirname, '.');

module.exports = {
    async SendEmail(body){
        const file = await fs.readFileSync(path.join(ROOT_PATH, 'view/email.html'), 'utf-8');
        const response = await strapi.plugin('email').service('email').send({
            to: 'wiklapandu2503@gmail.com',
            from: body?.email,
            subject: `${body?.subject} | Portfolio Wikla`,
            html: file.toString()
            .replace('{{nameSender}}', `${body?.name}<br>(${body?.email})`)
            .replace('{{content}}', body?.content)
            .replace('{{urlSite}}', process.env.URL_APP),
        });

        console.log(file);

        return response;
    }
}