var contagem = new Date("Jun 14, 2025 11:11:11").getTime();
//diz até qual dia vai a contagem regressiva

var x = setInterval(function() {
//atualiza o contador a cada segundo passado
  
  var now = new Date().getTime();
  //se atualiza para a data de hoje
    
  var distance = contagem - now;
  //calcula a distancia de hoje para o dia selecionado
    
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var min = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var sec = Math.floor((distance % (1000 * 60)) / 1000);
  //transforma para contagem de dias, horas, minutos e segundos
  
  document.getElementById("timer").innerHTML = days + "d " + hours + "h "
  + min + "m " + sec + "s ";
  //exibe no elemento da classe "timer"

  //se a contagem regressiva terminar, diga "expirado"
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("timer").innerHTML = "EXPIRADO";
  }
}, 1000);
