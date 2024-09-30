$(document).ready(function(){
    $('#btnLoad').on('click',function(){
        $.ajax({
            url: 'content12-2.html',
            success: function(data) {
                $('#divResult').html(data);
            },
            error: function() {
                alert('Fout: Er is iets mis gegaan!');
            }
        });
    });
});
