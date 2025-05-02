<!-- ![Logo Create e-Cattle](assets/logo.png){style="display: block; margin: auto"} -->
<p align="center">
  <a href="https://www.npmjs.com/package/create-e-cattle-app">
      <img src="https://github.com/andre-violin/create-e-cattle-app/raw/main/assets/logo.png" alt="Create e-Cattle logo" title="Create e-Cattle" />
  </a>
</p>

## 🗒️ Sobre o Create e-Cattle

Create e-Cattle é uma aplicação web que simplifica o processo de criação e configuração de aplicações micro-frontend integradas com Progressive Web App (PWA)  para a Plataforma e-Cattle.

Com ela é possível criar aplicações base, *host* e *remote*, utilizando a arquitetura de *module-federation* e *Progressive Web App* (PWA), para a Plataforma e-Cattle.

Os módulos foram desenvolvidos utilizando os principais conceitos arquiteturais de micro-frontend e tecnoplogias atuais para criação de aplicações como Vite, Vue.js, *module-federation* e PWA.

---

## 👩🏿‍💻 Como usar

Antes de utilizar esta ferramente, o usuário deverá verificar se tem os seguintes recursos instalados em seu equipamento:
- Node.js
- Git

##### Os seguintes passsos deverão ser seguidos para utilizar adequadamente este gerador de projetos:

1. Abra o terminal/prompt de comando de sua preferência. Selecione um local em seu computador em que deseja criar o projeto e digite o seguinte comando:

    ```bash
    npx create-e-cattle-app
    ```

2. Em seguida, defina um nome para o projeto.

    <p align="center">
      <img src="https://github.com/andre-violin/create-e-cattle-app/raw/main/assets/name.png" alt="Imagem mostrando o usuário definido o nome no terminal ou prompt de comando" />
    </p>

3. O próximo passo será escolher o tipo de projeto. São três opções para escolher: Base, Host e Remote.

    <p align="center">
      <img src="https://github.com/andre-violin/create-e-cattle-app/raw/main/assets/type.png" alt="Imagem mostrando o usuário escolhendo o tipo do projeto no terminal ou prompt de comando" />
    </p>

    - **Base:** Esta opção define uma base mínima para executar de forma integrada o *host* e o(s) *remote(s)*. O projeto Base conta apenas com um `package.json` com toda a estrutura e scripts para rodar os demais projetos (*host* e *remote(s)*) contidos nele um por um.
    - **Host:** Cria um projeto base com as configurações necessárias para que seja um micro-frontend integrando com tecnicas de aplicação *web* progressiva (pwa) que servirá como hospedeiro do(s) *remote(s)*. Já vem com alguns componentes internos (formulário de cadastro de usuário, formulário de *login*, menu de navegação e registro de aplicação) que poderão ser alterados a gosto do desenvolvedor.
    - **Remote:** Assim como a opção anterior, escolhendo essa opção será definido um projeto base com as configurações necessárias para que seja um micro-frontend integrado com tecnicas de aplicação *web* progressiva (pwa) para uma aplicação *remote*. Entretando essa aplicação não conta com componentes internos.

4. Por último, o usuário deverá escolher se quer que os módulos sejam instados imediatamente ou se ele fará isso em um momento posterior:

    <p align="center">
      <img src="https://github.com/andre-violin/create-e-cattle-app/raw/main/assets/dependecies.png" alt="Imagem mostrando o usuário escolhendo no terminal ou prompt de comando se os módulos serão intalados imediatamente ou não" />
    </p>

Uma mensagem é apresentado após o processo:

  <p align="center">
    <img src="https://github.com/andre-violin/create-e-cattle-app/raw/main/assets/installed.png" alt="Imagem mostrando uma mensagem final" />
  </p>

## Contribuir 🚀

Se quiser contribuir, clone este repositório, crie sua própria *branch* de trabalho e mãos à obra!

```bash
git clone https://github.com/andre-violin/create-e-cattle-app.git
```

```bash
git checkout -b feature/NAME
```

No final, abra um *Pull Request* explicando o problema resolvido ou a funcionalidade adicionada. Se existir, adicione capturas de tela das modificações visuais e aguarde pela revisão!

[Como criar uma Pull Request](https://www.atlassian.com/br/git/tutorials/making-a-pull-request) |
[Padrão de Commits](https://gist.github.com/joshbuchea/6f47e86d2510bce28f8e7f42ae84c716)

## Licença 📃

Este projeto está sob a licença [MIT](./LICENSE) license
