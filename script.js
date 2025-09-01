// Troca de abas
document.querySelectorAll("nav a").forEach((link) => {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelectorAll("nav a").forEach((l) => l.classList.remove("active"));
    this.classList.add("active");
    document.querySelectorAll("main section").forEach((sec) => sec.classList.remove("active"));
    document.getElementById(this.dataset.section).classList.add("active");
  });
});

// Simulação de envio do formulário
function enviarFormulario(event) {
  event.preventDefault();
  document.getElementById("msgContato").textContent = "Mensagem de simulação!";
  document.getElementById("formContato").reset();
}
