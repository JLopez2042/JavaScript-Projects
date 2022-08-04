function Loop() {               // Using a function that utilizes a while loop
    var Digit = "";
    var X = 1;
    while (X < 11) {
        Digit += "<br>" + X;
        X++;
    }
    document.getElementById("Call_Loop").innerHTML = Digit;
}

function string_Length() {          //Utililizing the string.length function
    let text = "Testing string length.";
    let length = text.length;
    document.getElementById("string_Length").innerHTML = length;
}

var Instruments = ["Guitar", "Drums", "Piano", "Bass", "Violin", "Trumpet", "Flute"];  //Created a function that utilizes a for loop
var Content = "";
var Y;
function for_Loop() {
    for (Y = 0; Y < Instruments.length; Y++) {
        Content += Instruments[Y] + "<br>";
    }
    document.getElementById("List_of_Instruments").innerHTML = Content;
}

function cat_pics() {                   //Created a funciton that utilizes an array
    var Cat_Picture = [];
    Cat_Picture[0] = "sleeping";
    Cat_Picture[1] = "playing";
    Cat_Picture[2] = "eating";
    Cat_Picture[3] = "purring";
    document.getElementById("Cat").innerHTML = "In this picture,the cat is " + Cat_Picture[2] + ".";
}

function array_Function() {             //Utilized an array function
    var kid_sentence = [];
    kid_sentence[0] = "sleeping";
    kid_sentence[1] = "playing";
    kid_sentence[2] = "eating";
    kid_sentence[3] = "laughing";
    document.getElementById("Array").innerHTML = "In this sentence a kid is " + kid_sentence[3] + ".";
}

function constant_function () {         //Using a constant statement in a function
    const Musical_Instrument = {type:"guitar", brand:"Fender", color:"black"};
    Musical_Instrument.color = "blue";
    Musical_Instrument.price = "$900";
    document.getElementById("Constant").innerHTML = "The cost of the " + Musical_Instrument.type + " was " + Musical_Instrument.price;
}

function my_Info() {                    //Used a let statement
    let lastName = "Lopez",
    firstName = "Jacob",
    age = 27,
    job = "aspiring software developer";
    document.getElementById("info").innerHTML = "My name is " + firstName + " " + lastName + ", I am " + age + ", and I am an " + job + ".";
}

function car_description() {
let car = {                     //This method is the decription function
    make: "Dodge ",
    model: "Viper ",
    year: "2021 ",
    color: "red ",
    description: function() {
        return "The car is a " + this.year + this.color + this.make + this.model;
    }
};
document.getElementById("Car").innerHTML = car.description();
}

function break_Statement() {            //Using a loop with a break statement
    let text = "";
        for (let i = 0; i < 10; i++) {
        if (i === 4) { break; }
        text += "The number is " + i + "<br>";
        }
    document.getElementById("break").innerHTML = text;
}

function continue_Statement() {        //Using a loop with a continue statement
    let text = "";
    for (let i = 0; i < 10; i++) {
        if (i === 6) { continue; }
        text += "The number is " + i + "<br>";
        };
    document.getElementById("continue").innerHTML = text;
}