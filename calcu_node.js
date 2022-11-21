const prompt = require('prompt-sync')({sigint: true});

let continuar = true
const hablada= `
    Seleccione una opcion +-*/
    x para reiniciar
`

const calculadora= function (){
    let total = 0
    
    const operation=function (num, symbol){
    
        if (symbol=="+"){
            total=total+num
        }
        else if (symbol=="-"){
            total=total-num
        }
        else if (symbol=="*"){
            total=total*num
        }
        else if (symbol=="/"){
            total=total/num
        }
        else if (symbol=="x" | symbol=="X"){
            total=0
        }

        return total
    }
    return operation
}

const usingCalc = calculadora() // no se ejecuta hasta q se llama
 //aca solo se declara aka guara en memoria

while(continuar){
    console.log(hablada)
    let simbolo = prompt("Digite la operacion a relizar ")
    let num = prompt("Digite un numero ")
    num=Number(num)
    
    if (isNaN(num)){
        console.log("Ha insertado un caracter invalido, por favor digite un numero")
    }

    else if (simbolo!="+" && simbolo!="-" && simbolo!="*" && simbolo!="/" &&  simbolo!="x" && simbolo!="X"){
        console.log("Ha insertado una operacion invalida, digite +-*/")
    }

    else{
        usingCalc(num, simbolo)
        zorro = usingCalc()
        console.log(zorro)
    }

    let runAgaing = prompt("Desea continuar S/N?")
    runAgaing === "n" | runAgaing === "N" ? continuar = false : a=0
}
