function calculadora() {
     const operacao = Number(prompt('Escolha uma operação:\n 1 - soma (+)\n 2 - subtração (-)\n 3 - multiplicação (*)\n 4 - divisão real (/)\n 5 - divisão inteira (%)\n 6 - potenciação (**)'));
 
if(!operacao || operacao >= 7){
     alert('Erro - Operação inválida!');
     calculadora();
}else{

     let n1 = Number(prompt('Insira o primeiro valor: '));
     let n2 = Number(prompt('Insira o segundo valor: '));
     let resultado;

     if(!n1 || !n2){
          alert('Erro - Parâmetros inválidos!');
          calculadora();
     }else{

     function funcaoSoma(){
          resultado = n1 + n2;
          alert(`${n1} + ${n2} = ${resultado}`);
     }

     function funcaoSubtracao(){
          resultado = n1 - n2;
          alert(`${n1} - ${n2} = ${resultado}`);
     }

     function funcaoMultiplicacao(){
          resultado = n1 * n2;
          alert(`${n1} * ${n2} = ${resultado}`);
     }

     function funcaoDivisaoReal(){
          resultado = n1 / n2;
          alert(`${n1} / ${n2} = ${resultado}`);
     }

     function funcaoDivisaoInteira(){
          resultado = n1 % n2;
          alert(`O resto da divisão entre ${n1} % ${n2} é igual a ${resultado}`);
     }

     function funcaoPotenciacao(){
          resultado = n1 ** n2;
          alert(`${n1} elevado ${n2} é igual à ${resultado}`);
     }

     function novaOperacao(){
     let opcao = prompt('Deseja realizar outra operação:\n 1 - Sim\n 2 - Não');

     if(opcao == 1){
          calculadora();
     }else if(opcao == 2){
          alert('Até mais!');
     }else{
          alert('Digite uma opção válida!');
          novaOperacao();
     }

     }

if(operacao == 1){
     funcaoSoma();
}else if(operacao == 2){
     funcaoSubtracao();
} else if(operacao == 3){
     funcaoMultiplicacao();
} else if(operacao == 4){
     funcaoDivisaoReal();
} else if(operacao == 5){
     funcaoDivisaoInteira();
}else if(operacao == 6){
     funcaoPotenciacao();

}

// TAMBÉM PODE SER USADO O SWITCH NESTE CASO!!!!!!
/* switch(operacao){ .       
     case 1:
          funcaoSoma();
          break;
          case 2:
               funcaoSubtracao();
               break;
               case 3:
                    funcaoMultiplicacao();
                    break;
                    case 4:
                         funcaoDivisaoReal();
                         break;
                         case 5:
                              funcaoDivisaoInteira();
                              break;
                              case 6:
                                   funcaoPotenciacao();
                                   break; 
} */
}
}
}
calculadora();