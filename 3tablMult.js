var a = parseInt(prompt("donner un  nombre entre 1 et 10"));
var mult;
for (var i = 1, c = 11; i < c; i++) {
  mult = i * a;
  prompt(a + "x " + i + "=" + mult);
}
