var B = "I am learning JavaScript" ;
window.alert(B);

var sent1 = "This is the beginning of the string" ;
var sent2 = ", and this is the end of the string";
document.write(sent1+sent2);

function My_First_Function() {              //Defining a function and naming it
    var str = "This is the button text!";   //Defining a variable and giving it
                                            //a string value
    document.getElementById("Button_Text") .innerHTML = str;   //Putting the value
}                                           //of the variable into the  HTML elementFromPoint
                                            //with the "Button_Text" id
