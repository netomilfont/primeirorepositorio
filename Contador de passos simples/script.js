function contarpassos () {
    let inipass = document.getElementById('numInicio')
    let fimpass = document.getElementById('numFim')
    let qpassos = document.getElementById('numPass')
    let res = document.getElementById('res')

    if (inipass.value.length == 0 || fimpass.value.length == 0 || qpassos.value.length == 0) {
        res.innerHTML = 'Impossível contar!'
        // alert('[ERRO] Faltam dados!')
        
    } else {
        res.innerHTML = 'Contando: <br>'
        let i = Number(inipass.value)
        let f = Number(fimpass.value)
        let p = Number(qpassos.value)
        if (p <= 0) {
            alert(`Passo inválido! Considerando que o passo escolhido seja no VALOR 1`)
            p = 1
        } else if (i < f) {
            // CONTAGEM CRESCENTE
            for(let c = i; c <= f; c += p) {
                res.innerHTML += `${c} \u{1F3C3} `
             }
            
        } else {
            //CONTADEM REGRESSIVA
            for( let c = i; c >= f; c -= p ) {
                res.innerHTML += `${c} \u{1F3C3} `
            }
        }
        res.innerHTML += `\u{1F3C1}`
    }
}