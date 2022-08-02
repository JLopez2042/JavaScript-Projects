document.writeln(typeof true); //Utilizing a typeof operator
document.writeln("10" + 5)     //Utilizing coercion

function my_Function() {    //Utilizing a function to return NaN
    document.getElementById("Test").innerHTML = 0/0;
}

function my_Function_2() {    //Utilizing a function to return true
    document.getElementById("Test_2").innerHTML = isNaN('This is a string');
}

function my_Function_3() {    //Utilizing a function to false
    document.getElementById("Test_3").innerHTML = isNaN('007');
}

document.writeln(2E310);      //Attempting to display "Infinity"
document.writeln(-2E310);     //Attempting to display "-Infinity"

document.writeln(10>2);       //Example of a Boolean
document.writeln(10<2);       //Example of a Boolean

console.log(10+10);           // The console.log method can be used to display data in the console within the browser.
console.log(66<65);

document.writeln(10 == 10); //The == symbol is used to show that a comparison needs to be made
document.writeln(3 == 11);  // It checks whether the data on the left side of the symbol is equal to the data on the right
                            //It will return either "true" or "false"
X = 10;
Y = 10;
document.writeln(X === Y);  //The === (triple equal sign) symbol is used to show that a comparison should be made.
                            //It checks to see if the data on the left side of the symbol is equal to the data on the right side
A = 82;                     //It will return either "true" or "false"
B = "82";
document.writeln(A === B);

C = "Magnus";
D = "Magnus";
document.writeln(C === D);

E = 86;
F = "Mom";
document.writeln(E === F); 

document.writeln(5 > 2 && 10 > 4);  //Using the AND operator to return true
document.writeln(5 > 10 && 10 > 4); //Using the And operator to return false
document.writeln(5 > 10 || 10 > 4); //Using the OR operator to return true
document.writeln(5 > 10 || 10 > 20);//Using the OR operator to return false

function not_Function() {
    document.getElementById("Not").innerHTML = !(20 > 10); // Using the NOT operator to return false
}

function not_Function_2() {
    document.getElementById("Not_2").innerHTML = !(5 > 10); // Using the NOT operator to return true
}