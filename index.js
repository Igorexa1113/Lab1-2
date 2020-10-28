function square_equation() {
  var a = document.square.square_a.value;
  var b = document.square.square_b.value;
  var c = document.square.square_c.value;
  var L;
  var d = b * b - 4 * a * c;

  if (d < 0) {
    L = "пара комплексно-сопряженных корней x1 = ";
    L += -b / (2 * a);
    L += ", ";
    L += Math.sqrt(-d) / (2 * a);
    L += "x2 = ";
    L += -b / (2 * a);
    L += ", ";
    L += -Math.sqrt(-d) / (2 * a);
    L += ".";
  } else {
    if (d === 0) {
      L = "два одинаковых вещественных корня:x1= x2= ";
      L += -b / (2 * a);
      L += ".";
    } else {
      L = "два различных вещественных корня:x1= ";
      L += -b / (2 * a) - Math.sqrt(d) / (2 * a);
      L += "x2= ";
      L += -b / (2 * a) + Math.sqrt(d) / (2 * a);
      L += ".";
    }
  }
  if (a === 0 || b === 0) {
    alert("Введен неправельный кофффициент");
  } else {
    alert(L);
  }
}
