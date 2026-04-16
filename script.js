function salvarFicha() {
    const ficha = {
        inventario: document.getElementById('inventario').value,
habilidades: document.getElementById('habilidades').value,
        nome: document.getElementById('nome').value,
        forca: document.getElementById('forca').value,
        int: document.getElementById('inteligencia').value,
        agi: document.getElementById('agilidade').value,
        von: document.getElementById('vontade').value,
        per: document.getElementById('percepcao').value,
        ocu: document.getElementById('ocultismo').value,
        pv_atual: document.getElementById('pv-atual').value,
        // ... adicione os outros campos se desejar salvar tudo
    };

    localStorage.setItem('fichaPersonagem', JSON.stringify(ficha));
    alert("Ficha de " + ficha.nome + " salva com sucesso!");
}
function carregarImagem(event) {
    const reader = new FileReader();
    reader.onload = function() {
        const output = document.getElementById('foto-personagem');
        const texto = document.getElementById('placeholder-texto');
        output.src = reader.result;
        output.style.display = 'block';
        texto.style.display = 'none';
        
        // Salva a imagem automaticamente ao carregar
        localStorage.setItem('foto_personagem', reader.result);
    };
    reader.readAsDataURL(event.target.files[0]);
}

// No seu window.onload, adicione estas linhas para recuperar a foto:
window.onload = function() {
    // ... código que você já tem ...
    document.getElementById('inventario').value = ficha.inventario || "";
document.getElementById('habilidades').value = ficha.habilidades || "";
    const fotoSalva = localStorage.getItem('foto_personagem');
    if (fotoSalva) {
        const output = document.getElementById('foto-personagem');
        const texto = document.getElementById('placeholder-texto');
        output.src = fotoSalva;
        output.style.display = 'block';
        texto.style.display = 'none';
    }
    
};