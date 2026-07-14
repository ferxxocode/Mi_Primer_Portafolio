console.log("Mi primer proyecto funcionando");
const hora = new Date().getHours();

console.log(hora);

if (hora >= 18 || hora < 6) {
  document.body.classList.add("noche");
}
