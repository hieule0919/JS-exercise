function tinhNgayThangNam() {

    var dayValue=document.getElementById("day").value*1;
    var monthValue= document.getElementById("month").value*1;
    var yearValue = document.getElementById("year").value*1;
    
    var dayBefore = dayValue - 1 ;
    var dayAfter = dayValue + 1;

    document.getElementById("result").innerText = "ngay, thang, nam tiep theo sau la :" + dayAfter + monthValue + yearValue ;
    document.getElementById("result1").innerText = "ngay, thang, nam truoc do la :"+  dayBefore + monthValue + yearValue ;


}