// console.log("****");
// console.log("*  *")
// console.log("*  *")
// console.log("****")


function crtajLiniju (size) {
    var ivica ="";
    for (var j=0; j<size; j++){
        ivica +="*"
    }
    console.log(ivica);
}

function crtajPrvuZadnju (size) {
    var prviZadnji="*";
    for (var k=0; k<size-2; k++){
        prviZadnji += " "
    }
    prviZadnji += "*";
    console.log(prviZadnji);

}

function crtajKvadrat (size) {
    for (var i=0; i<size; i++){
        if (i==0){
            crtajLiniju(size);
        } else {
            if (i==size-1){
                crtajLiniju(size);
            } else {
                crtajPrvuZadnju(size);
            }
        }
    }
}


crtajKvadrat(4);

