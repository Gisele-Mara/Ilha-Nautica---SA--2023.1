
let container_cadastros = document.getElementById("container-cadastros")
container_cadastros.addEventListener("click", clicouCadastro)
document.getElementById("container-esquerdo").style.display= 'none'
document.getElementById("container-direito").style.display = "none"


function clicouCadastro(e) {
    console.log(e.composedPath())
    console.log(e.target)
    console.log(e.target.id)




    //Condição para sair do popup  
document.getElementById("CliqueSkipper").addEventListener("click", function() {
    document.getElementById("CliqueSkipper").style.display = "none"
    document.getElementById("container-esquerdo").style.display = "flex"
    document.getElementById("container-direito").style.display = "none"
    document.getElementById("CliqueEmbarcacao").style.display = "block"
  })
  
  document.getElementById("CliqueEmbarcacao").addEventListener("click", function() {
    document.getElementById("CliqueEmbarcacao").style.display = "none"
    document.getElementById("container-esquerdo").style.display = "none"
    document.getElementById("container-direito").style.display = "flex"
    document.getElementById("CliqueSkipper").style.display = "block"
  })
  
}


// ================== INPUT SKIPPER =============

let nomeMarinheiroinput=document.getElementById("inptNome").value
let numeroisncricaoinput=document.getElementById("inptNumeroInscricao").value
let telefoneinput=document.getElementById("inptTel").value
let opcaoinput=document.getElementById("inptopicao").value
let emailinput=document.getElementById("inptemail").value
let senhainput=document.getElementById("inptemail").value
let confirmaSenhainput=document.getElementById("inptSenhaConfirma").value
let sexoSkiperinput=document.getElementsByClassName("sexo").value
let aniversarioinput=document.getElementById("inptdata").value


let vetorObjCadastros = []
function cadastrarSkipper() {
    
 let objCadastro =   {
        NomeMarinheiro: nomeMarinheiroinput,
        Inscricao: numeroisncricaoinput,
        Telefone: telefoneinput,
        opcao: opcaoinput,
        Email: emailinput,
        Senha: senhainput,
        confirmaSenha: confirmaSenhainput,
        sexoskipper: sexoSkiperinput,
        dataAniversario: aniversarioinput,
       
   
    }

  vetorObjCadastros = JSON.parse(localStorage.getItem('VetorObjetosSkipper'))

 if (vetorObjCadastros == null) {

    vetorObjCadastros=[]
    vetorObjCadastros.push(objCadastro)
   }  else {
    vetorObjCadastros.push(objCadastro)
    
    console.log(objCadastro)
}
localStorage.setItem('VetorObjetosSkipper', JSON.stringify(vetorObjCadastros))
//divResultado.innerHTML=`\n\n ${Object.values(objCadastro)} ` 
alert('Cadastro do marinheiro realizado')
window.location.href="/home.html"
}


// ====================== INPUT EMBARCAÇÃO ========

let divResultado = document.getElementById('resultado')

let vetorObjCadastrosBarcos = []
function cadastrarBarco() {
    
    let categoriaInput = document.getElementById('inptCategoria').value;
    let fabricacaoInput = document.getElementById("inptFabricante").value;
    let anoInput = document.getElementById("inptAno").value;
    let tamanhoInput = document.getElementById("inpttamanho").value;
    let passageirosInput = document.getElementById("inptpassageiros").value;
    let perNoiteInput = document.getElementById("inptpernoite").value;
    let animaisInput = document.getElementById("inptanimais").value;
    let emailInput = document.getElementById("inptemail").value;
    let senhaInput= document.getElementById("inptSenha").value;
    let banheirosInput = document.getElementById("inptBanheiros").value;
    let cabinesInput = document.getElementById("inptCabines").value;
    let embarqueInput = document.getElementById("inptEmbarque").value;
    let estadoInput = document.getElementById("inptEstado").value;
    let cidadeInput = document.getElementById("inptCidade").value;



 let objCadastro =   {
        Categoria: categoriaInput,
        Fabricacao: fabricacaoInput,
        Ano: anoInput,
        Tamanho: tamanhoInput,
        Passageiros: passageirosInput,
        PerNoite: perNoiteInput,
        Animais: animaisInput.value,
        Email: emailInput.value,
        Senha: senhaInput.value,
        Banheiro: banheirosInput.value,
        Cabines: cabinesInput,
        Embarque: embarqueInput,
        Estado: estadoInput,
        Cidade: cidadeInput
   
    }

    vetorObjCadastrosBarcos = JSON.parse(localStorage.getItem('VetorObjetosBarcos'))

 if (vetorObjCadastrosBarcos == null) {

  vetorObjCadastrosBarcos=[]
  vetorObjCadastrosBarcos.push(objCadastro)
   }  else {
    vetorObjCadastrosBarcos.push(objCadastro)
    
    console.log(objCadastro)
}
localStorage.setItem('VetorObjetosBarcos', JSON.stringify(vetorObjCadastrosBarcos))
//divResultado.innerHTML=`\n\n ${Object.values(objCadastro)} ` 
alert('Cadastro do barco realizado')
window.location.href="/home.html"
}



  
