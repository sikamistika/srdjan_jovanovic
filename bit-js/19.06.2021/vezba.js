function listManipulation (){
    $('ul').before('<p>Lista</p>');
    $('li.active').prepend('Dan ');
    $('li.active').append('.');
    $('li.active').after('<li>Cetbrti</li>');


    $('li.active').attr('id', 'active-item');


    $('li.last').addClass('active');


    $('li.last').addClass('active');
    $('li.last').removeClass('active');


    $('li').each(function(index, element){
        console.log(index);
        if($(element).is('#active-item')){
            $(element).css({'background-color':'yellow', 'color':'green'});
    })
}



