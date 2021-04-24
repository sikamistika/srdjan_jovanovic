
var year = 2021;


function vacationStartDate (day, month){
    var date;

    date = day + '.' + month + '.' + year + '.' ;
    return date;
}

var startDate=vacationStartDate (5, 7);
console.log(startDate);
