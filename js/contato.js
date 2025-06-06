// Importa Header e Footer
fetch('header.html').then(response => response.text()).then(data => {
    document.getElementById('header').innerHTML = data;

    // Seleciona todos os <a> dentro da navbar
    const links = document.querySelectorAll('.navbar-nav .nav-link');

    // Adiciona ativo ao link da pagina atual
    links.forEach(link => {
        if(link.innerHTML === 'Contato') link.classList.add('active');
    });
});

fetch('footer.html').then(response => response.text()).then(data => {
    document.getElementById('footer').innerHTML = data;
    // Aplica ano atual no copyright do footer
    document.getElementById('ano').textContent = new Date().getFullYear();
});