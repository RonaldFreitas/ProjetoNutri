// Carrega o rodape.html dentro do elemento com ID 'header-placeholder'
fetch("cabecalho.html")
.then(response => response.text())
.then(data => {
    document.getElementById("header-placeholder").innerHTML = data;
})
.catch(error => console.error('Erro ao carregar o cabeçalho:', error));
// Carrega o rodape.html dentro do elemento com ID 'footer-placeholder'
fetch("rodape.html")
.then(response => response.text())
.then(data => {
    document.getElementById("footer-placeholder").innerHTML = data;
})
.catch(error => console.error('Erro ao carregar o rodapé:', error));