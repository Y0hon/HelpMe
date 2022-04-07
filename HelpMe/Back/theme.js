module.exports = class Theme {
    constructor(title, description, date, idTheme) {
        this._idTheme = idTheme;
        this._title = title;
        this._description = description;
        this._keyWord="";
        this._keyWords = [];
        this._recommendations = new Map();
        this._top4 = [];
        this._date = date;
        this._likes = 0;
    }

    get title() {
        return this._title;
    }

    set title(value) {
        this._title = value;
    }

    get description() {
        return this._description;
    }

    set description(value) {
        this._description = value;
    }

    set likes(value) {
        this._likes = value;
    }

    get keyWords() {
        return this._keyWords;
    }

    addKeyWord(keyWord) {
        var existeDeja=false;
        for(let word of this.keyWords){
            if(word===keyWord){
                existeDeja=true;
            }
        }
        if(!existeDeja){
            this._keyWords.push(keyWord);
        }
    }

    get date() {
        return this._date;
    }

    get id() {
        return this._id;
    }

    get recommendations() {
        return this._recommendations;
    }

    set date(value) {
        this._date = value;
    }

    addRecommendation(idStudent){
        if(this._recommendations.has(idStudent)){
            this._recommendations.set(idStudent, this._recommendations.get(idStudent)+1);
        }
        else{
            this._recommendations.set(idStudent,1);
        }
    }

    creerRecommendation(key,value){
        this._recommendations.set(key,value);
    }

    deleteRecommendation(idStudent){
        if(this._recommendations.get(idStudent)>0){
            this._recommendations.set(idStudent, this._recommendations.get(idStudent)-1);
        }
        return;
    }


    getTop4Likes(){
        var top4 = new Map(); //Map de retour
        var minTop; //Variable qui contiendra le minimum du top 4
        var minIDTop; //Variable qui contiendra l'ID du minimum du top4
        for(let [key,value] of this._recommendations ){ //On boucle sur les recommandations
            if(top4.size<4 && value>0){ // Si le top n'a pas encore 4 recommandations, on le remplit
                top4.set(key,value);
            }
            else{ // Si le top a 4 recommandations, on va récupérer le minimum du top et le comparer avec la valeur pour la remplacer
                minTop=value; //On fixe le minimum à la valeur, car si une des valeurs du top y est inférieur, elle mérite d'être remplacé
                for(let [keyTop,valueTop] of top4){ //On boucle
                    if(valueTop<minTop){
                        minTop=valueTop;
                        minIDTop=keyTop;
                    }
                }
                if(minTop<value){
                    top4.delete(minIDTop);
                    top4.set(key,value);
                }
            }
        }
        return top4;
    }

    set top4(value){
        this._top4=value;
    }
}
