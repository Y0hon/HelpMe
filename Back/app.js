// import express
const express = require('express');
// create express app
const app = express();

var uuid = require('uuid');
// import HelpMe
const HelpMe = require('./helpme');
// import Theme
const Theme = require('./theme');
const bodyParser = require("body-parser");
// import Etudiant
const Student = require('./student');

// app creation
const helpMe = new HelpMe();

// Si on lance l'application Angular.js avec ng serve
app.all('*', function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
    next();
});

// Si on veut que l'application Angular soit envoyée par notre application Node.js
app.use(express.static(__dirname + '../front/dist/front'));http://localhost:3000/test/

// to parse JSON
app.use(express.json());

// to not have an empty body on post
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


app.get('/test/', (req, res) => {
        var theme = new Theme("titretest", "descriptiontest","date","idTheme");
        var student = new Student("Lussiez","Yohan","Toulouse","idEtudiant");
        helpMe.addStudent(student);
        helpMe.addTheme(theme)
        helpMe.addRecommendation(theme._idTheme,student._idStudent)
         console.log(helpMe.getRecommendations(theme._idTheme));
        console.log(helpMe.themeList)
        res.send(helpMe.themeList);
})

// Récupère la liste de tous les thèmes
app.get('/theme', (req, res) => {
    res.send(helpMe.themeList);
})

// Récupère un thème selon son id
app.get('/theme/:idTheme', (req, res) => {
    res.send(helpMe.getTheme(req.params.idTheme));
})

// Route POST qui sert à créer un theme
app.post('/theme', function (req, res) {
    var theme = req.body;
    if (theme._title !== undefined && theme._title !== "") {
        helpMe.addTheme(new Theme(theme._title, theme._description, theme._date, theme._idTheme))
    }
    res.send(helpMe.themeList)
});

// Ajoute un mot clé au thème qui porte l'ID _idTheme
app.post('/addKeyWord',function(req,res){
    helpMe.addKeyWord(req.body._idTheme,req.body._keyWord);
    res.send(helpMe.getTheme(req.body._idTheme).keyWords);
})

// Récupère un thème avec un mot-clé
app.get('/theme/searchByKeyWord/:keyWord', (req, res) => {
    res.send(helpMe.getThemeByKeyWord(req.params.keyWord));
});

// Supprime un thème selon son id
app.delete('/Theme/:idTheme', (req, res) => {
    var idTheme = req.params.idTheme;
    res.send(helpMe.removeTheme(idTheme));
})

//Récupère la liste des recommandations du thème
app.get('/RecommendationTheme/:idTheme', function (req, res) {
    res.send(helpMe.getRecommendations(req.params.idTheme));
});

//Récupère la liste des thèmes sur lesquels l'étudiant est recommandé
app.get('/RecommendationStudent/:idStudent', function (req, res) {
    res.send(helpMe.getRecommendationsStudent(req.params.idStudent));
});

// Ajoute une recommandation de l'étudiant idStudent au thème qui a l'ID idTheme
app.post('/addRecommendation', function (req, res) {
    res.send(helpMe.addRecommendation(req.body._idTheme,req.body._idStudent));
});

// Retire une recommandation de l'étudiant idStudent au thème qui a l'ID idTheme
app.post('/deleteRecommendation', function (req, res) {
    res.send(helpMe.deleteRecommendation(req.body._idTheme,req.body._idStudent));
});

// Récupère la liste de tous les étudiants
app.get('/student', (req, res) => {
    res.send(helpMe.studentList);
})

// Récupère un thème selon son id
app.get('/student/:idStudent', (req, res) => {
    res.send(helpMe.getStudent(req.params.idStudent));
})

// Route POST qui sert à créer un étudiant
app.post('/student', function (req, res) {
    var student = req.body;
    if (student._firstName !== undefined && student._firstName !== "" &&
        student._lastName !== undefined && student._lastName !== "" &&
        student._city !== undefined && student._city !== "") {
        helpMe.addStudent(new Student(student._lastName, student._firstName,student._city, student._idStudent))
    }
    res.send(helpMe.studentList)
});

// Modifie l'étudiant d'ID idStudent
app.put('/Student', (req, res) => {
    var student = req.body;
    res.send(helpMe.editStudent(student));
})

// Modifie l'le thème d'ID idTheme
app.put('/Theme', (req, res) => {
    var theme = req.body;
    res.send(helpMe.editTheme(theme));
})

// Supprime l'étudiant d'ID idStudent
app.delete('/Student/:idStudent', (req, res) => {
    res.send(helpMe.removeStudent(req.params.idStudent));
})

// on lance l'app express sur le port 3000
app.listen(3000, function () {
    console.log('App listening on port : 3000!') ;
});

