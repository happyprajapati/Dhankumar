const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://HappyPrajapati:BlFkoLQi6kUyAZjz@happyprajapati.apjzocj.mongodb.net/dhankumar').then(()=>{
    console.log('Database Connected.');
}).catch((e)=>{
    console.log(e);
});