function calcTip() {
	var subtotalElem = document.getElementById('subtotal')
	var tipElem =document.getElementById('tip') 
	var totalElem = document.getElementById('total');
    if(subtotalElem.value==""){
        alert("enter amount")
    }
    else{
        var total=document.getElementById("total");
        var tipvalue=(subtotalElem.value*tipElem.value)/100;
        totalElem.innerHTML='s'+(parseInt(subtotalElem.value)+tipvalue);
    }

}