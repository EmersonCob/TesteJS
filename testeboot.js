//continue a solução

let alcohol = 0;
let gasoline = 0;
let diesel = 0;
let lines = [8,1,7,2,2,4,]

while (lines.length) {
  const code = Number(lines.shift());

  switch (code) {
    case 1:
      alcohol +=1;
      break;
    case 2:
      gasoline +=1;
      break;
    case 3:
      diesel +=1;
      break;
    case 4:
      break;
  }
}

console.log("MUITO OBRIGADO");
console.log("Alcool: " + alcohol);
console.log("Gasolina: " + gasoline);
console.log("Diesel: " + diesel);

/*
Desafio
Você recebeu desafio para determinar qual dos produtos é o preferêncial dos clientes de um posto de abastecimento de combustível. 
Para isso você deve escrever um algoritmo para ler o tipo de combustível abastecido (codificado da seguinte forma: 
  1.Álcool 2.Gasolina 3.Diesel 4.Fim). Caso o usuário informe um código inválido (fora da faixa de 1 a 4) 
  deve ser solicitado um novo código (até que seja válido). O programa será encerrado quando o código informado for o número 4.

Entrada
A entrada contém apenas valores inteiros e positivos.

Saída
Deve ser escrito a mensagem: "MUITO OBRIGADO" e a quantidade de clientes que abasteceram cada tipo de combustível, conforme exemplo.

Exemplo de Entrada	Exemplo de Saída
8
1
7
2
2
4

MUITO OBRIGADO
Alcool: 1
Gasolina: 2
Diesel: 0


*/