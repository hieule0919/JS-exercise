function tinhTamGiac(){
    var a = document.getElementById("number1").value*1;
    var b = document.getElementById("number2").value*1;
    var c = document.getElementById("number3").value*1;

    
    

    if (( a == b ) && (b == c ) && (a==c)) {
        console.log("day la tam giac deu");
        document.getElementById("result").innerText = "day la tam giac deu";
    } 
    
     else if ( a == b || a == c || b == c ) {
        console.log("day la tam giac can");
        document.getElementById("result").innerText = "day la tam giac can";
        
    }

    else if (a*a + b*b == c*c || a*a + c*c == b*b || b*b + c*c == a*a) {
        console.log("day la tam giac vuong");
        document.getElementById("result").innerText = "day la tam giac vuong"

    }

    

}