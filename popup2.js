var homepage = "http://zatch10.github.io./"
var source = sessionStorage.getItem('source');
var campaign = sessionStorage.getItem('Campaign');

var popup = source + '_'  + campaign + ".html";

$(document).ready(function(){
    $('#content').load(popup);
 });

 window.onload = function(){
    document.getElementById('close').onclick = function(){
        this.parentNode.parentNode.parentNode
        .removeChild(this.parentNode.parentNode);
        return false;
    };
};

// function close(){
//     $("div").remove('#content')
//}


