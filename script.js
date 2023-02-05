let nome = "Luciano";
let mens = `Bém Vindo ${nome}`;
let idade = 39;
let estCivil = true;
let lista = Array(mens, nome, idade);

for (i in lista) {
    console.log(lista[i]);
};
if (estCivil)
 {
    console.log("Sim, Casado!");
 } else {
    console.log("Solteiro!");
 };