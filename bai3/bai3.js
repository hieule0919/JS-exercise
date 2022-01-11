function chanLe(){

    var number1Value = document.getElementById("number1").value*1;
    var number2Value = document.getElementById("number2").value*1;
    var number3Value = document.getElementById("number3").value*1;

    var soChan = 0;
    var soLe = 0;

    if(number1Value % 2 == 0){
        soChan += 1;
        

    } else {
        soLe +=1;
        
    }

    if (number2Value % 2 == 0) {
        soChan += 1;
        

    } else {
        soLe += 1;
        
        
    }
    if (number3Value % 2 == 0) {
        soChan += 1;
        

    } else {
        soLe += 1;
        

    }
    

    document.getElementById("result").innerText = "so luong so chan la: "+ soChan ;
    document.getElementById("result1").innerText = "so luong so le la: "+ soLe ;


}