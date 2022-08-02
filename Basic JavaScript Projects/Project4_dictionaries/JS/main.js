function my_Dictionary() {  //Created a function called my_Dictionary
    var Motorcycle = {      //Created a Dictionary of KVP's
        Make:"Honda",
        Model:"CBR-1000RR",
        Color:"Red",
        Year:"2022",
        Price:"$17,474",
        Category:"Sportbike"
    };
    delete Motorcycle.Category; //Deleted the Category:Sportbike KVP
    document.getElementById("Dictionary").innerHTML = Motorcycle.Category; //Called for a value but since it was deleted prior it will return undefined
}