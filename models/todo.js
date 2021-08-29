const mongoose = require('mongoose');


function formatDate(date) {
    var d = new Date(date),
        month = '' + (d.getMonth() + 1),
        day = '' + d.getDate(),
        year = d.getFullYear();

    if (month.length < 2) month = '0' + month;
    if (day.length < 2) day = '0' + day;

    return [year, month, day].join('-');
}


 const todoSchema = new mongoose.Schema({
     description:{
         type : String,
         required : true
     },
     category: {
        type: String,
        enum: ['Personal', 'Work', 'School', 'Cleaning','Other'],
        required : true 
    },
    duedate:{
        type: String,
        required : true,
        set: date => formatDate(date)
    }
 });

 const Todo = mongoose.model('Todo', todoSchema);

 module.exports = Todo;