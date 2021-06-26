// Access/Update Text Node
// Create an unordered list containing < li > items that
// represent navigation. Create a function that takes text from one of the <li>
// elements and presents it on screen using alert. Create one more function. The
// function should take some text as an argument. The function should select the
// last <li> element in the list and replace its text with text passed as the
// function argument.
​
document.addEventListener("DOMContentLoaded", function () {
    var li3TxtNode = document.documentElement.children[1].children[0].children[0].children[2].childNodes;
    console.log(li3TxtNode);
})
function alertFromList() {
    var li1text = document.documentElement.children[1].children[0].children[0].children[0].textContent;
    // console.log(li1text);
    alertFromTxt(li1text);
}
function alertFromTxt(string) {
    alert(string);
}
function replaceLi3Txt() {
    var lastLi = document.documentElement.children[1].children[0].children[0].children[2];
    // console.log(lastLi);
    replaceElementTxt(lastLi, "new text");
}
function replaceElementTxt(element, newTxt) {
    element.textContent = newTxt;
}