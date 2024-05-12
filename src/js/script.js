let script = document.createElement('script');
let scriptIcons = document.createElement('script');
let scriptPesquisa = document.createElement('script');

script.src =
  "https://cdn.jsdelivr.net/npm/sweetalert2@11";
document.head.appendChild(script)
scriptIcons.src =
  "https://kit.fontawesome.com/4d527ab0dc.js";
document.head.appendChild(scriptIcons)

scriptPesquisa.src = "/src/js/pesquisa.js"
document.head.appendChild(scriptPesquisa)









// ===================== SLIDE =============
var slideshows = document.querySelectorAll('[data-component="slideshow"]');

// Aplica a todas as apresentações de slides que você define com o HTML escrito
slideshows.forEach(initSlideShow)

function initSlideShow(slideshow) {

  var slides = document.querySelectorAll(`#${slideshow.id} [role="list"] .slide`)

  var index = 0, time = 5000
  slides[index].classList.add('active')

  setInterval(() => {
    slides[index].classList.remove('active')

   
    index++

   
    if (index === slides.length) index = 0

    slides[index].classList.add('active')

  }, time)
}

//=================== #POPUP#      =================
document.addEventListener("click", clicouMenu)

function clicouMenu(e) {
  let container_popup = document.getElementById("containerPopup")
  let container_popup_editar = document.getElementById("containerPopupEditar")
  let flagLogin
  let flagEditar

  //Condição para sair do popup
  if (e.target.id == "containerPopup") {

    console.log(`ID target: ${e.target.id}`)
    flagLogin = 'none'
  }
  if (e.target.id == "containerPopupEditar") {
    console.log(`ID target container: ${e.target.id}`)
    flagEditar = 'none'
  }

  // Condição para abrir popup
  for (let i = 0; i < e.composedPath().length; i++) {

    if (e.composedPath()[i].nodeName == 'A') {
      let opcaoMenu = e.composedPath()[i].innerText
      console.log(`Clicou hein:  ${e.composedPath()[i].innerText}`)
      switch (opcaoMenu) {
        case "Entrar | Cadastrar":
          flagLogin = 'flex'
          break
        case "Editar perfil":
          if (JSON.parse(localStorage.getItem('userLogado')) == null) {
            flagLogin = 'flex'
          } else {
            flagEditar = 'flex'
            aparecerUserLogado()
          }
          break;
        case "Histórico":
          if (JSON.parse(localStorage.getItem('userLogado')) != null) {
          window.location.href = '/src/HTML/historico.html'
        }else{
          flagLogin = 'flex'
        }
          break;
        case "Sair":
          logout()
          break;
      }
    }
  }
  container_popup.style.display = flagLogin
  container_popup_editar.style.display = flagEditar
}


//=================     #FIM POPUP# =============

// =================  INPUT   LOGIN        ==================
var btnSignin = document.querySelector("#signin")
var btnSignup = document.querySelector("#signup")

// Seleciona o elemento body do documento
var body = document.querySelector("body")

// função para troca de tela
btnSignin.addEventListener("click", function () {
  body.className = "sign-in-js";
});

btnSignup.addEventListener("click", function () {
  body.className = "sign-up-js"
})

// Função para alternar a visibilidade da senha '' sign up''
function alternarPasswordVisibilidade() {
  var passwordInput = document.getElementById("password-input")
  var passwordIcon = document.getElementById("password-icon")

  if (passwordInput.type === "password") {
    passwordInput.type = "text"
    passwordIcon.classList.remove("fa-eye-slash")
    passwordIcon.classList.add("fa-eye")
  } else {
    passwordInput.type = "password"
    passwordIcon.classList.remove("fa-eye")
    passwordIcon.classList.add("fa-eye-slash")
  }
}

// Função para alternar a visibilidade da senha no botão "Sign in"
function alternarPasswordVisibilidadeSignIn() {
  const passwordInput = document.getElementById("login-password");
  const passwordIcon = document.getElementById("password-icon-signin");

  if (passwordInput.type === "password") {
    passwordInput.type = "text"
    passwordIcon.classList.remove("fa-eye-slash")
    passwordIcon.classList.add("fa-eye")
  } else {
    passwordInput.type = "password"
    passwordIcon.classList.remove("fa-eye")
    passwordIcon.classList.add("fa-eye-slash")
  }
}


function alternarPasswordVisibilidade() {
  const passwordInput = document.getElementById("signup-password")
  const passwordIcon = document.getElementById("password-icon")

  if (passwordInput.type === "password") {
    passwordInput.type = "text"
    passwordIcon.classList.add("fa-eye")
  } else {
    passwordInput.type = "password"
    passwordIcon.classList.remove("fa-eye")
    passwordIcon.classList.add("fa-eye-slash")
  }
}

function alternarconfirmarPasswordVisibilidade() {
  const confirmarPasswordInput = document.getElementById("signup-confirmarPassword")
  const confirmarPasswordIcon = document.getElementById("confirmarPassword-icon")

  if (confirmarPasswordInput.type === "password") {
    confirmarPasswordInput.type = "text"
    confirmarPasswordIcon.classList.remove("fa-eye-slash")
    confirmarPasswordIcon.classList.add("fa-eye")
  } else {
    confirmarPasswordInput.type = "password"
    confirmarPasswordIcon.classList.remove("fa-eye")
    confirmarPasswordIcon.classList.add("fa-eye-slash")
  }
}

// ============================     FIM INPUT       =========================================


// =============== VERIFICAÇÃO DE CADASTRO E LOGIN =================
let nomeCadastro = document.getElementById("signup-username")
let emailCadastro = document.getElementById("signup-email")
let senhaCadastro = document.getElementById("signup-password")
let confirmararSenhaCadastro = document.getElementById("signup-confirmarPassword")
let vetorUsers = []



function registrar() {
  let nomeJaExiste = false
  let emailJaExiste = false

  let usuario = {

    username: '',
    password: '',
    email: ''


  }

  usuario.username = nomeCadastro.value
  usuario.password = senhaCadastro.value
  usuario.email = emailCadastro.value



  if (nomeCadastro.value != "" && emailCadastro.value != "" && senhaCadastro.value != "" && confirmararSenhaCadastro.value != "") {
    if (senhaCadastro.value == confirmararSenhaCadastro.value) {
      vetorUsers = JSON.parse(localStorage.getItem('usuarioSalvo'))


      if (vetorUsers == null) {

        vetorUsers = []

        vetorUsers.push(usuario)
        localStorage.setItem('usuarioSalvo', JSON.stringify(vetorUsers))



      } else {
        for (i = 0; i < vetorUsers.length; i++) {
          if (nomeCadastro.value == vetorUsers[i].username) {

            nomeJaExiste = true
          }
          if (emailCadastro.value == vetorUsers[i].email) {

            emailJaExiste = true
          }
          if (nomeCadastro.value == vetorUsers[i].username && emailCadastro.value == vetorUsers[i].email) {

            emailJaExiste = true
            nomeJaExiste = true
          }
        }
        if (nomeJaExiste == true && emailJaExiste != true) {
          alert("Nome já está sendo usado")
        }
        if (emailJaExiste == true && nomeJaExiste != true) {
          alert("Email já está sendo usado")
        }
        if (nomeJaExiste == true && emailJaExiste == true) {
          alert("Nome e email já estão sendo usados")
        }
        if (nomeJaExiste == false && emailJaExiste == false) {
          vetorUsers.push(usuario)
          localStorage.setItem('usuarioSalvo', JSON.stringify(vetorUsers))

          Swal.fire(
            'Cadastro concluído',
            '',
            'success'
          )



        }


      }
    } else {
      document.getElementById('div_avisoErro').innerHTML = 'Senhas diferentes'
    }

  } else {
    if (nomeCadastro.value == "" && emailCadastro.value != "" && senhaCadastro.value != "" && confirmararSenhaCadastro.value != "") {
      document.getElementById('div_avisoErro').innerHTML = 'Nome não pode estar vazio'
    }
    if (nomeCadastro.value != "" && emailCadastro.value == "" && senhaCadastro.value != "" && confirmararSenhaCadastro.value != "") {
      document.getElementById('div_avisoErro').innerHTML = 'Email não pode estar vazio'
    }
    if (nomeCadastro.value != "" && emailCadastro.value != "" && senhaCadastro.value == "" && confirmararSenhaCadastro.value != "") {
      document.getElementById('div_avisoErro').innerHTML = 'Senha não pode estar vazia'
    }
    if (nomeCadastro.value != "" && emailCadastro.value != "" && senhaCadastro.value != "" && confirmararSenhaCadastro.value == "") {
      document.getElementById('div_avisoErro').innerHTML = 'Confirmar senha não pode estar'
    }
    if (nomeCadastro.value == "" && emailCadastro.value == "" && senhaCadastro.value == "" && confirmararSenhaCadastro.value == "") {
      document.getElementById('div_avisoErro').innerHTML = 'Preencha todos os campos'
    }
  }

  //Limpando Input
  nomeCadastro.value = ""
  senhaCadastro.value = ""
  emailCadastro.value = ""
  confirmararSenhaCadastro.value = ''

}

// =================     LOGIN       ================

let nomeLogin = document.getElementById("login-username")
let senhaLogin = document.getElementById("login-password")
let loginConcluido = document.getElementById("login-completo")


function logar() {
  let usuarioExiste = false
  vetorUsers = JSON.parse(localStorage.getItem('usuarioSalvo'))
  console.log(vetorUsers)
  if (nomeLogin.value == "" || senhaLogin.value == "") {
    document.getElementById('div_avisoErroLogin').innerHTML = 'Preencha todos os campos'
  }
  if (nomeLogin.value != "" && senhaLogin.value != "") {
    for (i = 0; i < vetorUsers.length; i++) {

      // Verificando se usuário já existe
      if (nomeLogin.value == vetorUsers[i].username && senhaLogin.value == vetorUsers[i].password) {
        usuarioExiste = true
        let userLogado = {
          User: vetorUsers[i].username,
          EmailUser: vetorUsers[i].email
        }



        Swal.fire(
          'Login concluído',
          '',
          'success'
        )


        localStorage.setItem('userLogado', JSON.stringify(userLogado))
        localStorage.setItem('Indice', JSON.stringify(i))

        //loginConcluido.innerHTML = "Login concluido"

        JSON.parse(localStorage.setItem('corBotao', JSON.stringify('linear-gradient(to bottom, #10afc4 20%, #055745 80%)')))



        // document.getElementById("containerPopup").style.display = "none"

      }
      // window.location.href = "www.google.com"
      if (nomeLogin.value == vetorUsers[i].username && senhaLogin.value != vetorUsers[i].password) {
        document.getElementById('div_avisoErroLogin').innerHTML = 'Senha incorreta'
        usuarioExiste = true
      }

    }
    if (usuarioExiste == false) {
      document.getElementById('div_avisoErroLogin').innerHTML = 'Usuário incorreto ou não existe'
    }
  }

  // Limpando Input
  nomeLogin.value = ""
  senhaLogin.value = ""
  location.reload()
}


// =========== COR BOTÃO DEPOIS DO LOGIN ========
document.addEventListener('mousemove', corMenu)
function corMenu() {

  let corBotaoPerfil = JSON.parse(localStorage.getItem('corBotao'))
  document.getElementById('botao-perfil').style.background = corBotaoPerfil
  if (corBotaoPerfil == null) {
    document.getElementById('botao-perfil').style.background = 'white'
  }
}
// ====================       FIM CONFIGURAÇOES LOGIN          =======================
// ===============       EDITAR PERFIL          ==========
function editar() {
  let editarNomeCadastro = document.getElementById("edit-username")
  let editarEmailCadastro = document.getElementById("edit-email")
  let editarSenhaCadastro = document.getElementById("edit-password")
  let editarconfirmaraSenhaCadastro = document.getElementById("edit-confirmarPassword")

  //Criando vetor do usuario a editar
  let vetorUsersEditar = []
  // Pegando os os dados(vetor já criados de todos os usuarios);
  vetorUsersEditar = JSON.parse(localStorage.getItem('usuarioSalvo'))

  console.log(vetorUsersEditar.username)

  //Pegando o indice(posição) do usuario a editar;
  let indice = JSON.parse(localStorage.getItem('Indice'))
  console.log(`O indice: ${indice}`)

  console.log(`Esse é o usuario que está editando os seus dados: ${vetorUsersEditar[indice]}`)
  let usuario = vetorUsersEditar[indice]
  console.log("aaaa" + usuario)



  ///-----------validar entrada de dados ---------------------


  let nomeJaExiste = false
  let emailJaExiste = false

  if (editarNomeCadastro.value != "" && editarEmailCadastro.value != "" && editarSenhaCadastro.value != "" && editarconfirmaraSenhaCadastro.value != "") {
    if (editarSenhaCadastro.value == editarconfirmaraSenhaCadastro.value) {
      for (i = 0; i < vetorUsersEditar.length; i++) {
        if (indice != i) {
          if (editarNomeCadastro.value == vetorUsersEditar[i].username) {

            nomeJaExiste = true
          }
          if (editarEmailCadastro.value == vetorUsersEditar[i].email) {

            emailJaExiste = true
          }
          if (editarNomeCadastro.value == vetorUsersEditar[i].username && editarEmailCadastro.value == vetorUsersEditar[i].email) {

            emailJaExiste = true
            nomeJaExiste = true
          }
        }


      }
      if (nomeJaExiste == true && emailJaExiste != true) {
        document.getElementById('div_avisoErro').innerHTML = 'Nome de usuário já cadastrado'
      }
      if (emailJaExiste == true && nomeJaExiste != true) {
        document.getElementById('div_avisoErro').innerHTML = 'Email já cadastrado'
      }
      if (nomeJaExiste == true && emailJaExiste == true) {
        document.getElementById('div_avisoErro').innerHTML = 'Nome e Email já cadastrados'
      }
      if (nomeJaExiste == false && emailJaExiste == false) {
        usuario.username = editarNomeCadastro.value
        usuario.password = editarSenhaCadastro.value
        usuario.email = editarEmailCadastro.value
        let vetorUsers = vetorUsersEditar
        localStorage.setItem('usuarioSalvo', JSON.stringify(vetorUsers))

        document.getElementById('div_avisoErro').innerHTML = ''

        Swal.fire(
          'Perfil editado',
          'Faça login novamente',
          'success'
        )

        logout()
        flagEditando = false
        location.reload()
        aparecerUserLogado()
      }

    } else if (editarSenhaCadastro.value != editarconfirmaraSenhaCadastro.value) {
      document.getElementById('div_avisoErro').innerHTML = 'As senhas precisam ser iguais'
    }
  } else if (editarNomeCadastro.value == "" || editarEmailCadastro.value == "" || editarSenhaCadastro.value == "" || editarconfirmaraSenhaCadastro.value == "") {
    document.getElementById('div_avisoErro').innerHTML = 'Preencha todos os campos'
  }
}
// =================== APARECER USER NO EDIT ==========
// var containerEditar = document.getElementById('container-editar')
// document.addEventListener("mouseover", aparecerUserLogado)

let flagEditando = false
function aparecerUserLogado() {

  if (flagEditando == false) {
    let objUserLogado = []
    objUserLogado = JSON.parse(localStorage.getItem('userLogado'))
    console.log(objUserLogado)
    if (objUserLogado != null) {
      document.getElementById("edit-username").value = objUserLogado.User
      document.getElementById("edit-email").value = objUserLogado.EmailUser
      let divUsername = document.getElementById("username-atual")
      divUsername.innerHTML = `${objUserLogado.User}!`
      flagEditando = true;
    }

  }
}

// ===================== FIM CONFIGURAÇÕES EDITAR      ============


//  =================     LOGOUT           ================

function logout() {
  localStorage.removeItem('userLogado')
  localStorage.removeItem('corBotao')


  Swal.fire({
    position: 'center',
    icon: 'success',
    title: 'Logout concluído',
    showConfirmButton: false,
    timer: 1500
  })
  document.getElementById('botao-perfil').style.backgroundColor = 'white'
  aparecerUserLogado()
  localStorage.removeItem('vetorHistoricoUser')
  location.reload()

}
// =========================================================

if (JSON.parse(localStorage.getItem('userLogado') != null)) {
  let botaoDiv = document.getElementById('botao-perfil-div')
  let tooltipDiv = document.createElement('div')
  tooltipDiv.classList.add('tooltip')
  spanTooltip = document.createElement('span')
  spanTooltip.classList.add('tooltiptext')
  tooltipDiv.appendChild(spanTooltip)
  botaoDiv.appendChild(tooltipDiv)

  let objetoUserLogado = JSON.parse(localStorage.getItem('userLogado'))

  spanTooltip.innerHTML = `Bem-vindo, ${objetoUserLogado.User}!`
}
// ===============     FIM CONFIGURAÇOES LOGOUT  ==================

//=================      EXCLUIR USUARIO         =====================

function deletarUsuario() {
  let indice = JSON.parse(localStorage.getItem('Indice'))
  let vetorDeletando = []
  vetorDeletando = JSON.parse(localStorage.getItem('usuarioSalvo'))
  vetorDeletando.splice(indice, 1)
  localStorage.removeItem('userLogado')
  localStorage.removeItem('corBotao')
  aparecerUserLogado()
  let vetorUsers = vetorDeletando
  localStorage.setItem('usuarioSalvo', JSON.stringify(vetorUsers))


  Swal.fire({
    position: 'center',
    icon: 'warning',
    title: 'Usuário deletado',
    showConfirmButton: false,
    timer: 1500
  })
  logout()
}

// =================================
// =========== PESQUISA ================

let pesquisa = document.getElementById('pesquisa')

pesquisa.addEventListener('keydown', procurar)
function procurar(event) {
  if (event.key === "Enter") {
    window.location.href = '/src/HTML/pesquisa.html'
    localStorage.setItem('pesquisaLocal', JSON.stringify(pesquisa.value))
  }
}



// ================ ABRIR PÁGINAS DE ALUGUEL ===========