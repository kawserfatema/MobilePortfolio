function button_clicked() {
    var txt = " You selected : " + $('input:radio[name=radio-choice-1]:checked').val();
    $('#popupDialog').text(txt);
    $('#popupDialog').popup('open');
}

function write_xml() {
    
}