// Primeiro Código JavaScript
//Variável e tipos de dados
//cada variável guarda um valor de um tipo diferente

const nomeDoce = "torta de limao";
const preco = 20.5;
const disponivel = true;

console.log(nomeDoce, preco, disponivel);

document.getElementById("resultado").textContent =
    `${nomeDoce} custa R$ ${preco.toFixed(2)} - disponível: ${disponivel}`;