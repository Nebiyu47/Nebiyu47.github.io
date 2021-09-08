window.onload=function(){
    var starb=document.getElementById("start");
starb.onclick=function(){
    start();
};
var timer =null;
var framescount=0;
var animationArrFrames;
function start(){
    document.getElementById("start").disable=true;
    document.getElementById("select").disable=true;
    document.getElementById("stop").disable=false;
    animationArrFrames=document.getElementById("textarea").value.spilt("===\n");
    if(timer===null){
        if(document.getElementById("turbo").checked){
            timer=setInterval(draw,50);
        }else{
            timer=setInterval(draw,250);
        }
    }
}
}