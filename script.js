var Fname = createlabel("label", "for", "Fname", "First Name");
var br1 = linebreak("br");
var inputFname = inputfield("input", "type", "name", "id", "First Name")
var br2 = linebreak("br");

var Lname = createlabel("label", "for", "Lname", "Last Name");
var br3 = linebreak("br");
var inputLname = inputfield("input", "type", "name", "id", "Last Name");
var br4 = linebreak("br");

var Email = createlabel("label", "for", "Email ID", "Email ID");
var br5 = linebreak("br");
var inputEmail = inputfield("input", "type", "Email", "id", "Email ID");
var br6 = linebreak("br");

var Phonenumber = createlabel("label", "for", "number", "Phone Number");
var br7 = linebreak("br");
var inputPhonenumber = inputfield("input", "type", "number", "id", "Phonenumber");
var br8 = linebreak("br");

document.body.append(Fname, br1, inputFname, br2, Lname, br3, inputLname, br4, Email, br5, inputEmail, br6, Phonenumber, br7, inputPhonenumber, br8);


function createlabel(tagname, atbname, atbvalue, content) {
    var element = document.createElement(tagname);
    element.setAttribute(atbname, atbvalue);
    element.innerHTML = content;
    return element;

}
function inputfield(tagname, atbname, atbvalue, atbname1, atbvalue1) {
    var input = document.createElement(tagname);
    input.setAttribute(atbname, atbvalue);
    input.setAttribute(atbname1, atbvalue1);
    return input;
}

function linebreak(breaker) {
    var breaker=document.createElement(breaker);
    return breaker;
}

// <label for="First Name">First Name</label><br>
// <input type="text" name="" id="First Name"><br>