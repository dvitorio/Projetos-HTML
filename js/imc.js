function calcularImc(){
    var peso = document.getElementById("peso").value;
    var altura = document.getElementById("altura").value;
        imc = parseFloat(peso)/parseFloat((altura*altura)); 
            if(imc < 18.5){
                document.getElementById("resultado").innerHTML = "Peso abaixo do normal. Consulte um endocrinologista ou nutricionista!";
            }
            else if(imc > 18.5 && imc <= 24.9){
                document.getElementById("resultado").innerHTML = "Peso  normal. Parabéns!";
            }
            else if(imc >= 25 && imc <= 29.9){
                document.getElementById("resultado").innerHTML = "Você está com sobrepeso! Consulte um nutricionista!";
            }
            else if(imc >= 30 && imc <= 34.9){
                document.getElementById("resultado").innerHTML = "Obesidade (Grau 1)! Consulte um endocrinologista!";
            }
            else if(imc >= 35 && imc <= 39.9){
                document.getElementById("resultado").innerHTML = "Obesidade Severa (Grau 2)! Consulte um endocrinologista!";
            }  
            else if(imc >= 40){
                document.getElementById("resultado").innerHTML = "Obesidade Mórbida (Grau 3)! Consulte um endocrinologista!";
            }  
    document.getElementById("imc").value = imc.toFixed(2);
}

calcularImc();

