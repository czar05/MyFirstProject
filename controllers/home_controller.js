const Todo = require('../models/todo');

module.exports.home = function(req, res){
    Todo.find({}, function(data){
        return res.render('home', {
            title:"TODO App",
            Todo_list: data
        });
    })
    
}

