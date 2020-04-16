
var palla = {
  nome: "palla",
  peso: 10
}
console.log(palla.peso);

// MODIFICA PESO CON IL PROMPT-------------
// var test = true;
// while (test) {
  // var nuovoPeso = $("#input-peso").val();
  // if (!isNaN(nuovoPeso) && !nuovoPeso=="") {
  //   test=false;
  // }
// }

// MODIFICA PESO CON UN INPUT E UN BOTTONE--------------
// $("#button-peso").click(function () {
//   palla.peso = $("#input-peso").val();
//   console.log(palla.peso);
//   $("#nuovo-peso").text(palla.peso);
// })

// MODIFICA PESO CON UN INPUT --------------
$("#nomepalla").text(palla.nome);
$("#input-peso").keyup(function () {
  palla.peso = $("#input-peso").val();
  console.log(palla.peso);
  $("#nuovo-peso").text(palla.peso);
})
$("#input-peso").click(function () {
  palla.peso = $("#input-peso").val();
  console.log(palla.peso);
  $("#nuovo-peso").text(palla.peso);
})
