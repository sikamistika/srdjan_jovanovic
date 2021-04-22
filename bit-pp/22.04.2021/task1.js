function outer (param) {
    function inner (theInput){

        return theInput * 2
    }
    return 'The result is ' + inner(param);


}

console.log(outer(2))



function sumOfEven (){
    var sum = 0;
    for (i=0; i<=100; i++){
        if(i%2 === 0){
          sum += i ;

        }
    }
   

        return sum;

}
    var result = sumOfEven ()
    console.log(result)