const url "https://raw.githubusercontent.com/Theodoro221819/Painel-tts-omega/main/log_atual_2025-05-13_14-21-47.json";

async function fetchData() {
  try {
    const response = await fetch(url);
    const data = await response.json();
    renderPrevisoes(data.previsoes);
  } catch (e) {
    document.getElementById("previsoes").innerText = "Erro ao carregar o JSON. Verifique se o link está acessível publicamente.";
  }
}

function renderPrevisoes(previsoes) {
  const container = document.getElementById("previsoes");
  container.innerHTML = "";
  previsoes.forEach(p => {
    const div = document.createElement("div");
    div.className = "card";
    div.innerHTML = `
      <strong>${p.tema}</strong><br/>
      <em>${p.data_emissao}</em><br/>
      Status: ${p.status_validacao}<br/>
      Classe: ${p.classe_validacao}<br/>
      <a href="${p.link_confirmacao}" target="_blank">Ver confirmação</a>
      <p>${p.interpretacao_leiga}</p>
    `;
    container.appendChild(div);
  });
}

document.getElementById("darkMode").addEventListener("change", (e) => {
  document.body.classList.toggle("dark", e.target.checked);
});

fetchData();
