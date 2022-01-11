function thangNam() {
  var thang = document.getElementById("month").value * 1;
  var nam = document.getElementById("year").value * 1;

  switch (thang) {
    case 1:
      document.getElementById("result").innerText = "thang nay co 31 ngay";
      break;
    case 2:
      if ((nam % 4 == 0 && nam % 100 != 0) || nam % 400 == 0) {
        document.getElementById("result").innerText = "thang nay co 29 ngay";
      } else {
        document.getElementById("result").innerText = "thang nay co 28 ngay";
      }
      break;
    case 3:
      document.getElementById("result").innerText = "thang nay co 31 ngay";
      break;
    case 4:
      document.getElementById("result").innerText = "thang nay co 30 ngay";
      break;
    case 5:
      document.getElementById("result").innerText = "thang nay co 31 ngay";
      break;
    case 6:
      document.getElementById("result").innerText = "thang nay co 30 ngay";
      break;
    case 7:
      document.getElementById("result").innerText = "thang nay co 31 ngay";
      break;
    case 8:
      document.getElementById("result").innerText = "thang nay co 31 ngay";
      break;
    case 9:
      document.getElementById("result").innerText = "thang nay co 30 ngay";
      break;
    case 10:
      document.getElementById("result").innerText = "thang nay co 31 ngay";
      break;
    case 11:
      document.getElementById("result").innerText = "thang nay co 30 ngay";
      break;
    case 12:
      document.getElementById("result").innerText = "thang nay co 30 ngay";
      break;
    default:
      document.getElementById("result").innerText = "nhap lai";
      break;
  }
}
