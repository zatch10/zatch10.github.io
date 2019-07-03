var homepage = "http://zatch10.github.io./"
var source = sessionStorage.getItem('source');
var campaign = sessionStorage.getItem('Campaign');
var page = document.getElementsByTagName("title")[0].innerHTML;

var popup = source + '_'  + campaign + ".html";

$(document).ready(function(){
    $('#content').load(popup);
 });

function close(){
    $("div").remove('#content')
}

// popupWindow = window.open(
//     popup,'popUpWindow','height=300,width=400,left=10,top=10,resizable=yes,scrollbars=yes,toolbar=yes,menubar=no,location=no,directories=no,status=yes')

