
var bici = [
  {
    nome: "bici1",
    peso: 44
  },
  {
    nome: "bici2",
    peso: 48
  },
  {
    nome: "bici3",
    peso: 10
  },
  {
    nome: "bici4",
    peso: 11
  },
];
// var pesominstamp;
var nomebici;
var pesominore = bici[0].peso;
for (var i = 0; i < bici.length; i++) {
 var pesobici = bici[i].peso;

 if(pesobici<pesominore){
   pesominore=pesobici;
   nomebici = bici[i].nome;
 }
}

$("#nomebici").text("La bici più leggera è: "+nomebici);
$("#pesobici").text("La bici più leggera pesa: "+pesominore);
