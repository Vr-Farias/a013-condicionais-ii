const num = prompt("Diga um número")

// ifs aninhados
if (num % 2 === 0){
    console.log("Número divsível por 2")
    if (num % 3 === 0){
        console.log("Número é divisível por 3")
    }
}else{
    console.log("Número não é divisível por 2 nem por 3")
};

//operador lógico
if(num % 2 === 0 && num % 3 === 0){
    console.log("Número é divisível por 2 e por 3")
    if(num % 2 === 0 || num % 3 ===0){
        console.log("Número é divisível por 2 ou por 3")
    }
}else{
    console.log("Número não é divisível por 2 nem por 3")
}