# Erros a serem corrigidos

## Erros que vieram com o projeto
- Alguns .html contém "style" e "script" e ao mesmo tempo, possuem arquivos .css e .js relacionados a eles, tornando redundante ou criandoa arquivos inutilizados.
- São eles "carrinho.html", "login.html"...
- "cabecalho.html" importa um .css inexistente "EstilosGerais.css".
- O React roda com 1 index.html, e por algum motivo se tem 2 htmls fazendo funçao de "root" do projeto.

## Minha parte
- O projeto está funcionando com base no index.html, não via App.jsx.
- Alguns .html apesar de importarem corretamente o .css, não estão funcionando corretamente devido a sintaxe.
- Os components ainda não foram devidamente criados.

## Atualizações
- Adicionei o arquivo inexistente na branch main.
- Todo projeto está funcionando, REALMENTE REFATOREI O CODIGO, NAO O QUE O PATETA DO RONALD MAC DONALD FEZ. (vsf)

## Atualizações Dia 15/11
- Pagina inicial renderizado com alguns defeitos (css e cabeçalho).
- Rotas ainda nao implementadas.
- Todas as alterações necessarias estão dentro dos componentes relacionados a Home, não houve interação com o restante. 

# Como Instalar as Dependências

Siga os passos abaixo para instalar as dependências do projeto:

1. Certifique-se de ter o Node.js.
2. Execute o seguinte comando para instalar as dependências:

```bash
cd projeto_nutri
npm install
npm install react-router-dom
npm install bootstrap @popperjs/core
npm install @fortawesome/fontawesome-free
npm run dev