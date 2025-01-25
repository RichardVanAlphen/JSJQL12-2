$(document).ready(function(){
    $('#btnLoad').on('click',function(){
        $.ajax({
            url: 'content12-2.html',
            success: function(data) {
                $('#divResult').html(data);
                alert('Bestand is geladen.');
            },
            error: function() {
                alert('Fout: Er is iets mis gegaan!');
            }
        });
    });
});
