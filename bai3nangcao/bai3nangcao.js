function docSo() {
  var so = document.getElementById("number").value * 1;

  var soHangDonVi = so % 10;
  var soHangChuc = (so / 10) % 10;
  var soHangTram = so / 100;

  if (so < 100 || so > 999) {
    document.getElementById("result").innerText = "nhap lai";
  } else {
    switch (soHangTram) {
      case 1:
        document.getElementById("result").innerText = "mot tram";
        break;
      case 2:
        document.getElementById("result").innerText = "hai tram";
        break;
      case 3:
        document.getElementById("result").innerText = "ba tram";
        break;
      case 4:
        document.getElementById("result").innerText = "bon tram";
        break;
      case 5:
        document.getElementById("result").innerText = "nam tram";
        break;
      case 6:
        document.getElementById("result").innerText = "sau tram";
        break;
      case 7:
        document.getElementById("result").innerText = "bay tram";
        break;
      case 8:
        document.getElementById("result").innerText = "tam tram";
        break;
      case 9:
        document.getElementById("result").innerText = "chin tram";
        break;

      default:
        break;
    }
    if (soHangChuc % 10 == 0 && soHangDonVi != 0) {
      document.getElementById("result").innerText = "le";
    } else {
      switch (soHangChuc) {
        case 1:
          document.getElementById("result").innerText = "muoi";
          break;
        case 2:
          document.getElementById("result").innerText = "hai muoi";
          break;
        case 3:
          document.getElementById("result").innerText = "ba muoi";
          break;
        case 4:
          document.getElementById("result").innerText = "bon muoi";
          break;
        case 5:
          document.getElementById("result").innerText = "nam muoi";
          break;
        case 6:
          document.getElementById("result").innerText = "sau muoi";
          break;
        case 7:
          document.getElementById("result").innerText = "bay muoi";
          break;
        case 8:
          document.getElementById("result").innerText = "tam muoi";
          break;
        case 9:
          document.getElementById("result").innerText = "chin muoi";
          break;

        default:
          break;
      }
    }
    switch (soHangDonVi) {
      case 1:
        document.getElementById("result").innerText = "mot";
        break;
      case 2:
        document.getElementById("result").innerText = "hai";
        break;
      case 3:
        document.getElementById("result").innerText = "ba";
        break;
      case 4:
        document.getElementById("result").innerText = "bon";
        break;
      case 5:
        document.getElementById("result").innerText = "nam";
        break;
      case 6:
        document.getElementById("result").innerText = "sau";
        break;
      case 7:
        document.getElementById("result").innerText = "bay";
        break;
      case 8:
        document.getElementById("result").innerText = "tam";
        break;
      case 9:
        document.getElementById("result").innerText = "chin";
        break;

      default:
        break;
    }
  }
}
