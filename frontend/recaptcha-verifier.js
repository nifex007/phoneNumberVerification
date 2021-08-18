// set-up an invisible recaptcha. 'sendCode` is button element id

window.recaptchaVerifier = new firebase.auth.RecaptchaVerifier('sendCode', {
    'size': 'invisible',
    'callback': function (recapchaToken) {
      // reCAPTCHA solved, send recapchaToken and phone number to backend.
      
      // a REST call to your backend
      request.post({
        url: 'http://localhost:5000',
        body: {
          phoneNumber: document.getElementById('phoneNumber').value,
          recapchaToken,
        }
      });
    }
  });
  
  // render the rapchaVerifier. 
  window.recaptchaVerifier.render().then(function (widgetId) {
    window.recaptchaWidgetId = widgetId;
  });