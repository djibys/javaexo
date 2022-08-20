var a;
while (a > 20 && a < 10);
{
  a = parseInt(prompt("donner un variable a"));
  if (a < 10) {
    alert("plus grand :)");
    a = parseInt(prompt("donner un variable a"));
  } else if (a > 20) {
    alert("plus petit :)");
    a = parseInt(prompt("donner un variable a"));
  } else {
    varfin = a;
  }
}

alert(varfin);
