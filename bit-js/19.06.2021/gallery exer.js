var gallery = $('<div>');
$('body').prepend(gallery);

var imageArray = ['https://via.placeholder.com/300.jpg', 'https://via.placeholder.com/200.jpg', 'https://via.placeholder.com/400.jpg', 'https://via.placeholder.com/100.jpg'];

imageArray.forEach(function(item){
    var image = $("<img>");
    image.attr('src', item);
    $('div').prepend(image);
    
});

$("img").each(function( index, element ) {
    $(element).css( {
            'width' : rand(400) + 'px',
            'height' : rand(600) + 'px'
         });
    
    });
$("img").each(function( index, element ){
    if(element.width > 200){
        $(element).css('border','1px solid white');
    } else {
        $(element).css('border','4px solid green');
        
    }
});


    
function rand(max) {
    return Math.floor(Math.random() * max);
  };
