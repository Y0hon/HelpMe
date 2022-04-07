
const Theme = require('./theme');

var uuid = require('uuid');

module.exports = class HelpMe {
    constructor() {
        this._themeList = [];
        this._studentList = [];
    }

    get themeList() {
        return this._themeList;
    }

    get studentList(){
        return this._studentList;
    }

    addTheme(theme) {
        this._themeList.push(theme);
    }


    removeTheme(idTheme) {
        var indexASupprimer=-1;
        let i=0;
        while(i<this.themeList.length && indexASupprimer==-1){
            if(this.themeList[i]._idTheme===idTheme){
                indexASupprimer=i;
            }
            i++;
        }
        this._themeList.splice(indexASupprimer,1); //Supprime cet élément de la liste
        return this._themeList;
    }

    getTheme(idTheme) {
        var indexARecuperer=-1;
        let i=0;
        while(i<this.themeList.length && indexARecuperer==-1){
            if(this.themeList[i]._idTheme===idTheme){
                indexARecuperer=i;
            }
            i++;
        }
        return this._themeList[indexARecuperer];
    }


    addStudent(student) {
       this._studentList.push(student);
    }

    removeStudent(idStudent) {
        var indexASupprimer=-1;
        var i=0;
        while(i<this.studentList.length && indexASupprimer==-1){
            if(this.studentList[i]._idStudent===idStudent){
                indexASupprimer=i;
            }
            i++;
        }
        this._studentList.splice(indexASupprimer,1); //Supprime cet élément de la liste
        return this._studentList;
    }

    getStudent(idStudent) {
        var indexARecuperer=-1;
        let i=0;
        while(i<this._studentList.length && indexARecuperer==-1){
            if(this._studentList[i]._idStudent===idStudent){
                indexARecuperer=i;
            }
            i++;
        }
        return this._studentList[indexARecuperer];
    }

    // Modifie un étudiant
    editStudent(student){
        var etudiant = this.getStudent(student._idStudent);
        etudiant._firstName=student._firstName;
        etudiant._lastName=student._lastName;
        etudiant._city=student._city;
        etudiant._contact=student._contact;
        return;
    }

    //Modifie le thème en paramètre
    editTheme(theme){
        var themeTrouve = this.getTheme(theme._idTheme)
        themeTrouve._title=theme._title;
        themeTrouve._description=theme._description;
        themeTrouve._date=theme._date;
        themeTrouve._contact=theme._contact;
        return;
    }

    //Ajoute un mot-clé au thème d'idTheme
    addKeyWord(idTheme, keyWord){
        let i = 0;
        var theme = this.getTheme(idTheme);
        theme.addKeyWord(keyWord);
        return theme.keyWords;
    }

    // Obtient toutes les recommandations d'un étudiant donné
    getRecommendationsStudent(idStudent){
        let listeRecommandationsTheme = JSON.parse(JSON.stringify(this._themeList));
        for (let i = 0; i < this._themeList.length; i++) {
            if(this._themeList[i]._recommendations.has(idStudent)){
                for (let j = 0; j < listeRecommandationsTheme.length; j++) {
                    if(this._themeList[i]._idTheme==listeRecommandationsTheme[j]._idTheme && this._themeList[i]._recommendations.get(idStudent)>0){
                        listeRecommandationsTheme[j]._likes=this._themeList[i]._recommendations.get(idStudent);
                    }
                }
            }
        }
        return listeRecommandationsTheme;
    }

    getRecommendations(idTheme){
        let listeRecommandationsComplete = JSON.parse(JSON.stringify(this._studentList))
        var theme = this.getTheme(idTheme);
        var mapRecommandations = new Map();
        var mapRecommandations = theme._recommendations;
        for (let j = 0; j < listeRecommandationsComplete.length; j++) {
            for(let [key,value] of mapRecommandations){
                if(listeRecommandationsComplete[j]._idStudent==key){
                    listeRecommandationsComplete[j]._likes=mapRecommandations.get(key);
                }
            }
        }
        return listeRecommandationsComplete;
    }


    addRecommendation(idTheme, idStudent){
        var theme = this.getTheme(idTheme);
        theme.addRecommendation(idStudent);
        this.setTop4Likes(idTheme);
        return theme.recommendations;
    }

    deleteRecommendation(idTheme, idStudent){
        var theme = this.getTheme(idTheme);
        theme.deleteRecommendation(idStudent);
        this.setTop4Likes(idTheme);
        return theme.recommendations;
    }

    //Algorithme de tri du top 4 likes
    trierTableauTop4(top4){
        for(var i = 0; i < top4.length; i++){
            //stocker l'index de l'élément minimum
            var min = i;
            for(var j = i+1; j < top4.length; j++){
                if(top4[j][1] > top4[min][1]){
                    // mettre à jour l'index de l'élément minimum
                    min = j;
                }
            }
            var tmp = top4[i];
            top4[i] = top4[min];
            top4[min] = tmp;
        }
        return top4;
    }

    // Retourne le top 4 des likes d'un thème
    setTop4Likes(idTheme){
        var prenom;
        var valeur;
        let j = 0;
        var theme= this.getTheme(idTheme);
        var top4 = theme.getTop4Likes();
        var top4AvecPrenoms = new Map(); //Modification des idStudent par des prénoms
        var tableauTop4AvecPrenoms = [];
        for (var key of top4.keys()){ //Itération sur toutes les clés de top 4
            j = 0;
            let indexStudentTrouve=-1;
            while(j<this._studentList.length && indexStudentTrouve===-1){
                if(this.studentList[j]._idStudent===key){
                    indexStudentTrouve=j;
                    prenom=this.studentList[indexStudentTrouve]._firstName; //On assigne le prénom
                    valeur = top4.get(key);
                    top4AvecPrenoms.set(prenom,valeur);
                    top4.delete(key);
                }
                j++;

            }
        }
        var tableauTop4 =this.trierTableauTop4(Array.from(top4AvecPrenoms)); // On convertit le tableau en map et on le convertit en tableau
        theme._top4=tableauTop4;
    }


}