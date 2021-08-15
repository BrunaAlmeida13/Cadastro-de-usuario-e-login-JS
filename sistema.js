function cadastrarUsuario() {
   if(typeof(Storage) !== "undefined"){
       if(localStorage.cont){
           localStorage.cont = Number(localStorage.cont) + 1
       } else {
           localStorage.cont = 1
       }
        var nome = document.getElementById('nome')
        var email = document.getElementById('email')
        var usuario = document.getElementById('usuario')
        var senha = document.getElementById('senha')
        var projeto = document.getElementById('projeto')
        
        localStorage.ls_nome = nome.value
        localStorage.ls_email = email.value
        localStorage.ls_usuario = usuario.value
        localStorage.ls_senha = senha.value
        localStorage.ls_projeto = projeto.value  
   } else {
        alert('O navegador não dá suporte para localStorage!')
   } 
}

function passarDadoUsuario(){
    document.getElementById('usuariolog').value = localStorage.getItem("ls_email")
}

function logarUsuario(){
    var validaSenha = localStorage.getItem("ls_senha")
    var senhaEscrita = document.getElementById('senhalog').value
    
    if(validaSenha != senhaEscrita){
        alert('Senha incorreta!') 
        window.location.href = "index.html"
    } else {
        alert('Logado!')
    }
}