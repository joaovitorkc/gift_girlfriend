const motivosParaAmar = [
    "Seu sorriso ilumina meu dia.",
    "Sua gentileza me encanta.",
    // Adicione mais motivos aqui...
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