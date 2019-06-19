var a=document.getElementById("a");
var b=document.getElementById("b").getAttribute("src");
var c=document.getElementById("c").getAttribute("src");
var images=[a, b, c];
var cur = 0;

function right_click(){
        return right(images, cur);
}

function left_click(){
    return left(images, cur);
}

function right(images, cur){
    var x = images[cur];
    x.style.display = "none";
    if(cur===2){
        cur = 0;
    }
    else{
        cur ++;
    }
    img = images[cur];
    img.style.display = "inline";
}

function left(images, cur){
    var img = images[cur];
    img.style.display = "none";
    if(cur == 0){
        cur = 3;
    }
    else{
        cur --;
    }
    img.style.display = "inline";
}