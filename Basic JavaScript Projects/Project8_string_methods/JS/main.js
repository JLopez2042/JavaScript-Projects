function full_Sentence() {              //Setting a full_Sentence function using Concatenate
    var part_1 = "I have ";
    var part_2 = "made this ";
    var part_3 = "into a complete ";
    var part_4 = "sentence."
    var whole_sentence = part_1.concat(part_2, part_3, part_4);
    document.getElementById("Concatenate").innerHTML = whole_sentence
}

function slice_Method() {               //Using the slice method to return a specific range of values
    var Sentence = "All work and no play makes Johnny a dull boy.";
    var Section = Sentence.slice(27,33);
    document.getElementById("Slice").innerHTML = Section;
}

function Upper_Case() {                 //Using the upper case method to make the answer into all caps
    var str = "Here's Johnny!";
    var res = str.toUpperCase();
    document.getElementById("Upper").innerHTML = res;
}

function search_Method() {              //Using the search method to find a specific position of the word im searching for
    let text = "I want a new motorcycle.";
    let position = text.search("new");
    document.getElementById("search").innerHTML = position;
}

function string_Method() {             //Using the string method to make my variable into a string
    var X = 182;
    document.getElementById("Numbers_to_string").innerHTML = X.toString();
}

function precision_Method() {           //Using the precision method to make a numbered variable more precise by rounding
    var X = 12938.3012987376112;
    document.getElementById("Precision").innerHTML = X.toPrecision(10);
}

function fixed_Method() {               //Using the fixed method to round the string to a specified number of decimals
    var X = 3.89056;
    document.getElementById("Fixed").innerHTML = X.toFixed(2);
}

function value_Method() {               //Using the valueOf method to return the relevant Number Object holding the value of the argument passed.
    let text = new String("Good evening!");
    let result = text.valueOf();
    document.getElementById("Value").innerHTML = result;
}