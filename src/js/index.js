/* 
Objetivo1- quando clicarmos na seta de avançar temos que mostrar o proximo cartão da lista 
  -passo 1 - dar um jeito de pegar o elemento Html da seta avançar
  -passo 2 - dar um jeito de identificar o clique do usuario na seta avançar
   -passo 3 - fazer aparecer o proximo cartão da lista 
   -passo 4 -buscar o cartão que esta selecionado  e esconder
   
Objetivo2- quando clicarmos na seta de voltar temos que mostrar o cartão anterior da lista 
  -passo 1 - dar um jeito de pegar o elemento Html da seta voltar
  -passo 2 - dar um jeito de identificar o clique do usuario na seta voltar
   -passo 3 - fazer aparecer o cartão anterior da lista 
   -passo 4 -buscar o cartão que esta selecionado  e esconder
*/


const btnAvancar = document.getElementById('btn-avancar');
const btnVoltar = document.getElementById('btn-voltar');
const cartoes = document.querySelectorAll('.cartao');
let cartaoAtual = 0;

function esconderCartaoSelecionado(){
    const cartaoSelecionado = document.querySelector('.selecionado');
    cartaoSelecionado.classList.remove('selecionado');
}

function mostrarCartao(indiceCartao){
    cartoes[cartaoAtual].classList.add('selecionado');
}
   
btnAvancar.addEventListener('click', function (){

    esconderCartaoSelecionado();

    if(cartaoAtual === cartoes.length - 1 ) return


     cartaoAtual++;
     mostrarCartao(cartaoAtual);
   });
   
btnVoltar.addEventListener('click', function (){

    if(cartaoAtual === 0) return;

    esconderCartaoSelecionado();

     cartaoAtual--;
     mostrarCartao(cartaoAtual);
   });
   