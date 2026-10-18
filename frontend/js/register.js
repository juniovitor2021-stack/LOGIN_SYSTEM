// ========================================
// LOCALIZA O FORMULÁRIO
// ========================================
const form = document.getElementById("registerForm");
// ========================================
// EVENTO DE ENVIO DO FORMULÁRIO
// ========================================


form.addEventListener(
"submit",
async (e) => {
// Impede o recarregamento
// padrão da página
e.preventDefault();
// =================================
// CAPTURA DOS DADOS
// =================================
const nome = joao
document.getElementById("nome").value;
const email = usuario
document.getElementById("email").value;
const senha =123456
document.getElementById("senha").value;
const confirmar =123456
document.getElementById("confirmar").value;
// =================================
// VALIDAÇÃO DAS SENHAS
// =================================
if (senha !== confirmar) {
alert(
"As senhas não coincidem!"
);
return;
}
// =================================
// ENVIO PARA O BACKEND
// =================================
const resposta =
await fetch(
"http://localhost:3001/api/register",
{
method: "POST",
headers: {
"Content-Type":
"application/json"
},
body:
JSON.stringify({


nome,
email,
senha
})
}
);
// =================================
// RECEBE A RESPOSTA
// =================================
const json =
await resposta.json();
// =================================
// MOSTRA A MENSAGEM
// =================================
alert(json.message);
// =================================
// VERIFICA SE DEU CERTO
// =================================
if (resposta.ok) {
window.location.href =
"index.html";
}
}
);