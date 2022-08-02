function addition_Function() {          //Created an addition function
    var addition = 2 + 2;
    document.getElementById("Add").innerHTML = "2 + 2 = " + addition;
}

function subtraction_Function() {       //Created a subtraction function
    var subtraction = 5 - 2;
    document.getElementById("Sub").innerHTML = "5 - 2 = " + subtraction;
}

function multiplication() {             //Created a multiplication function
    var simple_Math = 6 * 8;
    document.getElementById("Multiply").innerHTML = "6 * 8 = " + simple_Math;
}

function division() {                   //Created a division function
    var simple_Math = 48 / 6;
    document.getElementById("Divide").innerHTML = "48 / 6 = " + simple_Math;
}

function more_Math() {                  //Created a function that does multiple math problems step by step
    var simple_Math = (1 + 2) * 10 / 2 - 5;
    document.getElementById("Math").innerHTML = "1 plus 2, multiplied by 10, divided in half and then subtracted by 5 equals " + simple_Math;
}

function modulus_Operator() {           //Created a function that gives me a remainder of an answer for a math problem
    var simple_Math = 25 % 6;
    document.getElementById("Remainder").innerHTML = "When you divide 25 by 6 you have a remainder of: " + simple_Math;
}

function negation_Operator() {          //Created a negation function that returns the opposite or negative form of something
    var x = 10;
    document.getElementById("Negation").innerHTML = -x;
}


var Y = 5;          //Created an Increment operator
Y++;
document.writeln(Y);


var Z = 5.25;       //Created a Decrement operator
Z--;
document.writeln(Z);

window.alert(Math.random());    // Return a random number between 0 and 1

window.alert(Math.random() * 100);  // Return a random number between 0 and 100

document.writeln(Math.round(1345.516646123135)); // Rounding a decimal to its nearest number