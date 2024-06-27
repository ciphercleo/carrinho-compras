let totalGeral = 0;
limpar();

document.getElementById('lista-produtos').innerHTML = '';
document.getElementById('valor-total').innerHTML = 'R$ 0';

function adicionar(){
    //recuperar valores do nome do produto, quantidade e valor
    let produto = document.getElementById('produto').value;
    let quantidade = document.getElementById('quantidade').value;

       //verifica se o produto selecionado é válido
       if(!produto || produto.trim() == ""){
        alert("Selecione um produto válido");
      }

      //verifica se a quantidade inserida é válida
      if(isNaN(quantidade || quantidade <=0)){
        alert("Insira uma quantidade válida");
      }
  
    let nomeProduto = produto.split('-')[0];
    let valorUnitario = produto.split('R$')[1];
  
    //calcuar o preço, subtotal de cada produto
    let preco = quantidade * valorUnitario;
   
    //adicionar no carrinho
    let carrinho = document.getElementById('lista-produtos');
    carrinho.innerHTML =  carrinho.innerHTML + `<section class="carrinho__produtos" id="lista-produtos">
        <section class="carrinho__produtos__produto">
          <span class="texto-azul"> ${quantidade} </span> ${nomeProduto} <span class="texto-azul">${preco}</span>
        </section>
      </section>`

    //atualizar o valor total
    totalGeral = totalGeral + preco;
    let campoTotal = document.getElementById('valor-total');
    campoTotal.textContent = `R$ ${totalGeral}`;
    document.getElementById('quantidade').value = 0;
}

function limpar(){
  totalGeral = 0;
  document.getElementById('lista-produtos').innerHTML = '';
  document.getElementById('valor-total').innerHTML = 'R$ 0';

}