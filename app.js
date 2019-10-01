const express = require('express');
const app = express();
const path = require('path')
const {Student, School} = require('./db').models;
const babel = require('@babel/core');
const fs = require('fs')


//Home 

app.use('/app', express.static(path.join(__dirname, 'app')));
app.use('/dist', express.static(path.join(__dirname, 'dist')));

// babel.transformFile('./app/index.js', { presets: ['@babel/preset-react']}, ((err, result) =>{
//     if (err) {
//         console.log(err)
//     } 
//     else {
//         fs.writeFile('./dist/app.js', result.code, (err)=> {
//             console.log(err)
//         })
//     }
// }))

app.get('/', (req, res, next) => res.sendFile(path.join(__dirname, 'index.html')))
// NOW IM STUCK TRYING TO RENDER THESE THINGS 


//SCHOOLS
app.get('/api/schools', (req, res, next) => {
    School.findAll()
        .then(school => res.send(school))
        .catch(next)                
});

//STUDENTS
app.get('/api/students', (req, res, next) => {
    Student.findAll()
        .then(student => res.send(student))
        .catch(next)
})

//app.post('')
module.exports = app;