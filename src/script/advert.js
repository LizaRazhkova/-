document.addEventListener("DOMContentLoaded", () => {
  var but1 = document.getElementById("all");
  var but2 = document.getElementById("buy");
  var but3 = document.getElementById("sell");

  but2.addEventListener("click", function() {
    let matches = document.querySelectorAll("div.box > div.block1");
    for (var i = 0; i < matches.length; i++) {
      matches[i].style.display = "none";
    }
    let element = document.querySelectorAll("div.box > div.block2");
    for (var i = 0; i < element.length; i++) {
      element[i].style.display = "flex";
    }
  });

  but1.addEventListener("click", function() {
    let elem = document.querySelectorAll("div.box > div.contanier");
    for (var i = 0; i < elem.length; i++) {
      elem[i].style.display = "flex";
    }
  });
  but3.addEventListener("click", function() {
    let element = document.querySelectorAll("div.box > div.block2");
    for (var i = 0; i < element.length; i++) {
      element[i].style.display = "none";
    }
    let matches = document.querySelectorAll("div.box > div.block1");
    for (var i = 0; i < matches.length; i++) {
      matches[i].style.display = "flex";
    }
  });
});
