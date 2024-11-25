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

## Atualizações dia 23/11
- Rotas inicialmente funcionando
- Arrumar o CSS da pagina Home.jsx
- Aplicar o CSS de Produtos.jsx
- Arrumar o Saiba Mais de Exames.jsx
- Algumas "sub" rotas a serem definidas (receitas 1 2 e 3)
- Fazer o login funcionar (Re-importar icones depreciados)
- Entender como esta funcionando alguns headers (CSS "dinamico"?)

# Como Instalar as Dependências

Siga os passos abaixo para instalar as dependências do projeto:

1. Certifique-se de ter o Node.js.
2. Execute o seguinte comando para instalar as dependências:

```bash
cd projeto_nutri
npm install
npm install bootstrap
npm install express
npm install sqlite3
npm install react-router-dom
npm install react-bootstrap bootstrap
npm install bootstrap @popperjs/core
npm install @fortawesome/fontawesome-free
npm install lucide-react
npm run dev
instalar extensão SQLite Viewer

```

## Em caso de json não estar configurado tente rodar:

```bash
npm audit fix

```
### Se quiser ver o banco de dados no Vs Code
- instalar extensão SQLite Viewer