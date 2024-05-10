const sonic = document.querySelector('#sonic');
const pipe = document.querySelector('.pipe');

const jump = (event) => {
  console.log(event.key);

  if(event.key === "ArrowUp" || "w"){
    sonic.classList.add('jump');
      setTimeout(() =>{
        sonic.classList.remove('jump');
      }, 900);
  }
}

const loop = setInterval(() => {//loop para confirmar se o jogo não foi perdido
      
      const pipePosition = pipe.offsetLeft;//conferindo a distancia do left e do pipePosition
      const sonicPosition = +window.getComputedStyle(sonic).bottom.replace('px','');//pegar propriedades css bottom que esteja aplicada a variavel sonic
      console.log(sonicPosition);

//pipePosition > -100 função para confirmar se o monstro = pipe passou por inteiro
if(pipePosition <= -4 && pipePosition > -160 && sonicPosition < 100){//assim que o left for o suficiente para encostar no sonic a animação de movimento do monstro para
   
    pipe.style.animation = 'none';
    pipe.style.left = `${pipePosition}px`;

    sonic.style.animation = 'none';
    sonic.style.bottom = `${sonicPosition}px`;

    sonic.src = "./img/d87884db-8c4f-4ac9-8f35-ea6763189231.gif";
    sonic.style.width = '110px';

    clearInterval(loop);//parar o loop de perceber se perdeu o game
}
}, 10)//limites para se perder o jogo

document.addEventListener('keydown', jump);