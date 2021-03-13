function logar(){
    
    var login = document.getElementById("email").value;
    var senha = document.getElementById("senha").value;

        if(login=="dvitorio2@gmail.com" && senha=="dvc314900"){
            alert("Login realizado com sucesso!");
            window.open("escolar_index.html");
            window.close("login.html");
        }
        else{
            alert("Login ou senha inválidos! Tente de novo.");
            window.open("login.html");
        }
}

logar();
