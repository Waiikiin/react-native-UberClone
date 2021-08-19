const aws = require('aws-sdk');

exports.handler = async (event, context) => {
    event.response.autoConfirmUser = true;
    event.response.autoVerifyEmail = true;  // this is NOT needed if e-mail is not in attributeList
   
    console.log(context);
    console.log(event);
    // context.done(null, event);
};