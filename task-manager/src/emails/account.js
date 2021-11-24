const sgMail = require('@sendgrid/mail')
const config = require('../../../config')
const sengridApiKey = config.keys.SENDGRID_KEY

sgMail.setApiKey(sengridApiKey)

sgMail.send({
    to: 'ieva.aleksandravica@gmail.com',
    from: 'ieva.aleksandravica@gmail.com',
    subject: 'This is my second creation!',
    text: 'I hope this one actually gets to you.'
})
