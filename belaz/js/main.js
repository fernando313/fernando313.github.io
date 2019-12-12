$(document).ready(function () {
    $('button#closed').click(function () {
        $(this).parents(".modal-li").removeClass('active');
        $('span.text').removeClass('active');
    });
    
    
    $('span.text').click(function() {
        let liData = $(this).data('li');
        let answer = $('.modal-li[data-li="' + liData + '"]');
        
        $('.modal-li.active').removeClass('active');
        answer.addClass('active');
        $(this).addClass('active');
    });

    
   
    
});
    
 