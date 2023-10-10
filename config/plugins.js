module.exports = ({ env }) => ({
  // ...
  email: {
    config: {
      provider: "nodemailer",
      providerOptions: {
        host: env("SMTP_HOST", "smtp.example.com"),
        port: env("SMTP_PORT", 587),
        auth: {
          user: env("SMTP_USERNAME"),
          pass: env("SMTP_PASSWORD"),
        },
        // ... any custom nodemailer options
      },
      settings: {
        defaultFrom: env('SMTP_DEFAULT_FROM', 'wiklapandu2503@gmail.com'),
        defaultReplyTo: env('SMTP_DEFAULT_FROM', 'wiklapandu2503@gmail.com'),
      },
    },
  },
  // ...
});
