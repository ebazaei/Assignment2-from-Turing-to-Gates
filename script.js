$(document).ready(function(){

    $('img').click(function(e){
        e.preventDefault();
        
        $(this).attr('src',$(this).attr('alt-pic'));                
        
    })
    
})