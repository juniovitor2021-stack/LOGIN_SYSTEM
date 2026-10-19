LOGIN_SYSTEM
Sistema de autenticação desenvolvido como projeto para gerenciamento de usuários e acesso ao sistema.

📋 Sobre o projeto
O LOGIN SYSTEM é uma aplicação voltada para autenticação de usuários, permitindo o controle de acesso por meio de login e senha.

O projeto foi desenvolvido com o objetivo de praticar conceitos de desenvolvimento de aplicações, autenticação e organização de código.

🚀 Funcionalidades
Cadastro de usuários
Login de usuários
Validação de credenciais
Controle de acesso
Gerenciamento de sessão
Interface para autenticação
🛠️ Tecnologias utilizadas
HTML
CSS
JavaScript
[Adicione aqui outras tecnologias utilizadas no projeto]
📁 Estrutura do projeto
LOGIN_SYSTEM/
├── README.md
├── ...
└── ...

⚙️ Como executar
Clone o repositório:

git clone https://github.com/juniovitor2021-stack/LOGIN_SYSTEM.git

Entre na pasta:

cd LOGIN_SYSTEM

Depois, execute o projeto de acordo com as instruções e tecnologias utilizadas.

👨‍💻 Autor
Desenvolvido por Junio Vitor.

📄 Licença
Este projeto foi desenvolvido para fins educacionais.

LOGIN_SYSTEM


## 1. Apresentação
Descrição geral do projeto. 

O projeto Login System Analytics utiliza dados públicos sobre turmas das Escolas do Futuro de Goiás,
disponibilizados no Portal de Dados Abertos de Goiás, para compreender como turmas, vagas e matrículas se
distribuem entre escolas, cursos e categorias. A análise principal considera o período de 2022 a 2025 e organiza
os resultados em indicadores e gráficos para um Dashboard acessível a gestores e equipes de planejamento

## 2. Problema investigado
Não está claro como a oferta de turmas, vagas e matrículas dos cursos das Escolas 
do Futuro de Goiás se distribui entre escolas, categorias e cursos, nem como essa 
distribuição varia ao longo do período de 2022 a 2025. O Dashboard organiza os 
principais  resultados  para  tornar  esse  cenário  mais  compreensível  e  apoiar  na 
identificação de pontos que merecem análise adicional.

## 3. Objetivos
Objetivo geral e objetivos específicos. 

Analisar a distribuição das turmas, das vagas e das matrículas dos cursos das
Escolas do Futuro de Goiás entre escolas, categorias e cursos, no período de 2022
a 2025.

## 4. Fonte dos dados
Instituição, link, período e descrição da base.

Portal de Dados Abertos do Estado de Goiás

## 5. Tecnologias utilizadas
Python, Pandas, Matplotlib, HTML, CSS,
JavaScript e outras tecnologias utilizadas.

## 6. Etapas da análise
Coleta, tratamento, análise e visualização.
https://dadosabertos.go.gov.br/dataset/turmas-escolas-do-futuro

## 7. Principais descobertas
Insights sustentados pelos dados.

Insight 1 — Concentração de matrículas por escola
Pergunta analisada: Qual escola concentra mais matrículas e qual é a diferença em relação
à segunda colocada?
Resultado: A escola EM ARTES BASILEU FRANÇA possui 35.163 matrículas, enquanto a
escola LUIZ RASSI possui 14.706. A diferença é de 20.457 matrículas, ou
aproximadamente 139,11%.
Evidência: Agrupamento dos dados por escola com o Pandas, utilizando a soma de
matriculas_turma, e comparação dos resultados em um gráfico de barras.
Interpretação: A EM ARTES BASILEU FRANÇA apresenta um total de matrículas muito
superior ao da segunda colocada, indicando uma distribuição desigual entre as escolas.
Insight: Existe concentração de matrículas em determinadas escolas, o que merece
destaque no Dashboard.
Limitação: A base não contém informações sobre a capacidade física das escolas, a
população atendida ou a procura por vaga. Portanto, não é possível afirmar por que essa
escola possui mais matrículas.

Insight 2 — Evolução anual das matrículas
Pergunta analisada: Como evoluiu a quantidade de matrículas por ano e em qual período
ocorreu a maior mudança?
Resultado: Foram registradas 22.119 matrículas em 2022, 24.362 em 2023, 26.583 em
2024 e 23.243 em 2025. Entre 2024 e 2025, houve uma redução de aproximadamente
12,56%.
Evidência: Agrupamento das matrículas por ano, cálculo da variação percentual e
elaboração de um gráfico de linha.
Aula6_Dos_Resultados_aos_Insights (1).docx
Interpretação: As matrículas cresceram de 2022 a 2024, mas diminuíram em 2025,
demonstrando uma mudança na evolução anual.
Insight: A quantidade de matrículas apresenta variações importantes ao longo do período,
sendo necessário investigar os motivos da redução observada em 2025.
Limitação: Os dados mostram a variação, mas não explicam suas causas. Além disso, a
análise apresentada considera o período de 2022 a 2025, sem incluir 2026.

Insight 3 — Preenchimento das vagas por modalidade
Pergunta analisada: O percentual de preenchimento das vagas é diferente entre as
modalidades presencial e EAD?
Resultado: A modalidade presencial apresentou uma taxa de ocupação de 93,02%,
enquanto a modalidade EAD apresentou 85,42%. A diferença foi de 7,60 pontos
percentuais.
Evidência: Comparação das taxas de ocupação das vagas por modalidade e apresentação
dos resultados em um gráfico de barras.
Aula6_Dos_Resultados_aos_Insights (1).docx
Interpretação: A modalidade presencial apresentou maior percentual de preenchimento das
vagas do que a modalidade EAD.
Insight: O aproveitamento das vagas varia entre as modalidades, indicando a importância
de acompanhar separadamente os resultados do ensino presencial e do ensino a distância.
Limitação: A base permite comparar as taxas de ocupação, mas não informa os motivos da
diferença. Também não permite concluir, isoladamente, qual modalidade possui maior
procura, pois o resultado depende da quantidade de vagas ofertadas e de outros fatores.

## 8. Big Idea
Mensagem central do projeto.

A ocupação das vagas é alta, mas as matrículas variam entre cursos, escolas e
anos. Por isso, é importante analisar essas diferenças para melhorar o
planejamento e entender suas causas antes de tomar decisões.

## 9. Como executar

Para executar o projeto Login System, siga as etapas abaixo.

### Pré-requisitos

* Ter o [Visual Studio Code](https://code.visualstudio.com/) instalado.
* Ter o [Git](https://git-scm.com/) instalado para clonar o repositório, caso necessário.
* Ter acesso aos arquivos do projeto.

### Passo 1 — Obter o projeto

Clone o repositório do GitHub ou abra a pasta do projeto caso os arquivos já estejam disponíveis no computador.

Para clonar o repositório, utilize o comando:

```bash
git clone URL_DO_REPOSITORIO
```

Substitua `URL_DO_REPOSITORIO` pelo endereço real do repositório do projeto.

### Passo 2 — Abrir o projeto

Abra o Visual Studio Code, selecione **Arquivo → Abrir Pasta** e escolha a pasta do projeto.

### Passo 3 — Iniciar a aplicação

Como o projeto utiliza HTML, CSS e JavaScript, uma opção é executar a aplicação por meio de um servidor local.

No Visual Studio Code, instale a extensão **Live Server**, caso ainda não esteja instalada. Em seguida, abra o arquivo HTML de entrada do sistema de login, clique com o botão direito sobre ele e selecione **Open with Live Server**.

Se o projeto utilizar um backend ou outra configuração de execução, siga também as instruções específicas correspondentes.

### Passo 4 — Acessar o sistema

Com o servidor local iniciado, abra no navegador o endereço disponibilizado pelo Live Server.

Acesse a página de login e utilize as credenciais previstas na configuração do projeto, caso existam.

Após a autenticação, acesse o dashboard para visualizar os indicadores e gráficos referentes às turmas, vagas e matrículas das Escolas do Futuro de Goiás, no período de 2022 a 2025.

### Passo 5 — Encerrar a execução

Para encerrar o servidor local, utilize a opção de parada do Live Server no Visual Studio Code.

**Observação:** os procedimentos de autenticação dependem da implementação existente no projeto. Caso sejam necessários serviços externos, um backend ou configurações adicionais, eles deverão ser iniciados ou configurados antes do uso da aplicação.

## 10. Limitações
Limitações dos dados e da análise.

A base não contém todas as variáveis necessárias para explicar as diferenças observadas, nem dados
populacionais para calcular taxas por habitante. Há 502 valores ausentes em data_fim e em matriculas_aptas,
além de 10 em carga_horaria na base completa. As diferenças encontradas devem ser tratadas como pontos para
investigação, não como prova de causa