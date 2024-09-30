$(document).ready(function(){
    $('#btnLoad').on('click',function(){
        $.ajax({
            url: 'content12-2.html',
            success: function(data) { // Veranderd 'succes' naar 'success'
                console.log('Success:', data);
            },
            error: function() {
                console.log('Fout: Er is iets mis gegaan!');
            },
            complete: function() {
                console.log('Complete');
            }
        });
    });
});