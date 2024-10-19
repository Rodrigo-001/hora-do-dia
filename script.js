function carregar() {

    let secao_imagem = document.getElementById("container_imagem")

    // Guardando mensagem e imagem em objetos
    let cumprimento = document.querySelector("div#msg");
    let imagem = document.createElement("img");
    let informe_hora = document.getElementById("informe_hora")

    // Obtendo hora e minuto
    let objeto_data = new Date();
    let hora_atual = objeto_data.getHours();   
     let minutos = objeto_data.getMinutes();    
    // formatar minutos para 2 digitos
    minutos = minutos < 10 ? "0" + minutos : minutos; 

    // Pegando cor de fundo
    let fundo = document.querySelector("body");
    
    
    // Verificando se é dia, manhã, tarde ou noite
    if(hora_atual > 4 && hora_atual < 12){
        cumprimento.innerHTML = "Bom dia!";
        imagem.src = 'img/manha.jpg';        
        fundo.classList.add("fundoDia"); //estilo definido no css
        

    }else if(hora_atual > 11  && hora_atual < 18){
        cumprimento.innerHTML = "Boa Tarde!";
        imagem.src = 'img/tarde.jpg';     
        fundo.classList.add("fundoTarde"); //estilo definido no css
         
    }else{
        cumprimento.innerHTML = "Boa noite!";
        imagem.src = 'img/noite.jpg';
        fundo.classList.add("fundoNoite")
    }
    secao_imagem.appendChild(imagem); 
    informe_hora.innerHTML = `Agora são  <strong>${hora_atual}:${minutos}</strong>`; 

}    
