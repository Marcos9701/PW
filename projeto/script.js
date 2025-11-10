// --- Funções dos exercícios ---

function podeDirigir(idade) {
  return idade >= 18 ? "Pode ser habilitado(a)" : "Ainda não pode";
}

function encontrarMaiorEntreTres(a, b, c) {
  if (a > b && a > c) return a + " é o maior";
  else if (b > a && b > c) return b + " é o maior";
  else if (c > a && c > b) return c + " é o maior";
  else return "Há números iguais";
}

function classificarMoeda(valor) {
  if (valor == 0.01) return "Um Centavo";
  else if (valor == 0.05) return "Cinco Centavos";
  else if (valor == 0.10) return "Dez Centavos";
  else if (valor == 0.25) return "Vinte e Cinco Centavos";
  else if (valor == 0.50) return "Cinquenta Centavos";
  else if (valor == 1.00) return "Um Real";
  else return "Valor Desconhecido";
}

function senhaForte(senha) {
  return senha.length > 8 && senha !== "12345678";
}

function checarTemperatura(temp) {
  if (temp < 10) return "Alerta de Frio";
  else if (temp <= 25) return "Temperatura Ideal";
  else return "Alerta de Calor";
}

function nomeDoDia(numero) {
  switch (numero) {
    case 1: return "Domingo";
    case 2: return "Segunda";
    case 3: return "Terça";
    case 4: return "Quarta";
    case 5: return "Quinta";
    case 6: return "Sexta";
    case 7: return "Sábado";
    default: return "Número inválido (1 a 7)";
  }
}

function tipoTriangulo(L1, L2, L3) {
  if (L1 === L2 && L2 === L3) return "Equilátero";
  else if (L1 === L2 || L1 === L3 || L2 === L3) return "Isósceles";
  else return "Escaleno";
}

function gerarNomeCompleto(pessoa) {
  return pessoa.primeiroNome + " " + pessoa.sobrenome;
}

function calcularMediaSimples(N1, N2) {
  let media = (N1 + N2) / 2;
  return media >= 7 ? "Aprovado (" + media.toFixed(1) + ")" : "Reprovado (" + media.toFixed(1) + ")";
}

function formatarTelefone(numero) {
  return numero.length === 8 ? numero.slice(0, 4) + "-" + numero.slice(4) : "Número inválido";
}

// --- Funções de interação com HTML ---

function verificarIdade() {
  const idade = Number(document.getElementById("idade").value);
  document.getElementById("res1").innerText = podeDirigir(idade);
}

function verificarMaior() {
  const n1 = Number(document.getElementById("n1").value);
  const n2 = Number(document.getElementById("n2").value);
  const n3 = Number(document.getElementById("n3").value);
  document.getElementById("res2").innerText = encontrarMaiorEntreTres(n1, n2, n3);
}

function verificarMoeda() {
  const valor = Number(document.getElementById("moeda").value);
  document.getElementById("res3").innerText = classificarMoeda(valor);
}

function senhaForte(senha) {
  return senha.length > 8 && senha !== "12345678";
}

function verificarSenha() {
  const senha = document.getElementById("senha").value;
  const res = document.getElementById("res4");
  const lembrar = document.getElementById("lembrarSenha");
  const resposta = document.getElementById("respostaSenha");

  if (senhaForte(senha)) {
    res.innerText = "Senha forte! Boa escolha 💪";
    lembrar.style.display = "block"; // mostra pergunta
    resposta.innerText = "";

  } else {
    res.innerText = "Senha fraca! ❌";
    lembrar.style.display = "none";
    resposta.innerText = "";
  }
}

function respostaLembrar(opcao) {
  const resposta = document.getElementById("respostaSenha");
  if (opcao === "sim") {
    resposta.innerText = "Boa! Mas tente deixá-la mais segura.";
  } else {
    resposta.innerText = "Então crie uma senha mais fácil de lembrar (mas forte)!";
  }
}


function verificarTemp() {
  const temp = Number(document.getElementById("temp").value);
  document.getElementById("res5").innerText = checarTemperatura(temp);
}

function verificarDia() {
  const dia = Number(document.getElementById("dia").value);
  document.getElementById("res6").innerText = nomeDoDia(dia);
}

function verificarTriangulo() {
  const L1 = Number(document.getElementById("L1").value);
  const L2 = Number(document.getElementById("L2").value);
  const L3 = Number(document.getElementById("L3").value);
  document.getElementById("res7").innerText = tipoTriangulo(L1, L2, L3);
}

function gerarNome() {
  const nome = document.getElementById("nome").value;
  const sobrenome = document.getElementById("sobrenome").value;
  document.getElementById("res8").innerText = gerarNomeCompleto({ primeiroNome: nome, sobrenome: sobrenome });
}

function calcularMedia() {
  const nA = Number(document.getElementById("nA").value);
  const nB = Number(document.getElementById("nB").value);
  document.getElementById("res9").innerText = calcularMediaSimples(nA, nB);
}

function formatarTel() {
  const tel = document.getElementById("telefone").value;
  document.getElementById("res10").innerText = formatarTelefone(tel);
}
