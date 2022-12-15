function funcao1()
{
var x;
var r=confirm("Tem certeza? Se o seu celular explodir não vai ser minha culpa");
if (r==true)
  {
  x="você pressionou OK!";
  }
else
  {
  x="Você pressionou Cancelar!";
  }
document.getElementById("demo").innerHTML=x;
}