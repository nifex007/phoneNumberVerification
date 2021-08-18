const express = require('express');
const path = require('path');
const  sendVerificationCode  = require('./backend/send-sms-express');

const app = express();

app.get('/', (request, response) => {
    response.sendFile(path.join(__dirname, '/frontend/index.html'));
})

app.post('/send-sms', sendVerificationCode);

app.listen(5000, () => {
    console.log('Server is running on port 5000');
})
