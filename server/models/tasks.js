var mongoose = require('mongoose');
var TaskSchema = new mongoose.Schema({
    title: {type: String, required: true, minlength: 2, maxlength: 256},
    description: {type: String, required: true, minlength: 2, maxlength: 256},
    completed: {type: Boolean, required: true}
});

mongoose.model('Task', TaskSchema);

// , {timestamps: true}