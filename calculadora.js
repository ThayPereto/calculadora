const soma = (n1, n2) => n1+n2
const subtracao = (n1, n2)=> n1-n2
const multiplicacao = (n1,n2)=> n1*n2
const divisao = (n1, n2) => n1/n2

const calculadora =(fn, n1, n2) => {

switch (fn) {
  case '+':
    return soma (n1, n2)
    break;
  case '-':
    return subtracao ( n1, n2)
    break;
  case'*':
  return multiplicacao (n1, n2)
   break;
   case '/':
   return divisao (n1, n2)
   break; 
  default:
    return 'default'
    break

}}

console.log(calculadora('+', 5,1))
console.log(calculadora('-', 5,1))
console.log(calculadora('*', 5,1))
console.log(calculadora('/', 5,1))
