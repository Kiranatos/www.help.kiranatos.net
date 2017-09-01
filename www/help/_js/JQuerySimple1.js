$(document).ready(function(){
    var a = $('img[id=img01]');
    a.hide(3000).show(3000);
    var b = $('img[id=img02]');
    b.fadeOut(3000).fadeIn(3000);
    var c = $('img[id=img03]');
    c.fadeTo(3000, 0.3).fadeTo(3000, 1);
    var d = $('img[id=img04]');
    d.slideUp(3000).slideDown(3000);

    var e = $('img[id=img05]');
    if (!($.isEmptyObject(e))){
        function change(e){
            e.attr('height', 100);            
            $('#divSample5').text("Высота рисунка после изменения методом .attr('height', 100) : " + e.attr('height'));
        }
        function del(e){            
            e.removeAttr('height');            
            $('#divSample6').text("Атрибут height удалён! Метод .removeAttr('height') : " + e.attr('height'));
        }
        $('#divSample4').text("Высота рисунка до изменения методом .attr('height') : " + $('img[id=img05]').attr('height'));
        var f1 = setInterval(change(e), 3000);        
        var f2 = setInterval(del(e), 4000);        
    }    
    
    var f = $('#textSimple');
    if (!($.isEmptyObject(f))){
        f.before('<p style="color: #DB76ED">Данный абзац вставлен с помощью метода before()</p>');
        f.after('<p style="color: #DB76ED">Данный абзац вставлен с помощью метода after()</p>');
        f.prepend('<p style="color: #DB76ED">Данный абзац вставлен с помощью метода prepend()</p>');
        f.append('<p style="color: #DB76ED">Данный абзац вставлен с помощью метода append()</p>');
    }    
        
    $('input[name="buttonEx"]').click( function( ) {
        alert('Вы кликнули по кнопке... Как Вы могли? Мы Вам так верили... ="(( ');
    });
    
    $('#divImg1').click(function(){
        var g = $(this).clone();
        $('#divImg2').append(g);
    });
    
});


