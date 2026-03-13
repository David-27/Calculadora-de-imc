const nameUser = document.getElementById("input_name");
const altura = document.getElementById("input_altura");
const peso = document.getElementById("input_peso");


const btn_calcular = document.getElementById("btn_calcular");

const result_imc = document.getElementById("result_box");

const description = document.getElementById("description")

btn_calcular.addEventListener("click", function () {

    
    const resultado = Number(peso.value)/(Number(altura.value)* Number(altura.value));

    result_imc.innerHTML = "O IMC de " + nameUser.value + " é : " + resultado.toFixed(2);


    if (resultado < 18,5 ){
        description.innerHTML = "Abaixo do peso (Magreza)!"

    }else if(resultado >= 18,5 && resultado <= 2){
        
    }










});



