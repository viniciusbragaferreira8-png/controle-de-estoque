const form = document.getElementById("FormProduto");
const lista = document.getElementById("ListaProdutos");

let produtos = JSON.parse(localStorage.getItem("produtos")) || [];

function salvar () {
    localStorage.setItem("produtos", JSON.stringify(produtos));
}
function renderizar () {
    lista.innerHTML = "";
    produtos.forEache((produto, index)=> {
        const li = document.createElement("li");
        li.innerHTML = `
        ${produto.nome} - ${produto.quantidade}
        <button onclick="remover(${index})">Excluir</button>
        <button onclick="alterar(${index}, 1)">+</button>
        <button onclick="alterar(${index}, -1)">-</button>
        `;
        lista.appendChild(li);
    });
}
function remover(index) {
    produtos.splice(index, 1);
    salvar();
    renderizar();
}
function alterar(index, valor) {
    produtos [index].quantidade += valor;
    
    if (produto [index].quantidade < 0) {
        produtos[index].quantidade = 0;
    }
    salvar()
    renderizar()

}
form.addEventListener ("subimit", (e) =>{
    e.preventDefault();

    const nome = document.getElementById ("nome").value;
    const quantidade = parseInt(document.getElementById("quantidade").value);
    produtos.push ({valor, quantidade});
    
    salvar();
    renderizar();
    form.reset();

});

renderizar();