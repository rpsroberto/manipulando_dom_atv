function mudarBG(cor) {
  // Define o background com a cor fornecida
  document.body.style.backgroundColor = cor;

  // Seleciona o elemento <h1>
  const titulo = document.getElementById("titulo");

  // Verifica a cor do background e ajusta a cor do texto
  if (cor.toLowerCase() === "black" || cor === "#000000") {
    titulo.style.color = "white";
  } else if (cor.toLowerCase() === "white" || cor === "#ffffff") {
    titulo.style.color = "black";
  } else {
    titulo.style.color = ""; // Reseta para a cor padrão
  }
}

// Captura a cor pelo prompt e chama a função
const corEscolhida = prompt("Digite uma cor para o background (nome ou código hexadecimal):");
mudarBG(corEscolhida);
