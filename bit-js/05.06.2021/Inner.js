// InnerHTML Do the following exercise in two ways: using DOM manipulation
// methods and using innerHTML. Create a function that is used for building a
// dropdown/select element. It first builds a dropdown and then adds it to the
// DOM. The function takes two arguments: the first is an array of strings and
// the second is a DOM node to which the dropdown will be added. Create options
// that correspond to items in the passed array and add them to the select
// element. Add the whole dropdown list to DOM .
​
// Use this function to create two selects on the page. The first select should
// be appended to the first div on the page. The second select should be
// appended to the last div on the page.
​
document.addEventListener("DOMContentLoaded", function () {
    var select = document.createElement("select");
    var attrs = select.attributes
    console.log(attrs)
})
​
function textCreateDropdownSelect() {
    var choices = ["choice1", "choice2", "choice3"];
    var parent = document.querySelector("#form1");
    createDropdownSelect(choices, parent);
}
​
/**
 * 
 * @param {array} choices string array
 * @param {*} node The node to which the select element will be appended
 */
function createDropdownSelect(choices, node) {
    var select = document.createElement("select");
    var nChoices = choices.length;
    for (var i = 0; i < nChoices; i++) {
        var option = document.createElement("option");
        var text = document.createTextNode(choices[i]);
        option.appendChild(text);
        select.appendChild(option);
    }
    node.appendChild(select);
}
​
function testCreateDropdownSelect_v2() {
    var choices = ["choice1", "choice2", "choice3"];
    var parent = document.querySelector("#form1");
    createDropdownSelect_v2(choices, parent);
}
​
function createDropdownSelect_v2(choices, node) {
    var select = document.createElement("select");
    select.setAttribute("id", "selectList");
    for (var i = 0; i < choices.length; i++) {
        var option = document.createElement("option");
        option.setAttribute("value", choices[i]);
        var text = document.createTextNode(choices[i]);
        option.appendChild(text);
        select.appendChild(option);
    }
    node.appendChild(select);
}
​
function createDropdownSelect_v2_withRandVals() {
    var choices = ["item1", "item2", "item3"];
    var parent = document.querySelector(".div2");
    createDropdownSelect_v2(choices, parent);
}
​
function createDropdownSelectUsingInnerHTML(choices, node) {
    var rawInnerHTML = [];
    
}