function Ride_Function () {
    var Height, Can_ride;
    Height = document.getElementById("Height").value;
    Can_ride = (Height < 52) ? "You are too short":"You are tall enough";
    document.getElementById("Ride").innerHTML = Can_ride + " to ride.";
}

function Voting_age () {
    var Age, Can_vote;          //"var" is a keyword we use to assign new variables
    Age = document.getElementById("Age").value;
    Can_vote = (Age > 17) ? "You can":"You are not old enough to";
    document.getElementById("Vote").innerHTML = Can_vote + " vote!";
}

function Vehicle(Make, Model, Year, Color) {  //The function "Vehicle()" is an object constructor
    this.Vehicle_Make = Make;           //The “this” keyword gets the values of the newly created car object with the use of the “new” keyword.
    this.Vehicle_Model = Model;         //This is useful when you want to create objects 
    this.Vehicle_Year = Year;           //The “this” keyword allows you to essentially create a placeholder of undetermined values until the new object is created from the object constructor.
    this.Vehicle_Color = Color;
}

var Jack = new Vehicle("Dodge", "Viper", 2020, "Red");  //"new" is a keyword which is used to assign new objects
var Emily = new Vehicle("Jeep", "Trail Hawk", 2019, "White and Black"); //the "new" keyword is used to create new objects of the Vehicle function in this instance
var Erik = new Vehicle("Ford", "Pinto", 1971, "Mustard");

function myFunction() {
    document.getElementById("Keywords_and_Constructors").innerHTML =
    "Erik drives a " + Erik.Vehicle_Color + "-colored " + Erik.Vehicle_Model +
    " manufactured in " + Erik.Vehicle_Year;
}

function testFunction() {           //New keyword assignment
    document.getElementById("New_and_This").innerHTML = "This is all new to me and I am loving learning this stuff."
}

function Nested_Function() {
    document.getElementById("Counting").innerHTML = Count();
    function Count () {
        var Starting_point = 9;
        function Plus_one() {Starting_point += 1;} //The Plus_one is a nested function
        Plus_one();
        return Starting_point;
    }
}