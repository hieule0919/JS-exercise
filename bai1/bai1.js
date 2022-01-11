function soSanh(){
    var number1Value = document.getElementById("number1").value*1;
    var number2Value = document.getElementById("number2").value*1;
    var number3Value = document.getElementById("number3").value*1;
    var maxValue ;

    function swap(a,b){
        maxValue=a;
        a=b;
        b=maxValue;
    }
    

    // if (number1Value > number2Value) {
    //     maxValue = number1Value;
    //     number2Value = number1Value;
    //     maxValue = number2Value;
    // }
    // if (number1Value > number3Value ){
    //     maxValue = number1Value;
    //     number3Value = number1Value;
    //     maxValue = number3Value;
    // }
    // if (number2Value > number3Value) {
    //     maxValue = number2Value;
    //     number3Value = number2Value;
    //     maxValue = number3Value;
    // }
    document.getElementById("result").innerText="sap xep tang dan la: "+number1Value + number2Value + number3Value;
}