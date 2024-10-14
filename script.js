function toggleMode() {
    const html = document.documentElement;
    html.classList.toggle('light');
    
    //pegar a imagem
    const img = document.querySelector("#profile img");
    
    //substituir a img
    if(html.classList.contains('light')){
        //se tiver light mode, adicionar a imagem light
        img.setAttribute('src', './assets/avatar-light.png');
        img.setAttribute('alt', 'Foto de perfil do Cleyton com uma borda preta');
    }
    else{
        //se não tiver em light mode, manter a imagem normal
        img.setAttribute('src', './assets/avatar.png');
        img.setAttribute('alt', 'Foto de perfil do Cleyton com uma borda branca');
        
    }


    
};