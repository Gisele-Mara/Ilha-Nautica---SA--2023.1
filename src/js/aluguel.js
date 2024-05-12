
let vetorHistorico = []



let imgPequenas = document.getElementById("img_pequenas")

imgPequenas.addEventListener("click", imagem)

function imagem(evento) {

    console.log(evento.composedPath()[0].id)
    document.getElementById("imgRadio1").style.display = "none"
    document.getElementById("imgRadio2").style.display = "none"
    document.getElementById("imgRadio3").style.display = "none"
    document.getElementById("imgRadio4").style.display = "none"
    document.getElementById("imgRadio5").style.display = "none"

    for (let i = 0; i < evento.composedPath().length; i++) {
        //    Selecionando o array do anchor tag (<a>)

        if (evento.composedPath()[i].nodeName == "INPUT") {
            console.log("aaaaaaa")

            // Pegando o nome do barco, o texto interno do <a>
            let nomeId = (evento.composedPath()[i].id)
            console.log(nomeId)

            //Usando switch para mudar o display do icone clicado, ou seja fazer aparecer o iframe do barco selecionado
            switch (nomeId) {
                case "radio1":
                    console.log("Mudar para Radio 1")
                    document.getElementById("imgRadio1").style.display = "block"

                    break;
                case "radio2":
                    console.log("Mudar para Radio 2")
                    document.getElementById("imgRadio2").style.display = "block"
                    break;
                case "radio3":
                    console.log("Mudar para Radio 3")
                    document.getElementById("imgRadio3").style.display = "block"
                    break;
                case "radio4":
                    console.log("Mudar para Radio 4")
                    document.getElementById("imgRadio4").style.display = "block"
                    break;
                case "radio5":
                    console.log("Mudar para Radio 5")
                    document.getElementById("imgRadio5").style.display = "block"
                    break;

            }
        }

    }
}





//>>>>>>>>>>>>>> contador de likes e dislikes <<<<<<<<<<<<<<<<<<<<<<<<<<<<


let contadorLikes = 18
let contadorDislikes = 7

document.getElementById('contador_likes').innerHTML = contadorLikes
document.getElementById('contador_dislikes').innerHTML = contadorDislikes

function Like() {

    contadorLikes++
    document.getElementById('contador_likes').innerHTML = contadorLikes
}

function Dislike() {

    contadorDislikes++
    document.getElementById('contador_dislikes').innerHTML = contadorDislikes
}

console.log(localStorage.getItem("Logado"))

//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>




// ----------------------------------------JETSKI  -------------------------------------
function ValoresJet() {
    let diaria = 800
    let combustivel = 100
    let taxaServico = 50

    let dias = document.getElementById('slct_dias')

    // dias.addEventListener("load", Alugar)

    if (dias.value == "") {
        document.getElementById("valorTotal_diarias").innerHTML = `R$adasdasd`
    }
    let calcDiaria = diaria * Number(dias.value)
    let calcCombustivel = combustivel * Number(dias.value)

    document.getElementById("spanDiarias").innerHTML = ` ${dias.value}`
    document.getElementById("valorTotal_diarias").innerHTML = `R$${calcDiaria}`

    document.getElementById("spanCombustivel").innerHTML = `${dias.value}`
    document.getElementById("span_totalCombustivel").innerHTML = `R$${calcCombustivel}`

    let calcTotal = calcDiaria + calcCombustivel + taxaServico

    document.getElementById("spanValorTotal").innerHTML = `R$${calcTotal}`

    localStorage.setItem('Total', JSON.stringify(calcTotal))
    localStorage.setItem('dias', JSON.stringify(dias.value))
}

//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

//>>>>>>>>>>>>>>>>>> VERIFICACAO LOGIN <<<<<<<<<<<<<<<<<<<<<<

let verificarLogin



function AlugarJet() {

    verificarLogin = JSON.parse(localStorage.getItem('userLogado'))
    console.log(` Verificando o login ${verificarLogin}`)
    let Total = JSON.parse(localStorage.getItem('Total'))
    let totalDias = JSON.parse(localStorage.getItem('dias'))

    if (verificarLogin == null) {

        document.getElementById("containerPopup").style.display = "block"
    } else if (totalDias != 0 && Total != 0) {
        Swal.fire(
            'Tudo pronto!',
            `Olá, ${verificarLogin.User}! Sua reserva está feita!<br>Dias reservados: ${totalDias}<br>Total do aluguel: R$${Total} 
             <br><br>Enviaremos um email de confirmação com os dados.`,
            'success',

        )
    } else {
        Swal.fire(
            'Algo errado!',
            `Certifique-se que selecionou os dias`,
            'warning'
        )
    }

    localStorage.setItem('Total', JSON.stringify(0))
    localStorage.setItem('dias', JSON.stringify(0))
    historico("/src/assets/imagens/JET SKI/Yamaha Vxr 1800 @@@/jet.gimp.jpg","Yamaha Vxr 1800", totalDias, Total)
    localStorage.setItem("FlagHistorico", JSON.stringify('sim'))}

//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>




//---------------------------------------------------------IATE  ----------------------------------------------------------------------------------------
function ValoresIate() {
    let diaria = 8500
    let combustivel = 250
    let taxaServico = 100

    let dias = document.getElementById('slct_dias')

    // dias.addEventListener("load", Alugar)

    if (dias.value == "") {
        document.getElementById("valorTotal_diarias").innerHTML = `R$adasdasd`
    }
    let calcDiaria = diaria * Number(dias.value)
    let calcCombustivel = combustivel * Number(dias.value)

    document.getElementById("spanDiarias").innerHTML = ` ${dias.value}`
    document.getElementById("valorTotal_diarias").innerHTML = `R$${calcDiaria}`

    document.getElementById("spanCombustivel").innerHTML = `${dias.value}`
    document.getElementById("span_totalCombustivel").innerHTML = `R$${calcCombustivel}`

    let calcTotal = calcDiaria + calcCombustivel + taxaServico

    document.getElementById("spanValorTotal").innerHTML = `R$${calcTotal}`

    localStorage.setItem('Total', JSON.stringify(calcTotal))
    localStorage.setItem('dias', JSON.stringify(dias.value))
}

//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

//>>>>>>>>>>>>>>>>>> VERIFICACAO LOGIN <<<<<<<<<<<<<<<<<<<<<<
function AlugarIate() {

    verificarLogin = JSON.parse(localStorage.getItem('userLogado'))
    console.log(` Verificando o login ${verificarLogin}`)
    let Total = JSON.parse(localStorage.getItem('Total'))
    let totalDias = JSON.parse(localStorage.getItem('dias'))


    if (verificarLogin == null) {

        document.getElementById("containerPopup").style.display = "block"
    } else if (totalDias != 0 && Total != 0) {
        Swal.fire(
            'Tudo pronto!',
            `Olá, ${verificarLogin.User}! Sua reserva está feita!<br>Dias reservados: ${totalDias}<br>Total do aluguel: R$${Total} 
             <br><br>Enviaremos um email de confirmação com os dados.`,
            'success',

        )
    } else {
        Swal.fire(
            'Algo errado!',
            `Certifique-se que selecionou os dias!`,
            'warning'
        )
    }

    localStorage.setItem('Total', JSON.stringify(0))
    localStorage.setItem('dias', JSON.stringify(0))
    historico("/src/assets/imagens/IATE/Iate  Antago 97 (2010)/011111.jpg", "Techenema 65", totalDias, Total)
    localStorage.setItem("FlagHistorico",'sim')}

//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>




//---------------------------------------------------------LANCHA ----------------------------------------------------------------------------------------
function ValoresLancha() {
    let diaria = 2990
    let combustivel = 250
    let taxaServico = 100

    let dias = document.getElementById('slct_dias')

    // dias.addEventListener("load", Alugar)

    if (dias.value == "") {
        document.getElementById("valorTotal_diarias").innerHTML = `R$adasdasd`
    }
    let calcDiaria = diaria * Number(dias.value)
    let calcCombustivel = combustivel * Number(dias.value)

    document.getElementById("spanDiarias").innerHTML = ` ${dias.value}`
    document.getElementById("valorTotal_diarias").innerHTML = `R$${calcDiaria}`

    document.getElementById("spanCombustivel").innerHTML = `${dias.value}`
    document.getElementById("span_totalCombustivel").innerHTML = `R$${calcCombustivel}`

    let calcTotal = calcDiaria + calcCombustivel + taxaServico

    document.getElementById("spanValorTotal").innerHTML = `R$${calcTotal}`

    localStorage.setItem('Total', JSON.stringify(calcTotal))
    localStorage.setItem('dias', JSON.stringify(dias.value))

}

//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

//>>>>>>>>>>>>>>>>>> VERIFICACAO LOGIN <<<<<<<<<<<<<<<<<<<<<<
function AlugarLancha() {

    verificarLogin = JSON.parse(localStorage.getItem('userLogado'))
    console.log(` Verificando o login ${verificarLogin}`)
    let Total = JSON.parse(localStorage.getItem('Total'))
    let totalDias = JSON.parse(localStorage.getItem('dias'))


    if (verificarLogin == null) {

        document.getElementById("containerPopup").style.display = "block"
    } else if (totalDias != 0 && Total != 0) {
        Swal.fire(
            'Tudo pronto!',
            `Olá, ${verificarLogin.User}! Sua reserva está feita!<br>Dias reservados: ${totalDias}<br>Total do aluguel: R$${Total} 
             <br><br>Enviaremos um email de confirmação com os dados.`,
            'success',

        )
    } else {
        Swal.fire(
            'Algo errado!',
            `Certifique-se que selecionou os dias!`,
            'warning'
        )
    }

    localStorage.setItem('Total', JSON.stringify(0))
    localStorage.setItem('dias', JSON.stringify(0))
    historico("/src/assets/imagens/LANCHAS/VEGA 290 - 2012 - @@@/img2.jpg", "Vega 290", totalDias, Total)
    localStorage.setItem("FlagHistorico", JSON.stringify('sim'))}

//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

//---------------------------------------------------------VELEIRO----------------------------------------------------------------------------------------
function ValoresVeleiro() {
    let diaria = 1380
    let combustivel = 0
    let taxaServico = 150

    let dias = document.getElementById('slct_dias')

    // dias.addEventListener("load", Alugar)

    if (dias.value == "") {
        document.getElementById("valorTotal_diarias").innerHTML = `R$adasdasd`
    }
    let calcDiaria = diaria * Number(dias.value)
    let calcCombustivel = combustivel * Number(dias.value)

    document.getElementById("spanDiarias").innerHTML = ` ${dias.value}`
    document.getElementById("valorTotal_diarias").innerHTML = `R$${calcDiaria}`

    // document.getElementById("spanCombustivel").innerHTML = `${dias.value}`
    // document.getElementById("span_totalCombustivel").innerHTML = `R$${calcCombustivel}`

    let calcTotal = calcDiaria + calcCombustivel + taxaServico

    document.getElementById("spanValorTotal").innerHTML = `R$${calcTotal}`

    localStorage.setItem('Total', JSON.stringify(calcTotal))
    localStorage.setItem('dias', JSON.stringify(dias.value))

}

//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

//>>>>>>>>>>>>>>>>>> VERIFICACAO LOGIN <<<<<<<<<<<<<<<<<<<<<<
function AlugarVeleiro() {

    verificarLogin = JSON.parse(localStorage.getItem('userLogado'))
    console.log(` Verificando o login ${verificarLogin}`)
    let Total = JSON.parse(localStorage.getItem('Total'))
    let totalDias = JSON.parse(localStorage.getItem('dias'))


    if (verificarLogin == null) {

        document.getElementById("containerPopup").style.display = "block"
    } else if (totalDias != 0 && Total != 0) {
        Swal.fire(
            'Tudo pronto!',
            `Olá, ${verificarLogin.User}! Sua reserva está feita!<br>Dias reservados: ${totalDias}<br>Total do aluguel: R$${Total} 
             <br><br>Enviaremos um email de confirmação com os dados.`,
            'success',

        )
    } else {
        Swal.fire(
            'Algo errado!',
            `Certifique-se que selecionou os dias!`,
            'warning'
        )
    }

    localStorage.setItem('Total', JSON.stringify(0))
    localStorage.setItem('dias', JSON.stringify(0))
    historico("/src/assets/imagens/veleiro/Catamarã -  1/011.jpg", "Ro 400", totalDias, Total)
    localStorage.setItem("FlagHistorico", JSON.stringify('sim'))
}

//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>


function historico(imgBarcos, barco, totalDias, gasto) {
    console.log(imgBarcos)
   let atualizou = JSON.parse(localStorage.getItem('FlagHistorico'))
   console.log(atualizou)
    if ((atualizou == "sim")) {
        let vetorHistorico = JSON.parse(localStorage.getItem('vetorHistoricoUser')) || []


        let historicoUser = {
            ImagemBarco: imgBarcos,
            Aluguel: barco,
            Dias: totalDias,
            Total: gasto
        }
        vetorHistorico.push(historicoUser)
        localStorage.setItem("vetorHistoricoUser", JSON.stringify(vetorHistorico))


       mostrarHistorico()
        // localStorage.setItem("FlagHistorico", JSON.stringify('nao'))
    }
}

function mostrarHistorico(){
    let vetorHistorico = JSON.parse(localStorage.getItem('vetorHistoricoUser')) || []
    for (let i = 0; i < vetorHistorico.length; i++) {
        console.log(vetorHistorico[i].Aluguel)
        let containerHistorico = document.getElementById('container-historico')

        let historicoDiv = document.createElement('div')
        historicoDiv.setAttribute('id', `historico-${i}`)
        let imagem = document.createElement('img')
        imagem.setAttribute('src', vetorHistorico[i].ImagemBarco)

        let paraAluguel = document.createElement('p')
        paraAluguel.classList.add('spanHistorico')

        let paraDias = document.createElement('p')
        paraDias.classList.add('spanHistorico')

        let paraTotal = document.createElement('p')
        paraTotal.classList.add('spanHistorico')

        // if (vetorHistorico[i].Aluguel != null) {
            let texto = document.createTextNode(`Veículo Aquático: ${vetorHistorico[i].Aluguel}`)
            let texto2 = document.createTextNode(`Dias reservados: ${vetorHistorico[i].Dias}`)
            let texto3 = document.createTextNode(`Total R$: ${vetorHistorico[i].Total}`)
            paraAluguel.appendChild(texto)
            paraDias.appendChild(texto2)
            paraTotal.appendChild(texto3)
            historicoDiv.appendChild(imagem)
            historicoDiv.appendChild(paraAluguel)
            historicoDiv.appendChild(paraDias)
            historicoDiv.appendChild(paraTotal)
            containerHistorico.appendChild(historicoDiv)
        // }
    }
    
}




