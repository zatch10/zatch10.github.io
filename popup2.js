var homepage = "http://zatch10.github.io./"
var source = sessionStorage.getItem('source');
var campaign = sessionStorage.getItem('Campaign');

var popup = source + '_'  + campaign + ".html";

$(document).ready(function(){
    $('#content').load(popup);
 });

// function close(){
//     $("div").remove('#content')
}


