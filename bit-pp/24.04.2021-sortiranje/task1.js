
//Bubble sort algoritam



a = [2, 3, 1, 9, 7, 103, 65];

function bubbleSort(a){
    for(var j=0; j<a.length; j++){
        for(var i=0; i<a.length; i++){

    var currentElemnt = a[i];
    var nextElement = a[i+1];


    if(currentElemnt> nextElement){
        a[i]=nextElement;
        a[i+1]=currentElemnt;
    }

}

}
return a;
}

console.log(bubbleSort(a));