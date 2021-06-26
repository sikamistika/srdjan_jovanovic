var newXHR = new XMLHttpRequest();
newXHR.open( 'GET', 'http:www.geoplugin.net/xml.gp?ip=89.216.149.183'
);

newXHR.onload = function(event) {
    if (newXHR.status === 200) {
        var response = newXHR.responseXML;
        var countryname = response.querySelector('geoplugin_countryname').textContent;
        $('body').on('click', function(){
            $(this).append(countryname);
        })
    console.log(newXHR.responseText);
    }
    }

newXHR.send();

        

