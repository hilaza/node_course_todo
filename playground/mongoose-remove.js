const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');

Todo.remove({}).then((result) => {
    console.log(result);
});

Todo.findOneAndRemove({_id: 'asd'}).then((todo) => {

});

Todo.findByIdAndRemove('as').then((todo) => {
    console.log(todo);
});