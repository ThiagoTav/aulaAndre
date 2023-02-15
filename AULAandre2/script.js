var btnCalcular = document.getElementById("calcular");
btnCalcular.addEventListener("click", calcular);

function calcular()  {
    var salario = document.getElementById("salario").value;
    var inss = calcularINSS(salario)
    var irrf = calcularIRRF (salario, inss)
    var vt = calcularVT(salario)

    exibir(salario, inss, irrf, vt)
    
}

function calcularIRRF(valSalario, valINSS) {
    var qtdDependentes = document.getElementById("dependentes").value
    var SalarioBase = valSalario - valINSS - 189.59 * qtdDependentes
    var valIRRF = 0;

    if (SalarioBase <= 1903.98) {
        valIRRF = 0;
    } else if (SalarioBase <= 2826.65){
        valIRRF = SalarioBase * 0.075 - 142.80;
    } else if (SalarioBase <= 3751.05){
        valIRRF = SalarioBase * 0.15 - 354.80;
    } else if (SalarioBase <= 4664.68){
        valIRRF = SalarioBase * 0.225 - 636.13;
    } else {
        valIRRF = SalarioBase * 0.275 - 869.36;
    }
    
    window.alert(valIRRF)
    return Math.round(valIRRF * 100) / 100 ;

}

function calcularVT(varSalario) {
    var valor = 0;
    var optVT = document.getElementById("valetransporte").checked
    if(optVT) {
        valor = Math.round (valSalario * 6) / 100
    } else {

        valor = 0
    }
    return valor;
}

function calcularINSS(valSalario) {         //CALCULO INSS
    var salFaixa = 0;
    var valorINSS = 0;

    switch (true) {
        case valSalario >= 7507.49:     //ACIMA DA FAIXA
            valSalario = 7507.49


        case valSalario >= 3856.94:     // FAIXA 4
            salFaixa = valSalario - 3856.94
            valorINSS += salFaixa * 0.14;
            valSalario = 3856.94;


        case valSalario >= 2571.29:     // FAIXA 3
            salFaixa = valSalario - 2571.29
            valorINSS += salFaixa * 0.12;
            valSalario = 2571.29


        case valSalario >= 1302:        // FAIXA 2
            salFaixa = valSalario - 1302;
            valorINSS += salFaixa * 0.09;
            valSalario = 1302;
        
        default:
            salFaixa = valSalario;
            valorINSS += salFaixa * 0.075;
        
        
    }

    window.alert(valorINSS)
    return Math.round(valorINSS * 100) / 100 ;
}

function exibir(valSalario, valINSS, valIRRF, valVT){ }