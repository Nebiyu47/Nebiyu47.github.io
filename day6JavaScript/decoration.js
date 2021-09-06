window.onload = function(){
    document.getElementById("bigger").onclick = fontTimer
    document.getElementById("blingBox").onchange = checkBoxHandler
    document.getElementById("malkovichBtn").onclick = malkcheckHandler
    document.getElementById("IgpayBtn").onclick = piggify
};

function fontTimer(){
    setInterval(btnHandler,500);
}

var iterations = 5;

function btnHandler(){
    if(iterations>0){
        var txtArea = document.getElementById("txttt");
        var style = window.getComputedStyle(txtArea,null).getPropertyValue('font-size');
        var fontSize = parseInt(style) +2;
        document.getElementById("txttt").style.fontSize = fontSize+ "pt";
        iterations--;
    }
    else{
        clearInterval(timer)
    }
}

function checkBoxHandler(){
    var page = document.getElementById("page");
    var txtArea = document.getElementById("txttt");
    var checkBox = document.getElementById("blingBox");
    if(checkBox.checked === true){
        txtArea.style.fontWeight = "bold";
        txtArea.style.color = "green";
        txtArea.style.textDecoration = "underline";
        page.style.backgroundImage = url("1000x-1.jpeg");
    }
    else{
        txtArea.style.fontWeight = "normal";
        txtArea.style.color="";
        txtArea.style.textDecoration = "none";
        page.style.backgroundImage = "";
    }
}

function malkcheckHandler(){
    var txtinput = document.getElementById("txttt");
    var text=txtinput.value.trim();
    var result='';
    if(text.length>0){
        var words=text.split(" ");
        for(let i=0;i<words.length;i++){
            let w=words[i].trim();
            if(w.length>=5){
                result+="Malkovich"+ " ";
            }else{
                result+=w+ " ";
                
            }
        }
        txtinput.value=result;
        
    }
}

function piggify(){
    var txtinput = document.getElementById("txttt");
    var text=txtinput.value.trim();
    var result='';
    if(text.length>0){
        var words=text.split(" ");
        for(let i=0;i<words.length;i++){
            let w=words[i].trim();
            let tempw=translatePigLatin(w);
            result+=tempw+" ";
        }
        txtinput.value=result;
        
    }
}

function firstIsVowel(s) {
    return ['a', 'e', 'i', 'o', 'u'].indexOf(s[0].toLowerCase()) !== -1
}

function translatePigLatin(str) {
    let vowels = ['a', 'e', 'i', 'o', 'u'];
    let newStr = "";

    if (vowels.indexOf(str[0]) > -1) {
        newStr = str + "ay";
        return newStr;
    } else {
        let firstMatch = str.match(/[aeiou]/g) || 0;
        let vowel = str.indexOf(firstMatch[0]);
        newStr = str.substring(vowel) + str.substring(0, vowel) + "ay";
        return newStr;
    }
}