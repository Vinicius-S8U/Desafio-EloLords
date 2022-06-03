function Goback(){
    console.log('a')
window.location.assign("Index.html") 

}


 

function MudeimgA() {

    

    elo_atual = document.getElementById('elo_atual').value
    nivel_atual = document.getElementById('nivel_elo_atual').value
    img_elo_currentA = document.getElementById('img_elo_atual')

    elo_desejado = document.getElementById('elo_desejado').value
    nivel_desejado = document.getElementById('nivel_elo_desejado').value
    img_elo_currentB = document.getElementById('img_elo_desejavel')

    span_elo = document.getElementById('span_valor')
    valor_elo = document.getElementById('p_preco')

    span_correto = span_elo

    
  


    if (elo_atual == "Ferro" & nivel_atual == 1) {
        img_elo_currentA.src = `/ImgDeItens/Elos/Ferro_1.png`  
      span_correto.innerHTML = `Valor do ${elo_atual} ${nivel_atual} ao ${elo_desejado} ${nivel_desejado}`
    }
    else if (elo_atual == "Ferro" & nivel_atual == 2) {
        img_elo_currentA.src = `/ImgDeItens/Elos/Ferro_2.png`
       span_correto.innerHTML = `Valor do ${elo_atual} ${nivel_atual} ao ${elo_desejado} ${nivel_desejado}` 
    }
    else if (elo_atual == "Ferro" & nivel_atual == 3) {
        img_elo_currentA.src = `/ImgDeItens/Elos/Ferro_3.png`
       span_correto.innerHTML = `Valor do ${elo_atual} ${nivel_atual} ao ${elo_desejado} ${nivel_desejado}` 
    }
    else if (elo_atual == "Ferro" & nivel_atual == 4) {
        img_elo_currentA.src = `/ImgDeItens/Elos/Ferro_4.png`
       span_correto.innerHTML = `Valor do ${elo_atual} ${nivel_atual} ao ${elo_desejado} ${nivel_desejado}` 
    }

    if (elo_atual == "Bronze" & nivel_atual == 1) {
        img_elo_currentA.src = `/ImgDeItens/Elos/Bronze_1.png`
       span_correto.innerHTML = `Valor do ${elo_atual} ${nivel_atual} ao ${elo_desejado} ${nivel_desejado}`
    }
    else if (elo_atual == "Bronze" & nivel_atual == 2) {
        img_elo_currentA.src = `/ImgDeItens/Elos/Bronze_2.png`
       span_correto.innerHTML = `Valor do ${elo_atual} ${nivel_atual} ao ${elo_desejado} ${nivel_desejado}`
    }
    else if (elo_atual == "Bronze" & nivel_atual == 3) {
        img_elo_currentA.src = `/ImgDeItens/Elos/Bronze_3.png`
       span_correto.innerHTML = `Valor do ${elo_atual} ${nivel_atual} ao ${elo_desejado} ${nivel_desejado}`
    }
    else if (elo_atual == "Bronze" & nivel_atual == 4) {
        img_elo_currentA.src = `/ImgDeItens/Elos/Bronze_4.png`
       span_correto.innerHTML = `Valor do ${elo_atual} ${nivel_atual} ao ${elo_desejado} ${nivel_desejado}`
    }

    if (elo_atual == "Prata" & nivel_atual == 1) {
        img_elo_currentA.src = `/ImgDeItens/Elos/Prata_1.png`
       span_correto.innerHTML = `Valor do ${elo_atual} ${nivel_atual} ao ${elo_desejado} ${nivel_desejado}` 
    }
    else if (elo_atual == "Prata" & nivel_atual == 2) {
        img_elo_currentA.src = `/ImgDeItens/Elos/Prata_2.png`
       span_correto.innerHTML = `Valor do ${elo_atual} ${nivel_atual} ao ${elo_desejado} ${nivel_desejado}` 
    }
    else if (elo_atual == "Prata" & nivel_atual == 3) {
        img_elo_currentA.src = `/ImgDeItens/Elos/Prata_3.png`
       span_correto.innerHTML = `Valor do ${elo_atual} ${nivel_atual} ao ${elo_desejado} ${nivel_desejado}` 
    }
    else if (elo_atual == "Prata" & nivel_atual == 4) {
        img_elo_currentA.src = `/ImgDeItens/Elos/Prata_4.png`
       span_correto.innerHTML = `Valor do ${elo_atual} ${nivel_atual} ao ${elo_desejado} ${nivel_desejado}` 
    }

    if (elo_atual == "Ouro" & nivel_atual == 1) {
        img_elo_currentA.src = `/ImgDeItens/Elos/Ouro_1.png`
       span_correto.innerHTML = `Valor do ${elo_atual} ${nivel_atual} ao ${elo_desejado} ${nivel_desejado}`  
    }
    else if (elo_atual == "Ouro" & nivel_atual == 2) {
        img_elo_currentA.src = `/ImgDeItens/Elos/Ouro_2.png`
       span_correto.innerHTML = `Valor do ${elo_atual} ${nivel_atual} ao ${elo_desejado} ${nivel_desejado}`  
    }
    else if (elo_atual == "Ouro" & nivel_atual == 3) {
        img_elo_currentA.src = `/ImgDeItens/Elos/Ouro_3.png`
       span_correto.innerHTML = `Valor do ${elo_atual} ${nivel_atual} ao ${elo_desejado} ${nivel_desejado}`  
    }
    else if (elo_atual == "Ouro" & nivel_atual == 4) {
        img_elo_currentA.src = `/ImgDeItens/Elos/Ouro_4.png`
       span_correto.innerHTML = `Valor do ${elo_atual} ${nivel_atual} ao ${elo_desejado} ${nivel_desejado}`  
    }

    if (elo_atual == "Platina" & nivel_atual == 1) {
        img_elo_currentA.src = `/ImgDeItens/Elos/Platina_1.png`
      span_correto.innerHTML = `Valor do ${elo_atual} ${nivel_atual} ao ${elo_desejado} ${nivel_desejado}`
    }
    else if (elo_atual == "Platina" & nivel_atual == 2) {
        img_elo_currentA.src = `/ImgDeItens/Elos/Platina_2.png`
      span_correto.innerHTML = `Valor do ${elo_atual} ${nivel_atual} ao ${elo_desejado} ${nivel_desejado}`
    }
    else if (elo_atual == "Platina" & nivel_atual == 3) {
        img_elo_currentA.src = `/ImgDeItens/Elos/Platina_3.png`
      span_correto.innerHTML = `Valor do ${elo_atual} ${nivel_atual} ao ${elo_desejado} ${nivel_desejado}`
    }
    else if (elo_atual == "Platina" & nivel_atual == 4) {
        img_elo_currentA.src = `/ImgDeItens/Elos/Platina_4.png`
      span_correto.innerHTML = `Valor do ${elo_atual} ${nivel_atual} ao ${elo_desejado} ${nivel_desejado}`
    }

    if (elo_atual == "Diamante" & nivel_atual == 1) {
        img_elo_currentA.src = `/ImgDeItens/Elos/Diamante_1.png`
        span_correto.innerHTML = `Valor do ${elo_atual} ${nivel_atual} ao ${elo_desejado} ${nivel_desejado}`

    }
    else if (elo_atual == "Diamante" & nivel_atual == 2) {
        img_elo_currentA.src = `/ImgDeItens/Elos/Diamante_2.png`
        span_correto.innerHTML = `Valor do ${elo_atual} ${nivel_atual} ao ${elo_desejado} ${nivel_desejado}`

    }
    else if (elo_atual == "Diamante" & nivel_atual == 3) {
        img_elo_currentA.src = `/ImgDeItens/Elos/Diamante_3.png`
        span_correto.innerHTML = `Valor do ${elo_atual} ${nivel_atual} ao ${elo_desejado} ${nivel_desejado}`

    }
    else if (elo_atual == "Diamante" & nivel_atual == 4) {
        img_elo_currentA.src = `/ImgDeItens/Elos/Diamante_4.png`
        span_correto.innerHTML = `Valor do ${elo_atual} ${nivel_atual} ao ${elo_desejado} ${nivel_desejado}`

    }

    if (elo_atual == "Mestre") {
        img_elo_currentA.src = `/ImgDeItens/Elos/Mestre_1.png`
       span_correto.innerHTML = `Valor do ${elo_atual} ${nivel_atual} ao ${elo_desejado} ${nivel_desejado}`
    }

}

function MudeimgB() {

    elo_atual = document.getElementById('elo_atual').value
    nivel_atual = document.getElementById('nivel_elo_atual').value
    img_elo_currentA = document.getElementById('img_elo_atual')

    elo_desejado = document.getElementById('elo_desejado').value
    nivel_desejado = document.getElementById('nivel_elo_desejado').value
    img_elo_currentB = document.getElementById('img_elo_desejavel')



    span_elo = document.getElementById('span_valor')
    valor_elo = document.getElementById('p_preco')
    
    span_correto = span_elo



    if (elo_desejado == "Ferro" & nivel_desejado == 1) {
        img_elo_currentB.src = `/ImgDeItens/Elos/Ferro_1.png`
       span_correto.innerHTML = `Valor do ${elo_atual} ${nivel_atual} ao ${elo_desejado} ${nivel_desejado}` 
    }
    else if (elo_desejado == "Ferro" & nivel_desejado == 2) {
        img_elo_currentB.src = `/ImgDeItens/Elos/Ferro_2.png`
       span_correto.innerHTML = `Valor do ${elo_atual} ${nivel_atual} ao ${elo_desejado} ${nivel_desejado}` 
    }
    else if (elo_desejado == "Ferro" & nivel_desejado == 3) {
        img_elo_currentB.src = `/ImgDeItens/Elos/Ferro_3.png`
       span_correto.innerHTML = `Valor do ${elo_atual} ${nivel_atual} ao ${elo_desejado} ${nivel_desejado}` 
    }
    else if (elo_desejado == "Ferro" & nivel_desejado == 4) {
        img_elo_currentB.src = `/ImgDeItens/Elos/Ferro_4.png`
       span_correto.innerHTML = `Valor do ${elo_atual} ${nivel_atual} ao ${elo_desejado} ${nivel_desejado}` 
    }

    if (elo_desejado == "Bronze" & nivel_desejado == 1) {
        img_elo_currentB.src = `/ImgDeItens/Elos/Bronze_1.png`
       span_correto.innerHTML = `Valor do ${elo_atual} ${nivel_atual} ao ${elo_desejado} ${nivel_desejado}`
    }
    else if (elo_desejado == "Bronze" & nivel_desejado == 2) {
        img_elo_currentB.src = `/ImgDeItens/Elos/Bronze_2.png`
       span_correto.innerHTML = `Valor do ${elo_atual} ${nivel_atual} ao ${elo_desejado} ${nivel_desejado}`
    }
    else if (elo_desejado == "Bronze" & nivel_desejado == 3) {
        img_elo_currentB.src = `/ImgDeItens/Elos/Bronze_3.png`
       span_correto.innerHTML = `Valor do ${elo_atual} ${nivel_atual} ao ${elo_desejado} ${nivel_desejado}`
    }
    else if (elo_desejado == "Bronze" & nivel_desejado == 4) {
        img_elo_currentB.src = `/ImgDeItens/Elos/Bronze_4.png`
       span_correto.innerHTML = `Valor do ${elo_atual} ${nivel_atual} ao ${elo_desejado} ${nivel_desejado}`
    }

    if (elo_desejado == "Prata" & nivel_desejado == 1) {
        img_elo_currentB.src = `/ImgDeItens/Elos/Prata_1.png`
       span_correto.innerHTML = `Valor do ${elo_atual} ${nivel_atual} ao ${elo_desejado} ${nivel_desejado}` 
    }
    else if (elo_desejado == "Prata" & nivel_desejado == 2) {
        img_elo_currentB.src = `/ImgDeItens/Elos/Prata_2.png`
       span_correto.innerHTML = `Valor do ${elo_atual} ${nivel_atual} ao ${elo_desejado} ${nivel_desejado}` 
    }
    else if (elo_desejado == "Prata" & nivel_desejado == 3) {
        img_elo_currentB.src = `/ImgDeItens/Elos/Prata_3.png`
       span_correto.innerHTML = `Valor do ${elo_atual} ${nivel_atual} ao ${elo_desejado} ${nivel_desejado}` 
    }
    else if (elo_desejado == "Prata" & nivel_desejado == 4) {
        img_elo_currentB.src = `/ImgDeItens/Elos/Prata_4.png`
       span_correto.innerHTML = `Valor do ${elo_atual} ${nivel_atual} ao ${elo_desejado} ${nivel_desejado}` 
    }

    if (elo_desejado == "Ouro" & nivel_desejado == 1) {
        img_elo_currentB.src = `/ImgDeItens/Elos/Ouro_1.png`
       span_correto.innerHTML = `Valor do ${elo_atual} ${nivel_atual} ao ${elo_desejado} ${nivel_desejado}`  
    }
    else if (elo_desejado == "Ouro" & nivel_desejado == 2) {
        img_elo_currentB.src = `/ImgDeItens/Elos/Ouro_2.png`
       span_correto.innerHTML = `Valor do ${elo_atual} ${nivel_atual} ao ${elo_desejado} ${nivel_desejado}`  
    }
    else if (elo_desejado == "Ouro" & nivel_desejado == 3) {
        img_elo_currentB.src = `/ImgDeItens/Elos/Ouro_3.png`
       span_correto.innerHTML = `Valor do ${elo_atual} ${nivel_atual} ao ${elo_desejado} ${nivel_desejado}`  
    }
    else if (elo_desejado == "Ouro" & nivel_desejado == 4) {
        img_elo_currentB.src = `/ImgDeItens/Elos/Ouro_4.png`
       span_correto.innerHTML = `Valor do ${elo_atual} ${nivel_atual} ao ${elo_desejado} ${nivel_desejado}`  
    }

    if (elo_desejado == "Platina" & nivel_desejado == 1) {
        img_elo_currentB.src = `/ImgDeItens/Elos/Platina_1.png`
      span_correto.innerHTML = `Valor do ${elo_atual} ${nivel_atual} ao ${elo_desejado} ${nivel_desejado}`
    }
    else if (elo_desejado == "Platina" & nivel_desejado == 2) {
        img_elo_currentB.src = `/ImgDeItens/Elos/Platina_2.png`
      span_correto.innerHTML = `Valor do ${elo_atual} ${nivel_atual} ao ${elo_desejado} ${nivel_desejado}`
    }
    else if (elo_desejado == "Platina" & nivel_desejado == 3) {
        img_elo_currentB.src = `/ImgDeItens/Elos/Platina_3.png`
      span_correto.innerHTML = `Valor do ${elo_atual} ${nivel_atual} ao ${elo_desejado} ${nivel_desejado}`
    }
    else if (elo_desejado == "Platina" & nivel_desejado == 4) {
        img_elo_currentB.src = `/ImgDeItens/Elos/Platina_4.png`
      span_correto.innerHTML = `Valor do ${elo_atual} ${nivel_atual} ao ${elo_desejado} ${nivel_desejado}`
    }

    if (elo_desejado == "Diamante" & nivel_desejado == 1) {
        img_elo_currentB.src = `/ImgDeItens/Elos/Diamante_1.png`
              span_correto.innerHTML = `Valor do ${elo_atual} ${nivel_atual} ao ${elo_desejado} ${nivel_desejado}`

    }
    else if (elo_desejado == "Diamante" & nivel_desejado == 2) {
        img_elo_currentB.src = `/ImgDeItens/Elos/Diamante_2.png`
              span_correto.innerHTML = `Valor do ${elo_atual} ${nivel_atual} ao ${elo_desejado} ${nivel_desejado}`

    }
    else if (elo_desejado == "Diamante" & nivel_desejado == 3) {
        img_elo_currentB.src = `/ImgDeItens/Elos/Diamante_3.png`
              span_correto.innerHTML = `Valor do ${elo_atual} ${nivel_atual} ao ${elo_desejado} ${nivel_desejado}`

    }
    else if (elo_desejado == "Diamante" & nivel_desejado == 4) {
        img_elo_currentB.src = `/ImgDeItens/Elos/Diamante_4.png`
              span_correto.innerHTML = `Valor do ${elo_atual} ${nivel_atual} ao ${elo_desejado} ${nivel_desejado}`

    }

    if (elo_desejado == "Mestre") {
        img_elo_currentB.src = `/ImgDeItens/Elos/Mestre_1.png`
       span_correto.innerHTML = `Valor do ${elo_atual} ${nivel_atual} ao ${elo_desejado} ${nivel_desejado}`
    }

 


}







