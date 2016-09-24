/**
 * Created by alex on 9/23/16.
 */
$(document).ready(function(){
   $('#submit').click(contact);
});


function contact(event){

    event.preventDefault();

    var contactus = {
        'name': $('#name').val(),
        'email': $('#email').val(),
        'message': $('#message').val()
    };

// Use AJAX to post
    $.ajax({
        type: 'POST',
        data: contactus,
        url: '/contact',
        dataType: 'JSON'
    });
}
