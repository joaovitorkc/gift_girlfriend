const motivosParaAmar = [
    '"Eu amo a forma como você olha para mim."',
    '"Com você me sinto seguro."',
    '"Você é meu porto seguro."',
    '"Quando estamos juntas, todos os meus problemas desaparecem."',
    '"Você faz o meu coração sorrir."',
    '"Você me conhece mais do que eu mesmo."',
    '"Você me apoia em todas as minhas decisões."',
    '"Você me faz sorrir quando ninguém mais consegue."',
    '"Eu sou 100% feliz quando estou ao seu lado."',
    '"Sinto saudades suas, mesmo quando você está no quarto do lado."',
    '"Você me ensinou o verdadeiro significado do amor."',
    '"Você me encoraja a ser mais forte."',
    '"Você cuida de mim quando estou passando mal."',
    '"Você sempre me inspira."',
    '"Meus olhos brilham quando olho para você."',
    '"Você é mais doce do que brigadeiro."',
    '"Você trata todos com gentileza."',
    '"Você me faz ser uma pessoa melhor."',
    '"Você tem uma voz calma e acolhedora."',
    '"Confiamos uma na outra incondicionalmente."',
    '"Você me faz gargalhar mais do que qualquer outra pessoa."',
    '"Eu não consigo imaginar uma vida sem você."',
    '"Você conhece todos os meus segredos e os guarda com zelo."',
    '"Você se importa com o meu sucesso e a minha felicidade."',
    '"Você é dedicada e trabalhadora."',
    '"Você sempre tem as melhores ideias para diversão."',
    '"Você sempre está perto quando preciso de um ombro para chorar."',
    '"Você é fofa quando está brava."',
    '"Você é a minha melhor amiga."',
    '"Você é tudo que eu sempre quis, mas não sabia que precisava."',
    '"Você não tem medo de bancar a boba para me fazer rir."',
    '"Você segura a minha mão no cinema."',
    '"Você coloca as minhas necessidades na frente das suas."',
    '"Seus lábios me derretem."',
    '"Seus abraços me confortam."',
    '"Seus beijos me deixam com calafrios."',
    '"Você sempre acorda com um sorriso no rosto."',
    '"Você me faz rir, mesmo quando estou com vontade de chorar."',
    '"Você me entende, mesmo quando estou sendo irracional."',
    '"Você me aceita como sou."',
    '"Você sonha os meus sonhos comigo."',
    '"A vida é mais alegre ao seu lado."',
    '"Estamos conectados, mesmo quando estamos em uma multidão."',
    '"Você respeita os meus limites."',
    '"Você me mostrou o seu coração."',
    '"Você coloca tudo em perspectiva."',
    '"Quando vejo uma princesa eu imagino você."',
    '"Mesmo quando estamos em uma sala cheia e trocamos olhares, sabemos o que a outra está pensando."',
    '"Você transformou a minha vida em um conto de fadas."',
    '"Você é vulnerável comigo."',
    '"O seu toque me alucina."',
    '"Você transforma a minha vida em uma aventura mágica."',
    '"Você me faz sentir como a única pessoa deste mundo."',
    '"Você me deixa escolher o filme que vamos assistir."',
    '"Você é o meu universo particular."',
    '"Cada sonho meu é um sonho com você."',
    '"Cada momento de dificuldade contigo é uma oportunidade de amadurecimento."',
    '"Você é a primeira pessoa que me vem à mente quando acordo."',
    '"A palavra beleza tem o significado do seu rosto."',
    '"Seu sorriso ilumina os meus dias mais sombrios."',
];


function obterMotivoDoDia() {
    const dataAtual = new Date();
    const dataInicio = new Date(2023, 10, 28); // 28/11/2023
    const diffEmMilliseconds = dataAtual - dataInicio;
    const diffEmDias = Math.floor(diffEmMilliseconds / (1000 * 60 * 60 * 24));

    // Verifica se o dia está dentro do intervalo válido
    if (diffEmDias >= 0 && diffEmDias < motivosParaAmar.length) {
        return motivosParaAmar[diffEmDias];
    } else {
        return "Desculpe, não há motivo para hoje.";
    }
}

var deadline = new Date("Nov 28, 2023 00:00:00").getTime();
var x = setInterval(function() {
  var now = new Date().getTime();
  var t = deadline - now;
  var days = Math.floor(t / (1000 * 60 * 60 * 24));
  var hours = Math.floor((t%(1000 * 60 * 60 * 24))/(1000 * 60 * 60));
  var minutes = Math.floor((t % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((t % (1000 * 60)) / 1000);

  if (t <= 0) {
    clearInterval(x);
    document.getElementById("motivoDoDia").innerText = obterMotivoDoDia();
  } else {
    document.getElementById("motivoDoDia").innerHTML = "Espere " + days + "d " 
    + hours + "h " + minutes + "m " + seconds + "s " + "para ver.";
  }
}, 1000);

const button = document.querySelector(".button");
const motivo = document.getElementById("motivoDoDia")
const coracao = document.getElementById("coracao")
      button.addEventListener("click", (e) => {
        e.preventDefault;
        button.classList.add("animate");
        setTimeout(() => {
          button.classList.remove("animate");
          motivo.style.display = ("block")
          coracao.style.display = ("block")
          button.style.display = ("none")
        }, 500);
      });