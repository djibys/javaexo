var a = parseInt(prompt("donner votre age "));
var mult = 0;
for (var i = 1, c = a + 1; i < c; i++) {
  mult = mult + i + 100 + i * 2;
}
prompt(" solde compte =" + mult);
