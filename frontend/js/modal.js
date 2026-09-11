/* ==================================
MODAL GLOBAL DE NOTIFICAÇÕES
================================== */

const customAlert =
  document.getElementById("customAlert");
const alertMessage =
  document.getElementById("alertMessage");
const btnAlertConfirm =
  document.getElementById("btnAlertConfirm");
/* ==================================
MOSTRAR MODAL
================================== */
function mostrarAlerta(

  mensagem,
  elementoFoco = null,
  tipo = "erro"
) {
  alertMessage.textContent = mensagem;
  const alertCard =
    customAlert.querySelector(".alert-box");

  /* Remove estados anteriores */
  alertCard.classList.remove("success");

  /* Configura o tipo */

  if (tipo === "sucesso") {
    alertCard.classList.add("success");
    alertCard.querySelector("h3")
      .textContent = "Sucesso!";
  } else {
    alertCard.querySelector("h3")
      .textContent = "Aviso Importante!";
  }
  /* Mostra o modal */
  customAlert.style.display = "flex";
  /* Guarda o elemento que receberá foco */
  customAlert.dataset.focus =
    elementoFoco?.id || "";
}
/* ==================================
FECHAR MODAL


================================== */
btnAlertConfirm.addEventListener(
  "click",
  () => {
    customAlert.style.display = "none";
    /* Recupera o elemento */
    const id =
      customAlert.dataset.focus;
    if (id) {
      const elemento =
        document.getElementById(id);
      if (elemento) {
        elemento.focus();
      }
    }
  }
);

