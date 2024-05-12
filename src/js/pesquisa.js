
let pesquisaInput = document.getElementById('pesquisa')

let destino = [
  "BAÍA DOS GOLFINHOS",
  "BARRA DA LAGOA",
  "CANASVIEIRAS",
  "ILHA DO RATONES",
  "ILHA DO CAMPECHE",
  "ILHA DO FRANCÊS",
  "JURERÊ",
  "LAGOA DA CONCEIÇÃO",
  "TINGUÁ"
]

// Criando datalist com os destinos disponíveis
let dataListDestino = document.createElement('datalist')
dataListDestino.setAttribute('id', 'rotas')

for (let i = 0; i < destino.length; i++) {
  let opcoesDestino = document.createElement("option");
  opcoesDestino.setAttribute("value", destino[i]);
  opcoesDestino.style.color = "red"
  // console.log(opcoesDestino.style)
  dataListDestino.appendChild(opcoesDestino);
}
// Associando o datalist ao input de pesquisa
document.getElementById('barra-pesquisa').appendChild(dataListDestino)
pesquisaInput.setAttribute("list", "rotas");
dataListDestino.style.color = "red"
let LocalPesquisado


function procurar(flag = false) {

  // Pega o LocalPesquisado 
  if (flag == false) {
    LocalPesquisado = (JSON.parse(localStorage.getItem('pesquisaLocal')))
    if (LocalPesquisado != null) { LocalPesquisado.toUpperCase() }
    console.log(LocalPesquisado)
  } else {
    LocalPesquisado = (pesquisaInput.value).toUpperCase()
  }

  let spanLocal = document.getElementsByClassName("span_LocalBarco")

  for (let i = 0; i < spanLocal.length; i++) {

    nomeLocal = (spanLocal[i].innerHTML).toUpperCase()
    infoTextDIV = spanLocal[i].parentNode
    barcoDIV = infoTextDIV.parentNode

    let idBarcos = `${barcoDIV.id}`

    //Se a pesquisa não corresponder ao destino disponíveis
    if (LocalPesquisado == '' || destino.includes(LocalPesquisado) == false) {
      document.getElementById(idBarcos).style.display = "block"
      // Se a pesquisa for igual ao destino disponíveis, mostre os cards
    } else if (nomeLocal == LocalPesquisado) {
      console.log(nomeLocal)
      document.getElementById(idBarcos).style.display = "block"
      // Não mostrar os destinos diferentes
    } else {
      document.getElementById(idBarcos).style.display = "none"
    }

  }
}

pesquisaInput.addEventListener('change', pesquisando)
function pesquisando() {
  localStorage.removeItem('pesquisaLocal')
  let flagpesquisa = true
  procurar(flagpesquisa)
}


document.addEventListener('click', abrirAluguel)

function abrirAluguel(e) {

  for (let j = 0; j < e.composedPath().length; j++) {
    let idAluguelBarco = (e.composedPath()[j].id)

    switch (idAluguelBarco) {
      case 'barco-iate-1':
        window.location.href = '/src/HTML/Iate/aluguel-iate.html'
        break;
      case 'barco-jetski-1':
        window.location.href = '/src/HTML/Jet-ski/aluguel-jet.html'
        break;
      case 'barco-lancha-1':
        window.location.href = '/src/HTML/Lanchas/aluguel-lancha.html'
        break;
      case 'barco-veleiro-1':
        window.location.href = '/src/HTML/Veleiro/aluguel-veleiro.html'
        break;

    }
  }
}