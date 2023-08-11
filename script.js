// Dados de livros (array inicial)
let livros = [
    {
        titulo: "One Piece",
        autor: "Echiro Oda",
        imagem: "https://imgs.search.brave.com/HBl_T5KkQuwZdTbyhCnScuHZSxrbjYnoPxf1GoRGzPk/rs:fit:860:0:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJzLmNvbS9p/bWFnZXMvaGQvbHVm/ZnktMTI3MC14LTEy/NzAtcGljdHVyZS1x/ODAzNGQxNnkzM296/NXljLmpwZw",
    },
    {
        titulo: "Dragon Ball",
        autor: "Akira Toriyama",
        imagem: "https://www.portallos.com.br/wp-content/gallery/wallpapers/2560x1600_65.jpg",
    },
    // Adicione mais livros aqui
];

// Função para exibir os livros na página
function mostrarLivros() {
    const livrosContainer = document.getElementById("livros");
    livrosContainer.innerHTML = ""; // Limpa a lista antes de atualizar
    livros.forEach((livro, index) => {
        const livroDiv = document.createElement("div");
        livroDiv.classList.add("livro");
        livroDiv.innerHTML = `
            <img src="${livro.imagem}" alt="${livro.titulo}">
            <h3>${livro.titulo}</h3>
            <p>Autor: ${livro.autor}</p>
        `;
        livrosContainer.appendChild(livroDiv);
    });
}

// Função para adicionar um novo livro
function adicionarLivro(event) {
    event.preventDefault();
    const titulo = document.getElementById("titulo").value;
    const autor = document.getElementById("autor").value;
    const imagem = document.getElementById("imagem").value;

    if (titulo && autor && imagem) {
        const novoLivro = { titulo, autor, imagem };
        livros.push(novoLivro);
        mostrarLivros();
        // Limpa o formulário
        document.getElementById("livro-form").reset();
    }
}

// Adiciona o evento de submit ao formulário
document.getElementById("livro-form").addEventListener("submit", adicionarLivro);

// Chama a função para mostrar os livros ao carregar a página
mostrarLivros();
