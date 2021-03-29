function digits(a){
    if(a<99 && a<=999){
        return 'number has three digits'
    }else return 'number does not have three digits'
}
var result=digits(555);
console.log(result);