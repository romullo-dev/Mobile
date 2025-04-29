/****************/
// funcao sem paramentro e sem retorno

function saudacao(params) {
  console.log("Ola, tudo bem?");
}
//chamar(invocar)função
saudacao();

//funcao com paramentro e sem retorno

function saudacao(nome) {
  console.log("Ola,", nome, " tudo bem?");
}

//chamar(invocar) funcao

saudacao("Maria");
//variavel como paramentro
let n = "maria";
//funcao como paramentro
saudacao(n);
saudacao(prompt("digite seu nome"));

/****************/

//funcao sem paramentro e com retorno

function mostrarDataAtual(params) {
  const data = new Date();
  return data;
}

const d = mostrardata();
console.log(d);

/*****************/

// funcao com paramentro e com retorno

function mostrardia(dia) {
  switch (dia) {
    case 1:
      return "Domingo";
      break;
    case 2:
        return "Segunda";
      break;
    case 3:
        return "Terça";
      break;
    case 4:
        return "Quarta";
      break;

    case 5:
        return "Quinta";
      break;

    default:
        return "Dia invalido"
      break;
  }
}


let dia_extenso = mostrardia(  1);
console.log(dia_extenso);
