# Galeria de Fotos

Uma aplicação web simples para exibir uma galeria de fotos, com funcionalidade de busca em tempo real.

## Tecnologias Utilizadas

- **HTML**: Estrutura principal da página.
- **CSS**: Estilização visual.
- **JavaScript**: Funcionalidade de busca e interatividade.

## Pré-requisitos

Para rodar esta aplicação, você precisará de:

- Um navegador web moderno (como Google Chrome, Firefox, Edge, etc.).
- Opcional: Um servidor local para rodar a aplicação (recomendado).

## Estrutura dos Arquivos

```
|-- index.html       # Arquivo principal da aplicação
|-- styles.css       # Arquivo de estilização
|-- script.js        # Arquivo de lógica JavaScript
```

## Instruções para Rodar Localmente

### 1. Clone ou Baixe o Repositório

Se estiver usando Git:

```bash
git clone <URL_DO_REPOSITORIO>
```

Ou baixe o arquivo compactado (ZIP) e extraia em uma pasta local.

### 2. Abra o Arquivo HTML no Navegador

1. Navegue até o diretório onde os arquivos foram baixados.
2. Clique duas vezes no arquivo `index.html` para abri-lo no navegador.

### 3. (Opcional) Utilize um Servidor Local

Caso queira uma experiência mais próxima de um ambiente de produção:

1. Instale uma ferramenta de servidor local, como o [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) (para VS Code) ou Python SimpleHTTPServer.
2. Inicie o servidor local. Por exemplo, com Python:
   ```bash
   python -m http.server
   ```
3. Acesse o endereço fornecido no terminal (normalmente `http://localhost:8000`).

## Funcionalidades

- **Busca em Tempo Real**: Filtra as fotos exibidas com base nas palavras-chave digitadas pelo usuário.
- **Feedback de Busca**: Caso nenhuma foto corresponda à palavra-chave, é exibida a mensagem "Nenhuma foto encontrada".
- **Efeitos Visuais**: As fotos possuem animação ao passar o mouse (hover).
