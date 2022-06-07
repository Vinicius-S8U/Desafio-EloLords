function Goback(){
window.location.assign("Index.html") 
}

function zaun(){
    window.location.assign("../Regiões/Zaun.html")
}

function demacia(){
    window.location.assign("../Regiões/Demacia.html")
}

function noxus(){
    window.location.assign("../Regiões/Noxus.html")
}

function piltover(){
    window.location.assign("../Regiões/Piltover.html")
}

function IlhadasSombras(){
    window.location.assign("../Regiões/IlhaDasSombras.html")
}

function ionia(){
    window.location.assign("../Regiões/Ionia.html")
}

function Vazio(){
    window.location.assign("../Regiões/Vazio.html")
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

lista_champs = [
    "/ImgDeItens/Campeões/Vayne2.o.jpg",
    "/ImgDeItens/Campeões/Draven.jpg",
    "/ImgDeItens/Campeões/Lucian2.o.jpg",
    "/ImgDeItens/Campeões/kalista.jpg",
    "/ImgDeItens/Campeões/Kai sa 2.jpg",
    "/ImgDeItens/Campeões/Yasuo.jpg",
    "/ImgDeItens/Campeões/Caitylin.jpg",
    "/ImgDeItens/Campeões/twitch.jpg"
]

lista_possivel_output = [
    "Vayne.html",
    "Draven.html",
    "Lucian.html",
    "Kalista.html",
    "Kaisa.html",
    "Yasuo.html",
    "Caitlyn.html",
    "Twitch.html"
]
function RandomChamp(){

for(contador = 0;contador <= lista_possivel_output.length; contador++){

    if(window.location.href.split('/')[4] == lista_possivel_output[contador]){
        lista_champs.splice(contador,1)
        lista_possivel_output.splice(contador,1)
        imgChamp()
    }
   
}

}

async function imgChamp(){

img1 = document.getElementById("random_img1")
img2 = document.getElementById("random_img2")

link1 = document.getElementById("link_img1")
link2 = document.getElementById("link_img2")

nome1 = document.getElementById("nomeDoChamp1")
nome2 = document.getElementById("nomeDoChamp2")

for(contador_img = 0;contador_img <= lista_champs.length;contador_img++ ){ 

img1.src = lista_champs[contador_img]

link1.href = lista_possivel_output[contador_img]

nome1.innerHTML = lista_possivel_output[contador_img].split('.',1)



img2.src = lista_champs[contador_img + 1]   

link2.href = lista_possivel_output[contador_img + 1]

nome2.innerHTML = lista_possivel_output[contador_img + 1].split('.',1)

if(contador_img + 1 == lista_champs.length -1 ){

    contador_img = 0

}

    await timer(12000)

}


}

function timer(ms) { return new Promise(res => setTimeout(res, ms)); }


lista_possivel_output2 = [
    "Demacia.html",
    "Noxus.html",
    "IlhadasSombras.html",
    "Vazio.html",
    "Zaun.html",
    "Ionia.html",
    "Piltover.html"
]

lista_regiao = [
    "/ImgDeItens/Regiões/demacia.jpeg",
    "/ImgDeItens/Regiões/noxus.jpg",
    "/ImgDeItens/Regiões/IlhadasSombras.jpg",
    "/ImgDeItens/Regiões/void.jpg",
    "/ImgDeItens/Regiões/zaun.jpeg",
    "/ImgDeItens/Regiões/ionia.jpg",
    "/ImgDeItens/Regiões/piltover.jpg"

]

function RandomRegiao(){
    for(contador = 0;contador <= lista_possivel_output2.length; contador++){

        if(window.location.href.split('/')[4] == lista_possivel_output2[contador]){
            lista_regiao.splice(contador,1)
            lista_possivel_output2.splice(contador,1)
            imgRegiao()
        }
       
    }
}


async function imgRegiao(){

    img1 = document.getElementById("random_img1")
    img2 = document.getElementById("random_img2")
    
    link1 = document.getElementById("link_img1")
    link2 = document.getElementById("link_img2")
    
    nome1 = document.getElementById("nomeDoChamp1")
    nome2 = document.getElementById("nomeDoChamp2")
    
    for(contador_img = 0;contador_img <= lista_regiao.length;contador_img++ ){ 
    
    img1.src = lista_regiao[contador_img]
    
    link1.href = lista_possivel_output2[contador_img]
    
    nome1.innerHTML = lista_possivel_output2[contador_img].split('.',1)
    
    
    
    img2.src = lista_regiao[contador_img + 1]   
    
    link2.href = lista_possivel_output2[contador_img + 1]
    
    nome2.innerHTML = lista_possivel_output2[contador_img + 1].split('.',1)
    
    if(contador_img + 1 == lista_regiao.length -1 ){
    
        contador_img = 0
    
    }
    
        await timer(12000)
    
    }
    
    
    }
    