function calcTip(){
    var subTotalElem = document.getElementById('subtotal');
    var tipElem = document.getElementById('tip');
    if(subTotalElem.value === ""){
        alert('Enter the total amount');
    }
    
   
    else{
        var totalElem = document.getElementById("total");
        var tipValue = (subTotalElem.value * tipElem.value)/100;
        totalElem.innerHTML = '$' + (parseInt(subTotalElem.value) + tipValue);
    }
}