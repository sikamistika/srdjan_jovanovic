function concatenate (string, n){
    var newString = ''
    for (i=1; i<=n; i++){
        newString += string
    }
    return newString
}
    result = concatenate ('sima', 3)

    console.log(result)