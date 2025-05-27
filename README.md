<p align="center">
    <img src="https://raw.githubusercontent.com/PKief/vscode-material-icon-theme/ec559a9f6bfd399b82bb44393651661b08aaf7ba/icons/folder-markdown-open.svg" align="center" width="30%">
</p>
<p align="center"><h1 align="center">BIGBANGINTEGRATION</h1></p>
<p align="center">
	<em><code>❯ A collaborative classroom project for system integration and teamwork learning</code></em>
</p>
<p align="center">
	<img src="https://img.shields.io/github/license/F3rnandoVil/BigBangIntegration?style=default&logo=opensourceinitiative&logoColor=white&color=0080ff" alt="license">
	<img src="https://img.shields.io/github/last-commit/F3rnandoVil/BigBangIntegration?style=default&logo=git&logoColor=white&color=0080ff" alt="last-commit">
	<img src="https://img.shields.io/github/languages/top/F3rnandoVil/BigBangIntegration?style=default&color=0080ff" alt="repo-top-language">
	<img src="https://img.shields.io/github/languages/count/F3rnandoVil/BigBangIntegration?style=default&color=0080ff" alt="repo-language-count">
</p>
<p align="center"><!-- default option, no dependency badges. -->
</p>
<p align="center">
	<!-- default option, no dependency badges. -->
</p>
<br>

##  Table of Contents

- [ Overview](#-overview)
- [ Features](#-features)
- [ Project Structure](#-project-structure)
  - [ Project Index](#-project-index)
- [ Getting Started](#-getting-started)
  - [ Prerequisites](#-prerequisites)
  - [ Installation](#-installation)
  - [ Usage](#-usage)
  - [ Testing](#-testing)
- [ Project Roadmap](#-project-roadmap)
- [ Contributing](#-contributing)
- [ License](#-license)
- [ Contact](#-contact)

---

##  Overview

BigBangIntegration is a collaborative classroom project where students work together cohesively to create an integrated system. The primary goal is to learn teamwork skills and apply software engineering principles while building a complete web application with user authentication, shopping cart functionality, and payment processing features.

---

##  Features

- **Collaborative Development**: Multi-student development environment promoting teamwork
- **User Authentication**: Complete login and registration system
- **Shopping Cart**: Full e-commerce cart functionality with item management
- **Payment Processing**: Multiple payment methods including card and cash payments
- **Product Catalog**: Dynamic product browsing and selection
- **User Management**: Administrative user management capabilities
- **System Integration**: Seamless integration between different modules
- **Responsive Design**: Mobile-friendly interface across all components

---

##  Project Structure

```sh
└── BigBangIntegration/
    ├── .github
    │   └── workflows
    ├── README.md
    ├── carrito
    │   ├── carrito.css
    │   ├── carrito.html
    │   └── carrito.js
    ├── carrito.css
    ├── carrito.html
    ├── carrito.js
    ├── catalogos
    │   ├── front.html
    │   ├── script.js
    │   └── styles.css
    ├── dashboard.html
    ├── index.html
    ├── iniciosesion.js
    ├── login.html
    ├── pagos
    │   ├── pagoTarjeta.css
    │   ├── pagoTarjeta.html
    │   ├── pagoTarjeta.js
    │   ├── pagoVista.css
    │   ├── pagoVista.html
    │   ├── pagoVista.js
    │   └── utils
    ├── registro.html
    ├── sonar-project.properties
    ├── styles.css
    └── users
        ├── users.html
        └── users.js
```

###  Project Index
<details open>
	<summary><b><code>BIGBANGINTEGRATION/</code></b></summary>
	<details> <!-- __root__ Submodule -->
		<summary><b>__root__</b></summary>
		<blockquote>
			<table>
			<tr>
				<td><b><a href='https://github.com/F3rnandoVil/BigBangIntegration/blob/master/index.html'>index.html</a></b></td>
				<td><code>❯ Main landing page and application entry point</code></td>
			</tr>
			<tr>
				<td><b><a href='https://github.com/F3rnandoVil/BigBangIntegration/blob/master/login.html'>login.html</a></b></td>
				<td><code>❯ User authentication and login interface</code></td>
			</tr>
			<tr>
				<td><b><a href='https://github.com/F3rnandoVil/BigBangIntegration/blob/master/registro.html'>registro.html</a></b></td>
				<td><code>❯ User registration form and validation</code></td>
			</tr>
			<tr>
				<td><b><a href='https://github.com/F3rnandoVil/BigBangIntegration/blob/master/dashboard.html'>dashboard.html</a></b></td>
				<td><code>❯ User dashboard and main application interface</code></td>
			</tr>
			<tr>
				<td><b><a href='https://github.com/F3rnandoVil/BigBangIntegration/blob/master/iniciosesion.js'>iniciosesion.js</a></b></td>
				<td><code>❯ Session management and authentication logic</code></td>
			</tr>
			<tr>
				<td><b><a href='https://github.com/F3rnandoVil/BigBangIntegration/blob/master/styles.css'>styles.css</a></b></td>
				<td><code>❯ Global application styling and theme</code></td>
			</tr>
			<tr>
				<td><b><a href='https://github.com/F3rnandoVil/BigBangIntegration/blob/master/carrito.html'>carrito.html</a></b></td>
				<td><code>❯ Shopping cart interface and item display</code></td>
			</tr>
			<tr>
				<td><b><a href='https://github.com/F3rnandoVil/BigBangIntegration/blob/master/carrito.js'>carrito.js</a></b></td>
				<td><code>❯ Shopping cart functionality and item management</code></td>
			</tr>
			<tr>
				<td><b><a href='https://github.com/F3rnandoVil/BigBangIntegration/blob/master/carrito.css'>carrito.css</a></b></td>
				<td><code>❯ Shopping cart specific styling</code></td>
			</tr>
			</table>
		</blockquote>
	</details>
	<details> <!-- .github Submodule -->
		<summary><b>.github</b></summary>
		<blockquote>
			<details>
				<summary><b>workflows</b></summary>
				<blockquote>
					<table>
					<tr>
						<td><b><a href='https://github.com/F3rnandoVil/BigBangIntegration/blob/master/.github/workflows/build.yml'>build.yml</a></b></td>
						<td><code>❯ CI/CD pipeline configuration and automated builds</code></td>
					</tr>
					</table>
				</blockquote>
			</details>
		</blockquote>
	</details>
	<details> <!-- catalogos Submodule -->
		<summary><b>catalogos</b></summary>
		<blockquote>
			<table>
			<tr>
				<td><b><a href='https://github.com/F3rnandoVil/BigBangIntegration/blob/master/catalogos/front.html'>front.html</a></b></td>
				<td><code>❯ Product catalog main interface</code></td>
			</tr>
			<tr>
				<td><b><a href='https://github.com/F3rnandoVil/BigBangIntegration/blob/master/catalogos/script.js'>script.js</a></b></td>
				<td><code>❯ Product catalog functionality and filtering</code></td>
			</tr>
			<tr>
				<td><b><a href='https://github.com/F3rnandoVil/BigBangIntegration/blob/master/catalogos/styles.css'>styles.css</a></b></td>
				<td><code>❯ Catalog-specific styling and layout</code></td>
			</tr>
			</table>
		</blockquote>
	</details>
	<details> <!-- users Submodule -->
		<summary><b>users</b></summary>
		<blockquote>
			<table>
			<tr>
				<td><b><a href='https://github.com/F3rnandoVil/BigBangIntegration/blob/master/users/users.html'>users.html</a></b></td>
				<td><code>❯ User management interface for administrators</code></td>
			</tr>
			<tr>
				<td><b><a href='https://github.com/F3rnandoVil/BigBangIntegration/blob/master/users/users.js'>users.js</a></b></td>
				<td><code>❯ User management logic and CRUD operations</code></td>
			</tr>
			</table>
		</blockquote>
	</details>
	<details> <!-- pagos Submodule -->
		<summary><b>pagos</b></summary>
		<blockquote>
			<table>
			<tr>
				<td><b><a href='https://github.com/F3rnandoVil/BigBangIntegration/blob/master/pagos/pagoTarjeta.html'>pagoTarjeta.html</a></b></td>
				<td><code>❯ Credit/debit card payment interface</code></td>
			</tr>
			<tr>
				<td><b><a href='https://github.com/F3rnandoVil/BigBangIntegration/blob/master/pagos/pagoTarjeta.js'>pagoTarjeta.js</a></b></td>
				<td><code>❯ Card payment processing and validation</code></td>
			</tr>
			<tr>
				<td><b><a href='https://github.com/F3rnandoVil/BigBangIntegration/blob/master/pagos/pagoTarjeta.css'>pagoTarjeta.css</a></b></td>
				<td><code>❯ Card payment interface styling</code></td>
			</tr>
			<tr>
				<td><b><a href='https://github.com/F3rnandoVil/BigBangIntegration/blob/master/pagos/pagoVista.html'>pagoVista.html</a></b></td>
				<td><code>❯ Cash payment interface</code></td>
			</tr>
			<tr>
				<td><b><a href='https://github.com/F3rnandoVil/BigBangIntegration/blob/master/pagos/pagoVista.js'>pagoVista.js</a></b></td>
				<td><code>❯ Cash payment processing logic</code></td>
			</tr>
			<tr>
				<td><b><a href='https://github.com/F3rnandoVil/BigBangIntegration/blob/master/pagos/pagoVista.css'>pagoVista.css</a></b></td>
				<td><code>❯ Cash payment interface styling</code></td>
			</tr>
			</table>
			<details>
				<summary><b>utils</b></summary>
				<blockquote>
					<table>
					<tr>
						<td><b><a href='https://github.com/F3rnandoVil/BigBangIntegration/blob/master/pagos/utils/luhn.js'>luhn.js</a></b></td>
						<td><code>❯ Credit card validation using Luhn algorithm</code></td>
					</tr>
					</table>
				</blockquote>
			</details>
		</blockquote>
	</details>
	<details> <!-- carrito Submodule -->
		<summary><b>carrito</b></summary>
		<blockquote>
			<table>
			<tr>
				<td><b><a href='https://github.com/F3rnandoVil/BigBangIntegration/blob/master/carrito/carrito.html'>carrito.html</a></b></td>
				<td><code>❯ Alternative shopping cart implementation</code></td>
			</tr>
			<tr>
				<td><b><a href='https://github.com/F3rnandoVil/BigBangIntegration/blob/master/carrito/carrito.js'>carrito.js</a></b></td>
				<td><code>❯ Alternative cart functionality and logic</code></td>
			</tr>
			<tr>
				<td><b><a href='https://github.com/F3rnandoVil/BigBangIntegration/blob/master/carrito/carrito.css'>carrito.css</a></b></td>
				<td><code>❯ Alternative cart styling implementation</code></td>
			</tr>
			</table>
		</blockquote>
	</details>
</details>

---
##  Getting Started

###  Prerequisites

Before getting started with BigBangIntegration, ensure your runtime environment meets the following requirements:

- **Web Browser**: Modern web browser (Chrome, Firefox, Safari, Edge)
- **Local Server**: Live Server extension or local HTTP server (optional but recommended)
- **Text Editor**: VS Code, Sublime Text, or any preferred code editor

###  Installation

Install BigBangIntegration using one of the following methods:

**Build from source:**

1. Clone the BigBangIntegration repository:
```sh
❯ git clone https://github.com/F3rnandoVil/BigBangIntegration
```

2. Navigate to the project directory:
```sh
❯ cd BigBangIntegration
```

3. No additional dependencies required - this is a pure HTML/CSS/JavaScript project

###  Usage
Run BigBangIntegration using the following command:

**Option 1: Using Live Server (Recommended)**
- Open the project in VS Code
- Install Live Server extension
- Right-click on `index.html` and select "Open with Live Server"

**Option 2: Direct File Access**
- Open `index.html` directly in your web browser
- Navigate through the application using the provided interface

###  Testing
The project includes basic functionality testing:
- Test user registration and login flows
- Verify shopping cart add/remove operations
- Test payment processing workflows
- Validate user management features

---
##  Project Roadmap

- [X] **Task 1**: <strike>Implement user authentication system</strike>
- [X] **Task 2**: <strike>Create shopping cart functionality</strike>
- [X] **Task 3**: <strike>Develop payment processing modules</strike>
- [ ] **Task 4**: Integrate all modules seamlessly
- [ ] **Task 5**: Implement comprehensive testing
- [ ] **Task 6**: Add responsive design improvements
- [ ] **Task 7**: Deploy to production environment

---

##  Contributing

- **💬 [Join the Discussions](https://github.com/F3rnandoVil/BigBangIntegration/discussions)**: Share your insights, provide feedback, or ask questions.
- **🐛 [Report Issues](https://github.com/F3rnandoVil/BigBangIntegration/issues)**: Submit bugs found or log feature requests for the BigBangIntegration project.
- **💡 [Submit Pull Requests](https://github.com/F3rnandoVil/BigBangIntegration/blob/main/CONTRIBUTING.md)**: Review open PRs, and submit your own PRs.

<details closed>
<summary>Contributing Guidelines</summary>

1. **Fork the Repository**: Start by forking the project repository to your github account.
2. **Clone Locally**: Clone the forked repository to your local machine using a git client.
   ```sh
   git clone https://github.com/F3rnandoVil/BigBangIntegration
   ```
3. **Create a New Branch**: Always work on a new branch, giving it a descriptive name.
   ```sh
   git checkout -b new-feature-x
   ```
4. **Make Your Changes**: Develop and test your changes locally.
5. **Commit Your Changes**: Commit with a clear message describing your updates.
   ```sh
   git commit -m 'Implemented new feature x.'
   ```
6. **Push to github**: Push the changes to your forked repository.
   ```sh
   git push origin new-feature-x
   ```
7. **Submit a Pull Request**: Create a PR against the original project repository. Clearly describe the changes and their motivations.
8. **Review**: Once your PR is reviewed and approved, it will be merged into the main branch. Congratulations on your contribution!
</details>

<details closed>
<summary>Contributor Graph</summary>
<br>
<p align="left">
   <a href="https://github.com/F3rnandoVil/BigBangIntegration/graphs/contributors">
      <img src="https://contrib.rocks/image?repo=F3rnandoVil/BigBangIntegration">
   </a>
</p>
</details>

---

##  License

This project is protected under the [SELECT-A-LICENSE](https://choosealicense.com/licenses) License. For more details, refer to the [LICENSE](https://choosealicense.com/licenses/) file.

---

##  Contact

For questions or support, please contact the project maintainer through their GitHub profile: [@F3rnandoVil](https://github.com/F3rnandoVil)

---
