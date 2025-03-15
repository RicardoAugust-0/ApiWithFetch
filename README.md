# ApiWithFetch

Descrição
---------
Este é um projeto de aplicativo móvel desenvolvido com React Native, que utiliza a API do DummyJSON para exibir uma lista de produtos e permitir que o usuário visualize os detalhes de cada produto.

## Funcionalidades

* Exibe uma lista de produtos com imagem, título e preço
* Permite que o usuário visualize os detalhes de cada produto, incluindo descrição e categoria
* Utiliza a API do DummyJSON para obter os dados dos produtos

## Estrutura do Projeto

* `App.js`: arquivo principal do aplicativo, que define a navegação entre as telas
* `src/screens/homeScreen.js`: tela inicial do aplicativo, que exibe a lista de produtos
* `src/screens/detailsScreen.js`: tela que exibe os detalhes de um produto
* `src/components/ProductCard.js`: componente que representa um produto na lista
* `src/styles/styles.js`: arquivo que define os estilos do aplicativo

## Dependências

* `@react-navigation/native`: biblioteca de navegação para React Native
* `@react-navigation/stack`: biblioteca de navegação em pilha para React Native
* `expo`: biblioteca de desenvolvimento de aplicativos móveis
* `react`: biblioteca de desenvolvimento de interfaces de usuário
* `react-native`: biblioteca de desenvolvimento de aplicativos móveis

## Configuração

* `app.json`: arquivo de configuração do aplicativo
* `package.json`: arquivo de configuração do projeto

## Execução

Para executar o aplicativo, siga os passos abaixo:

1. Instale as dependências do projeto com o comando `npm install`
2. Execute o comando `expo start` para iniciar o servidor de desenvolvimento
3. Abra o aplicativo no seu dispositivo móvel ou em um emulador

## Notas

* Este projeto foi desenvolvido com base no tutorial de React Native e Expo
* A API do DummyJSON é utilizada apenas para fins de demonstração e não deve ser utilizada em produção
