const handleMouseMove = (e) => {
  const footer = document.querySelector("footer");
  const footerRect = footer.getBoundingClientRect();

  const xRelativeToFooter = e.clientX - footerRect.left;
  const yRelativeToFooter = e.clientY - footerRect.top;

  footer.style.setProperty("--mouse-x", `${xRelativeToFooter}px`);
  footer.style.setProperty("--mouse-y", `${yRelativeToFooter}px`);
};

document.addEventListener("mousemove", handleMouseMove);

function mostrarDataHora() {
  const dataHoraElemento = document.getElementById("data-hora");
  const agora = new Date();

  const diaSemana = agora
    .toLocaleDateString("pt-BR", { weekday: "short" })
    .replace(/\b\w/g, (l) => l.toUpperCase());
  const dia = agora.getDate();
  const mes = agora.toLocaleDateString("pt-BR", { month: "short" });
  const hora = agora.getHours().toString().padStart(2, "0");
  const minuto = agora.getMinutes().toString().padStart(2, "0");

  // Formatando a data e hora sem vírgulas
  const dataHoraFormatada = `${diaSemana} ${dia} de ${mes} ${hora}:${minuto}`;

  dataHoraElemento.textContent = dataHoraFormatada;
}

// Atualiza a data e hora a cada segundo
setInterval(mostrarDataHora, 1000);

// Mostra a data e hora ao carregar a página
mostrarDataHora();

// ao clicar na classe logo tocar /assets/sounds/plim.mp3 com volume baixo
document.querySelector(".logo").addEventListener("click", () => {
  const audio = new Audio("/assets/sounds/plim.mp3");
  audio.volume = 0.1;
  audio.play();
});
