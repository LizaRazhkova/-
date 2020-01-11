function OpenModalWindow() {
  let block = document.querySelector(".pict");
  while (block.firstChild) {
    block.removeChild(block.firstChild);
  }
  let modal = document.getElementById("myModal");
  let span = document.getElementsByClassName("close");
  let blur = document.getElementById("blur");
  let body = document.body;

  modal.style.display = "flex";
  blur.style.filter = "blur(5px)";
  body.style.overflow = "hidden";
  modal.style.overflow = "hidden";

  span[0].addEventListener("click", function() {
    modal.style.display = "none";
    blur.style.filter = "blur(0px)";
    body.style.overflow = "visible";
  });
  window.addEventListener("click", function(event) {
    // console.log(event);
    if (event.target == modal) {
      modal.style.display = "none";
      blur.style.filter = "blur(0px)";
      body.style.overflow = "visible";
    }
  });
}

function AddFromXML(number) {
  if (window.XMLHttpRequest) {
    // для IE7+, Firefox, Chrome, Opera, Safari
    var xmlhttp = new XMLHttpRequest();
  } else {
    // для IE6, IE5
    xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
  }
  xmlhttp.open("GET", "test.xml", false);
  xmlhttp.send();
  let xmlDoc = xmlhttp.responseXML;
  document.querySelector(".fio h3").innerHTML = xmlDoc.getElementsByTagName(
    "name" + number
  )[0].childNodes[0].nodeValue;

  document.querySelector(".text .info").innerHTML = xmlDoc.getElementsByTagName(
    "info" + number
  )[0].childNodes[0].nodeValue;

  document.querySelector(
    ".direction_work"
  ).innerHTML = xmlDoc.getElementsByTagName(
    "direction_work" + number
  )[0].childNodes[0].nodeValue;

  let img = new Image();
  img.src = "/src/img/" + number + ".svg";
  document.querySelector(".pict").appendChild(img);
}

document.addEventListener("DOMContentLoaded", () => {
  let btn_1 = document.getElementById("click_1");
  let btn_2 = document.getElementById("click_2");
  let btn_3 = document.getElementById("click_3");
  let btn_4 = document.getElementById("click_4");
  let btn_5 = document.getElementById("click_5");
  let btn_6 = document.getElementById("click_6");

  btn_1.addEventListener("click", () => {
    OpenModalWindow();
    AddFromXML(1);
  });
  btn_2.addEventListener("click", () => {
    OpenModalWindow();
    AddFromXML(2);
  });
  btn_3.addEventListener("click", () => {
    OpenModalWindow();
    AddFromXML(3);
  });
  btn_4.addEventListener("click", () => {
    OpenModalWindow();
    AddFromXML(4);
  });
  btn_5.addEventListener("click", () => {
    OpenModalWindow();
    AddFromXML(5);
  });
  btn_6.addEventListener("click", () => {
    OpenModalWindow();
    AddFromXML(6);
  });
});
document.addEventListener("DOMContentLoaded", () => {
  var but1 = document.getElementById("send");
  but1.addEventListener("click", () => {
    alert("Возникла ошибка");
  });
});
