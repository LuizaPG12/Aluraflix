// Lista de filmes

var listaFilmes = [
  "https://wallpaperaccess.com/full/3592533.jpg",
  "https://i.pinimg.com/originals/db/5d/46/db5d468734e965ae153c63d0ceb7abf1.jpg",
  "https://downloadwap.com/thumbs2/wallpapers/p2/2019/games/20/bfa0dc6013137866.jpg",
  "https://i.pinimg.com/550x/c1/2c/ac/c12cac4f6eb67dbcce7728260d824931.jpg"
];

// Lista dos nomes dos filmes

var listaNomes = [
  "She-Ra e as Princesas do Poder",
  "Kung Fu Panda",
  "Stardew Valley",
  "Hotel del Luna"
];

// Função para mostrar os filmes

function exibir() {
  let adicionando = "";
  var elementoLista = document.getElementById("lista");
  for (var i = 0; i < listaFilmes.length; i++) {
    adicionando +=
      "<section><img class='img-filmes' src=" +
      listaFilmes[i] +
      ' title ="' +
      listaNomes[i] +
      '">' +
      "<figcaption>" +
      listaNomes[i] +
      "</figcaption>" +
      "</section>";
  }
  elementoLista.innerHTML = adicionando;
}

// Carregando os filmes na tela no início

exibir();

// Função para adicionar filme

function Filmenovo() {
  var filme = document.getElementById("link").value;
  var nomeFilme = document.getElementById("nome").value;
  if (
    listaFilmes.includes(filme) == true ||
    listaNomes.includes(nomeFilme) == true
  ) {
    document.getElementById("aviso").innerHTML =
      "Ops! Este item já está na lista!";
  } else {
    if (filme == "" || nomeFilme == "") {
      document.getElementById("aviso").innerHTML =
        "Por favor, insira o nome e o URL do que gostaria de adicionar!";
    } else if (
      filme.endsWith(".jpg" || ".JPG" || ".jpeg" || ".svg" || ".png") &&
      nomeFilme.length <= 36
    ) {
      listaFilmes.push(filme);
      listaNomes.push(nomeFilme);
      document.getElementById("aviso").innerHTML =
        "Agradecemos por sua sugestão!";
    } else if (nomeFilme.length > 36) {
      document.getElementById("aviso").innerHTML =
        "Por favor, insira um nome com no máximo 36 caracteres!";
    } else {
      document.getElementById("aviso").innerHTML =
        "Por favor, insira um URL válido do que gostaria de adicionar!";
    }
  }
  document.getElementById("link").value = "";
  document.getElementById("nome").value = "";
  exibir();
}

// Função para usar na hora de remover o item

function removendo(posicao) {
  listaFilmes.splice(posicao, 1);
  listaNomes.splice(posicao, 1);
  document.getElementById("aviso").innerHTML = "Seu item foi removido!";
}

// Função para remover filme

function Remover() {
  var filme = document.getElementById("link").value;
  var nomeFilme = document.getElementById("nome").value;
  var posicaoImg = listaFilmes.indexOf(filme);
  var posicaoNome = listaNomes.indexOf(nomeFilme);

  if (listaFilmes.includes(filme) == true) {
    removendo(posicaoImg);
  } else {
    if (filme == "" && nomeFilme == "") {
      document.getElementById("aviso").innerHTML =
        "Por favor, insira o nome ou URL do que gostaria de remover!";
    } else if (listaNomes.includes(nomeFilme) == true) {
      removendo(posicaoNome);
    } else {
      document.getElementById("aviso").innerHTML =
        "Ops! Este item não está presente em nossa lista!";
    }
  }
  document.getElementById("link").value = "";
  document.getElementById("nome").value = "";
  exibir();
}
