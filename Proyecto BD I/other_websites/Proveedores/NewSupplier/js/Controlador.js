$(document).ready(function(){
    
});

function Retornar(){
    window.location.href="../index.html"
}

function HabilitarCredito(){
    var CreditoCheck = document.getElementById('TamaniCheckbox').checked;
    var InformacionCreditos = document.getElementById('InfoCreditos');
    if(CreditoCheck == false){
        InformacionCreditos.style.display = "none";
    }else{
        InformacionCreditos.style.display = "flex";
    }
}
function cambiar(){
    var select = document.getElementById("TimeCredit"); //El <select>
    var divCreditosMasDe30 = document.getElementById("TimeCreditMasDe30");
        value = select.value, //El valor seleccionado
        text = select.options[select.selectedIndex].innerText; //El texto de la opción seleccionada
        if(text == "Mas..."){
            console.log(text);
            divCreditosMasDe30.style.display = "flex";
        }else{
            divCreditosMasDe30.style.display = "none";
        }
}