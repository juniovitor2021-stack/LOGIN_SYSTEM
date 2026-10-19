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

const cursos = ["0", "10", "20", "30", "40", "50", "60", "70", "80"  ];
const quantidades = [0, 100, 200, 300, 400, 500, 600, 700, 800];
const elementoGrafico = document.getElementById(
"graficoPrincipal" 
);
new Chart(elementoGrafico, {
type: "bar",
data: {
labels: cursos,
datasets: [{
label: "Matriculas registradas por turma",
data: quantidades
}]
},
options: {
responsive: true,
plugins: {
legend: {
display: true
}
},
scales: {
y: {
beginAtZero: true
}
}
}
});



