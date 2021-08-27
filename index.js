
const { urlencoded } = require('express');
const express = require('express');

const port = 9000;


const db = require('./config/mongoose');
const Todo = require('./models/todo');

const app = express();

// app.use('/', require('./routes/index'));
app.use(express.static('./assets'));
app.set('view engine', 'ejs');
app.set('views', './views');
app.use(urlencoded());





  

app.get('/', function(req, res){
    
   
     Todo.find({}, function(err, todo ){
         if(err){
             console.log('Error in fetching list from db');
             return;
         }
         console.log(todo);
         return res.render('home', {
             title: "My Todo List",
            Todo_list: todo
     });
  
     
  });
  });



app.post('/create-todolist', function(req, res){
    // contactList.push(req.body);
     Todo.create({
         description: req.body.description,
         category: req.body.category,
         duedate:req.body.duedate
     }, function(err, newTodo){
         if(err){console.log('error in creating a list');
       return;}
   
     
       return res.redirect('back');
     });
    });
     
   

  
   app.post('/delete-task', function(req, res){
   
    let id = req.body.selecttodo;
    
    Todo.deleteMany({_id : id}, function(err){
        if(err){
            console.log('error in deleting an object from database');
            return;
        }
        return res.redirect('back');
    });
    
}); 


/*app.post('/create-todolist', function(req, res){

});*/

app.listen(port, function(err){
    if(err){
        console.log(`error in running the server: ${err}`);
    }
    console.log(`server is running on port: ${port}`);
});

