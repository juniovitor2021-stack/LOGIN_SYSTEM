async function carregarDashboard() {
try {
const resposta = await fetch(
"data/dados_dashboard.json"
);
if (!resposta.ok) {
throw new Error(
"Não foi possível carregar os indicadores."
);
}
const dados = await resposta.json();
document.getElementById(
"totalRegistros"
).textContent = dados.total_registros.toLocaleString(
"pt-BR"
);
document.getElementById(
"mediaRegistros"
).textContent = dados.media_registros.toLocaleString(
"pt-BR"


);
document.getElementById(
"maiorValor"
).textContent = dados.maior_valor.toLocaleString(
"pt-BR"
);
document.getElementById(
"menorValor"
).textContent = dados.menor_valor.toLocaleString(
"pt-BR"
);
} catch (erro) {
console.error(erro);
document.getElementById(
"totalRegistros"
).textContent = "Indisponível";
}
}
carregarDashboard();

const municipios = ["Município A", "Município B", "Município C"];
const quantidades = [45000, 21000, 15000];
const elementoGrafico = document.getElementById(
"graficoPrincipal"
);
new Chart(elementoGrafico, {
type: "bar",
data: {
labels: municipios,
datasets: [{
label: "Quantidade de registros",
data: quantidades
}]
},
options: {
responsive: true,
plugins: {
legend: {
display: false
}
},
scales: {
y: {
beginAtZero: true
}
}
}
});