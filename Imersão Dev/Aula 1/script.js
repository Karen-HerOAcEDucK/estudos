/***
  O ryō é a moeda usada no mundo de Naruto. Ele é baseado em uma antiga
  moeda de ouro japonesa que foi usada no Japão antes da Era Meiji. Ele
  depois foi substituído pelo Iene. A taxa de câmbio de um ryō corresponde a
  aproximadamente 10 ienes ou 0,22 reais.
***/

// Cambio para a converter o ryō em reais
let cambioRyo = 0.22

// Recupera elemento para modificar o HTML
let text = document.getElementById("text")

function conversor(){
  //prompt para o usuario informar o valor a ser convertido
  let valorRyo = prompt("Digite um valor em wons")
  
  // efetua a conversor pelo valor informado
  let result = valorRyo * cambioRyo
  
  // troca o texto da tela para exibir o valor convertido
  text.innerText = result
}
