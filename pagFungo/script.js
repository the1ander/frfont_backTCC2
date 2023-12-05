function carregarDetalhes(idFungo){
    fetch(`http://localhost:3000/fungos/allfungos${idFungo}`)
    .then((Response)=> Response.json())
    .then((data)=> exibirDetalhes(data))
    .catch((error)=>console.error("Erro ao buscar dethalhes do fungo", error )
    );
}

function exibirDetalhes(fungo) {
  
    const container = document.getElementById("fungo-detalhes-container");

    const fungoContainer = document.createElement("div");
    fungoContainer.classList.add("fungo-container");

    const img = document.createElement("img");
    img.src = fungo.url_foto;
    img.alt = `Fungo ${fungo.id_fungo}`;
    img.classList.add("fungo-img");

    const infoContainer = document.createElement("div");
    infoContainer.classList.add("fungo-info");

    // Adicione informações detalhadas conforme necessário
    const filo = document.createElement("p");
    filo.textContent = `Filo: ${fungo.filo}`;

    const subfilo = document.createElement("p");
    filo.textContent= `subfilo: ${fungo.subfilo}`;

    const classe = document.createElement("p");
    classe.textContent= `classe: ${fungo.classe}`;

    const ordem = document.createElement("p");
    ordem.textContent= `ordem: ${fungo.ordem}`;

    const familia = document.createElement("p");
    familia.textContent= `familia: ${fungo.familia}`;

    const genero = document.createElement("p");
    genero.textContent= `genero: ${fungo.genero}`;

    const basidioma = document.createElement("p");
    basidioma.textContent= `basidioma: ${fungo.basidioma}`;

    const morfologia = document.createElement("p");
    morfologia.textContent = `Morfologia: ${fungo.morfologia}`;

    const habitat = document.createElement("p");
    habitat.textContent = `Habitat: ${fungo.habitat}`;

    const propriedades = document.createElement("p");
    propriedades.textContent = `Propriedades: ${fungo.propriedades}`;

    const observacoes = document.createElement("p");
    observacoes.textContent = `Observações: ${fungo.observacoes}`;

    // Adicione os elementos ao contêiner do fungo

    infoContainer.appendChild(filo);
    infoContainer.appendChild(subfilo);
    infoContainer.appendChild(classe);
    infoContainer.appendChild(ordem);
    infoContainer.appendChild(familia);
    infoContainer.appendChild(genero);
    infoContainer.appendChild(basidioma);
    infoContainer.appendChild(morfologia);
    infoContainer.appendChild(habitat);
    infoContainer.appendChild(propriedades);
    infoContainer.appendChild(observacoes);

    fungoContainer.appendChild(img);
    fungoContainer.appendChild(infoContainer);

    // Adicione o contêiner do fungo ao contêiner principal
    container.appendChild(fungoContainer);
  }

  document.addEventListener("DOMContentLoaded", () => {
    // Extrai o ID do fungo da URL
    const urlParams = new URLSearchParams(window.location.search);
    const idFungo = urlParams.get("id");

    // Carrega os detalhes do fungo
    if (idFungo) {
      carregarDetalhes(idFungo);
    } else {
      console.error("ID do fungo não encontrado na URL.");
    }
  });