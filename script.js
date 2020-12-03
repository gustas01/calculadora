let valorPrincipal = []
// let valorHistorico = []

let operacao
let valor1

visorHistorico = document.getElementById("historico")
visorPrincipal = document.getElementById("principal")


Array.from(document.getElementsByClassName("numero")).forEach( e => {
    e.addEventListener("click", () => {
        valorPrincipal.push(e.value)
        visorPrincipal.value = valorPrincipal.join('')
    })
})


Array.from(document.getElementsByClassName("operador")).forEach( e => {
    e.addEventListener("click", () => {
        if(visorPrincipal.value !== ''){
            operacao = e.value
            valor1 = Number(visorPrincipal.value)
            visorHistorico.value = visorPrincipal.value + " " + operacao
        }
        visorPrincipal.value = ''
        valorPrincipal = []
    })
})


document.getElementById("limpar").addEventListener("click", () => {
        visorPrincipal.value = 0
        valorPrincipal = []
        valor1 = 0
        operacao = ''
        visorHistorico.value = null
    })


document.getElementById("resetarValor").addEventListener("click", () => {
    valorPrincipal = []
    visorPrincipal.value = 0
})


document.getElementById("oposto").addEventListener("click", () => {
    visorPrincipal.value = Number(visorPrincipal.value * -1)
    if (valorPrincipal.indexOf('-') < 0){
        valorPrincipal.unshift('-')
    }else{
        valorPrincipal.shift('-')
    }
})


document.getElementById("ponto").addEventListener("click", () => {
    if(valorPrincipal.indexOf('.') < 0){
        valorPrincipal.push('.')
        // visorPrincipal.value = valorPrincipal.join('')
        visorPrincipal.value += '.'
    }
})


document.getElementById("backspace").addEventListener("click", () => {
    valorPrincipal.pop()
    visorPrincipal.value = valorPrincipal.join('')
})

document.getElementById("raiz").addEventListener("click", () => {
    visorHistorico.value = "√" + visorPrincipal.value
    valorPrincipal = [Math.sqrt(visorPrincipal.value)]
    visorPrincipal.value = Math.sqrt(visorPrincipal.value)
})

document.getElementById("quadrado").addEventListener("click", () => {
    visorHistorico.value = visorPrincipal.value + "^" + 2
    valorPrincipal = [Math.pow(visorPrincipal.value, 2)]
    visorPrincipal.value = Math.pow(visorPrincipal.value, 2)
})

document.getElementById("inverter").addEventListener("click", () => {
    visorHistorico.value = "1/" + visorPrincipal.value
    valorPrincipal = [Number(1/visorPrincipal.value)]
    visorPrincipal.value = Number(1/visorPrincipal.value)
})

document.getElementById("pi").addEventListener("click", () => {
    valorPrincipal.push(Math.PI)
    visorPrincipal.value = valorPrincipal.join('')
})

document.getElementById("igual").addEventListener("click", () => {
    if(operacao && valor1 && visorPrincipal.value)
    visorHistorico.value = valor1 + " " + operacao + " " + valorPrincipal.join('')
    switch (operacao) {
        case '+':
            visorPrincipal.value = Number(valor1) + Number(valorPrincipal.join('')) 
            break
        
        case '-':
            visorPrincipal.value = Number(valor1) - Number(valorPrincipal.join('')) 
            break
            
        case 'x':
            visorPrincipal.value = Number(valor1) * Number(valorPrincipal.join(''))     
            break
        
        case '/':
            visorPrincipal.value = Number(valor1) / Number(valorPrincipal.join(''))     
            break
    }
    valor1 = visorPrincipal.value

})