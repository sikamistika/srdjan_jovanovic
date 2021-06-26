document.addEventListener("DOMContentLoaded", function () {
    // var formChildren = document.getElementById("exerciseForm").children;
    // console.log(formChildren);
    // console.log(formChildren[0].tagName)
    // // document.getElementById("exerciseForm").style.border = "1px solid red"
    // var lastNameInput = formChildren[6];
    // console.log(lastNameInput)
    // console.log(lastNameInput.hasAttribute("required"))
    // console.log(lastNameInput.tagName)
})

function validateForm() {
    var form = document.getElementById("exerciseForm");
    validateRequiredFields(form);
}

function validateRequiredFields(form) {
    var children = form.children;
    for (var i = 0; i < children.length; i++) {
        if (children[i].tagName.toLowerCase() === "input" && children[i].hasAttribute("required")) {
            if (!children[i].getAttribute("value")) {
                children[i].style.border = "1px solid red";
            }
        }
    }
}