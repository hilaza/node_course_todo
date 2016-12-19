var mongoose = require('mongoose');

var User = mongoose.model('User', {
    email: {
        type: String,
        required: true,
        minlength: 1,
        trim: true
    }
});

module.exports = {User};

// var newUser = new User({
//     email: '      '
// });

// newUser.save().then((doc) => {
//     console.log('saved user', JSON.stringify(doc, undefined, 2));
// }, (e) => {
//     console.log('unable to save user');
// });