function isElementInViewport(el) {
    var rect = el.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

// Função para adicionar a classe de fade-in quando o elemento estiver visível
function showVisibleProjects() {
    var projects = document.querySelectorAll('.project');
    
    projects.forEach(function(project) {
        if (isElementInViewport(project)) {
            project.classList.add('visible');
        }
    });
}

// Adicionar evento de rolagem para chamar a função quando o usuário rolar a página
window.addEventListener('scroll', showVisibleProjects);

// Chamar a função uma vez quando a página carregar para verificar os projetos visíveis inicialmente
showVisibleProjects();