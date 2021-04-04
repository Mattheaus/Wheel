function letsSpin() {

  var x = 1024; //min value
  var y = 9999; //max value

  var deg = Math.floor(Math.random() * (x - y)) + y;

  document.getElementById('wheel').style.transform = "rotate(" + deg + "deg)";

}

function makeWheel() {
  var words, list, amount, A, a, ax, ay, b, bx, by, c, cx, cy;
  list = document.getElementsByTagName("span");
  words = document.getElementsByTagName("p");
  amount = list.length;
  if (amount > 2) {
    A = 2 * Math.PI / amount;
    a = Math.sqrt(2 * (250 ** 2) - 2 * (250 ** 2) * Math.cos(A));
    b = 250;
    c = 250;
    bx = 250;
    by = 250;
    ax = 0;
    ay = 250;

    for (var i = 0; i < amount; i++) {
      //calcualte point c
      //unit vector
      uBAx = (ax - bx) / a;
      uBAy = (ay - by) / a;

      //rotated vector
      uBCx = uBAx * Math.cos(A) - uBAy * Math.sin(A);
      uBCy = uBAx * Math.sin(A) + uBAy * Math.cos(A);

      //B position uses length of edge
      cx = bx + a * uBCx;
      cy = by + a * uBCy;
      //change elemt
      list[i].style.clipPath = "polygon(" + ax + "px " + ay + "px, " + bx + "px " + by + "px, " + cx + "px " + cy + "px)";
      list[i].style.backgroundColor = "#" + ((1 << 24) * Math.random() | 0).toString(16);
      words[i].style.transform = "rotate(" + (A * (i) * (360 / (2 * Math.PI))) + "deg)";
      words[i].style.left = (ax + 1.1 * cx + 250) / 3 + "px";
      words[i].style.top = (ay + 1.1 * cy + 250) / 3 + "px";
      //redefine initials
      ax = cx;
      ay = cy;
    }
  } else {
    list[0].style.clipPath = "polygon(" + 0 + "px " + 250 + "px, " + 250 + "px " + 0 + "px, " + 500 + "px " + 250 + "px)";
    list[0].style.backgroundColor = "#" + ((1 << 24) * Math.random() | 0).toString(16);
    words[0].style.transform = "rotate(" + (A * (i) * (360 / (2 * Math.PI))) + "deg)";
    words[0].style.left = (ax + 1.1 * cx + 250) / 3 + "px";
    words[0].style.top = (ay + 1.1 * cy + 250) / 3 + "px";
    list[1].style.clipPath = "polygon(" + 0 + "px " + 250 + "px, " + 250 + "px " + 500 + "px, " + 500 + "px " + 250 + "px)";
    list[1].style.backgroundColor = "#" + ((1 << 24) * Math.random() | 0).toString(16);
    words[1].style.transform = "rotate(" + (A * (i) * (360 / (2 * Math.PI))) + "deg)";
    words[1].style.left = (ax + 1.1 * cx + 250) / 3 + "px";
    words[1].style.top = (ay + 1.1 * cy + 250) / 3 + "px";
  }

}

function remove(el) {
  var element = el;
  element.remove();
  makeWheel();
}

window.onload = (event) => {
  makeWheel();
};