var X = 10;                             //Start of an example of a global variable
function Add_numbers_1() {
    document.write(20 + X + "<br>");
}
function Add_numbers_2() {
    document.write(X + 100);
}

Add_numbers_1();
Add_numbers_2();                       //End of the example of a global variable

function Add_numbers_3() {             //Start of an example of a local variable
    var A = 10;
    document.write(20 + A + "<br>");
}
function Add_numbers_4() {
    document.write(A + 100);
}

Add_numbers_3();
Add_numbers_4();                       //End of the example of a local variable

function Add_numbers_5() {             //Intentionally wrote a function with an error to debug using the console log
    var B = 10;
    console.log(15 + B);
}
function Add_numbers_6() {
    console.log(B + 100);
}

Add_numbers_5();
Add_numbers_6();                       //End of the intentional error in a function to debug using the console log

function get_Date() {
    if (new Date().getHours() < 18) {           //Created an if statement
        document.getElementById("Greeting").innerHTML = "How are you today?";
    }
}

function Age_Function() {                       //Created an if/else statement
    Age = document.getElementById("Age").value;
    if (Age >= 18) {
        Vote = "You are old enough to vote!";
    } else {
        Vote = "You are not old enough to vote!"
    }
    document.getElementById("How_old_are_you?").innerHTML = Vote;
}

function Time_function() {                      //Created an else/if statement
    var Time = new Date().getHours();
    var Reply;
    if (Time < 12 == Time > 0) {
        Reply = "It is the morning time!";
    }
    else if (Time >= 12 == Time < 18) {
        Reply = "It is the afternoon.";
    }
    else {
        Reply = "It is the evening time.";
    }
    document.getElementById("Time_of_day").innerHTML = Reply;
}