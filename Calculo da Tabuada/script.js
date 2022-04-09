function tabuada (){
    let numb = document.querySelector('input#num')
    let tab = document.querySelector('select#seltab')

    if( numb.value.length == 0 ) {
        alert(`Por favor, insina um número!`)
        
    } else {
        let n = Number(numb.value)
        tab.innerHTML = ''
        for (i = 1; i <= 10; i++ ) {
            let restab = n * i
            let item = document.createElement('option')
            item.text = `${n} x ${i} = ${restab} `
            item.value = `tab ${i}`
            tab.appendChild(item)
        }
    }   



}