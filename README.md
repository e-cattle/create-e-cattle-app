Create e-Cattle is a command line application (CLI) that simplifies the process of creating and configuring Progressive Web App (PWA)-integrated micro-frontend applications for the e-Cattle platform.

<!-- ![Logo Create e-Cattle](assets/logo.png){style="display: block; margin: auto"} -->
<p align="center">
<a href="https://www.npmjs.com/package/create-e-cattle-app">
<img src="https://github.com/andre-violin/create-e-cattle-app/raw/main/assets/logo.png" alt="Create e-Cattle logo" title="Create e-Cattle" />
</a>
</p>

## 🗒️ About Create e-Cattle

Create e-Cattle is a command-line application (CLI) that simplifies the process of creating and configuring micro-frontend applications integrated with Progressive Web App (PWA) for the e-Cattle platform.

With it, you can create base, _host_ and _remote_ applications, using the _module-federation_ and _Progressive Web App_ (PWA) architecture, for the e-Cattle Platform.

The modules were developed using the main architectural concepts of micro-frontend and current technologies for creating applications such as Vite, Vue.js, _module-federation_ and PWA.

---

## 👩🏿‍💻 How to use

Before using this tool, the user must check if they have the following resources installed on their equipment:

- Node.js
- Git

##### The following steps must be followed to properly use this project generator:

1. Open the terminal/command prompt of your choice. Select a location on your computer where you want to create the project and type the following command:

```bash
npx create-e-cattle-app
```

2. Next, set a name for the project.

<p align="center">
<img src="https://github.com/andre-violin/create-e-cattle-app/raw/main/assets/name.png" alt="Image showing the user setting the name in the terminal or command prompt" />
</p>

3. The next step will be to choose the type of project. There are three options to choose from: Base, Host, and Remote.

<p align="center">
<img src="https://github.com/andre-violin/create-e-cattle-app/raw/main/assets/type.png" alt="Image showing the user choosing the project type in the terminal or command prompt" />
</p>

- **Base:** This option defines a minimum base to run the _host_ and _remote(s)_ in an integrated manner. The Base project only has a `package.json` with all the structure and scripts to run the other projects (_host_ and _remote(s)_) contained in it one by one.
- **Host:** Creates a base project with the necessary configurations to be a micro-frontend integrating with progressive _web_ application (pwa) techniques that will serve as the host of the _remote(s)_. It already comes with some internal components (user registration form, _login_ form, navigation menu and application registration) that can be changed according to the developer's wishes.
- **Remote:** Just like the previous option, choosing this option will define a base project with the necessary settings to be a micro-frontend integrated with progressive _web_ application techniques (PWA) for a _remote_ application. However, this application does not have internal components.

4. Finally, the user must choose whether he wants the modules to be installed immediately or if he will do it at a later time:

<p align="center">
<img src="https://github.com/andre-violin/create-e-cattle-app/raw/main/assets/dependecies.png" alt="Image showing the user choosing in the terminal or command prompt whether the modules will be installed immediately or not" />
</p>

A message is displayed after the process:

<p align="center">
<img src="https://github.com/andre-violin/create-e-cattle-app/raw/main/assets/installed.png" alt="Image showing a final message" />
</p>

## Contribute 🚀

If you want to contribute, clone this repository, create your own working branch and get to work!

```bash
git clone https://github.com/e-cattle/create-e-cattle-app.git
```

```bash
git checkout -b feature/NAME
```

Finally, open a _Pull Request_ explaining the problem solved or the functionality added. If there is one, add screenshots of the visual changes and wait for the review!

[How to create a Pull Request](https://www.atlassian.com/br/git/tutorials/making-a-pull-request) |
[Commit Pattern](https://gist.github.com/joshbuchea/6f47e86d2510bce28f8e7f42ae84c716)

## License 📃

This project is licensed under the [MIT](./LICENSE) license
