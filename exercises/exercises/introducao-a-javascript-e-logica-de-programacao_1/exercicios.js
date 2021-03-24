// 1 - Operaçãoes aritméticas básicas

let a = 5;
let b = 10;

let soma = a + b;

let subtrai = a - b;

let mult = a * b;

let divide = a / b;

let resto = a % b;

// ------------- Fim exercício 1 -------------

// 2 - Programa que retorna o maior de dois números

let num1 = 5;
let num2 = 15;

if (num1 > num2){
  console.log('O maior número é:', num1);
} else {
  console.log('O maior número é:', num2);
}

// ------------- Fim exercício 2 -------------

// 3 - Programa que retorna o maior de três números

let num1 = 5;
let num2 = 15;
let num3 = 14;

if (num1 > num2 && num1 > num3){
  console.log(num1);
} else if (num2 > num1 && num2 > num3){
  console.log(num2);
} else {
  console.log(num3);
}

// ------------- Fim exercício 3 -------------

// 4 - Programa que retorna número positivo ou negativo

let num = -10;

if (num >= 0){
  console.log('Positive');
} else  {
  console.log('Negative');
}

// ------------- Fim exercício 4 -------------

// 5 - Retorna soma do triângulo

let anguloA = 60;
let anguloB = 80;
let anguloC = 40;

let somaAngulos = anguloA + anguloB + anguloC;

switch(somaAngulos){
  case 180:
    console.log(true);
    break;
  case 181:
    console.log(false);
    break;  
  default:
    console.log('Triângulo inválivo');
}

// ------------- Fim exercício 5 -------------

// 6 -  Peça de xadrez e seus movimentos

let pecaXadrez = 'rei';

switch(pecaXadrez){
  case 'rei':
    console.log('Peça escolhida:', pecaXadrez, '- O rei pode mover-se em todas as direções (horizontal, vertical e diagonal) somente uma casa de cada vez.');
    break;
  case 'rainha':
    console.log('A rainha move-se ao longo da horizontal, vertical e diagonais mas não pode pular outras peças.');
    break;
  case 'bispo':
    console.log('O bispo move-se ao longo da diagonal. Não pode pular outras peças.');
  case 'cavalo':
    console.log('É a única peça que pode pular as outras. O movimento do cavalo é em forma de “L”, quer dizer, duas casas em sentido horizontal e mais uma na vertical ou vice-versa');
    break;
  default:
    console.log('Essa peça não existe no tabuleiro');
}

// ------------- Fim exercício 6 -------------

