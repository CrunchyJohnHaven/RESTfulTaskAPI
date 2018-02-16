var mongoose = require('mongoose');
mongoose.Promise = global.Promise;
var Task = mongoose.model('Task');

module.exports = {
    showAll: function(req, res) {
        Task.find({}).sort('-createdAt').exec(function(err, tasks) {
            if (!err) {
                return res.json(tasks);
            }
        });
    },
    addTask: function(req, res) {
        var task = new Task({title: req.body.title, description: req.body.description, completed: req.body.completed});
        task.save(function(err) {
            if (!err) {
                res.redirect('/tasks');
            } else {
                res.send(err);
            }
        });
    },
    showTask: function(req, res) {
        Task.findOne({_id: req.params.id}, function(err, task) {
            if (!err) {
                return res.json(task);
            }
        });
    },
    update: function(req, res) {
        Task.findOne({_id: req.params.id}, function(err, task) {
            if (!err) {
                for (var key in req.body) {
                    task[key] = req.body[key];
                }
                task.save(function(err) {
                    if (!err) {
                        res.redirect('/tasks/' + req.params.id);
                    }
                });
            }
        });
    },
    destroy: function(req, res) {
        Task.remove({_id: req.params.id}, function(err) {
            if (!err) {
                res.redirect('/tasks');
            }
        });
    },
    // create: function(req,res) {
    //     var task = new Task({title:req.params.title, description: req.params.description, completed: req.params.completed});
    //     task.save(function(err,task){ 
    //         if (!err) {
    //             res.redirect('/tasks');
    //         }
    //     });
    // }
};