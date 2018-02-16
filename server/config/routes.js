var tasks = require('../controllers/taskController.js');

module.exports = function(app) {
    app.get('/tasks', function(req, res) {
        tasks.showAll(req, res);
    });

    app.post('/task', function(req, res) {
        tasks.addTask(req, res);
    });

    app.get('/tasks/:id', function(req, res) {
        tasks.showTask(req, res);
    });

    app.put('/tasks/:id', function(req, res) {
        tasks.update(req, res);
    });

    app.delete('/tasks/:id', function(req, res) {
        tasks.destroy(req, res);
    });
    app.get('/create/:title/:description/:completed', function(req,res) {
        tasks.create(req,res);
    });
};

// {"title":"Running","completed":null,"description":null,"created_at":"2018-02-15T04:20:07.412Z","_id":"5a850aa3c159167e01ac3558","__v":0}

// http://localhost:8000/tasks/5a850aa3c159167e01ac3558/false/Running**/2018-02-15T04:20:07.412Z