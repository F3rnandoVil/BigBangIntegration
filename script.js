document.addEventListener("DOMContentLoaded", () => {
    const registerForm = document.getElementById("registerForm");
    const loginForm = document.getElementById("loginForm");
    const message = document.getElementById("message");
    const logoutBtn = document.getElementById("logout");
    const usernameDisplay = document.getElementById("username");

    // Registro de usuario
    if (registerForm) {
        registerForm.addEventListener("submit", (e) => {
            e.preventDefault();
            const username = document.getElementById("regUser").value;
            const password = document.getElementById("regPass").value;

            if (localStorage.getItem(username)) {
                message.textContent = "⚠️ Usuario ya registrado";
            } else {
                localStorage.setItem(username, password);
                message.textContent = "✅ Usuario registrado con éxito";
                setTimeout(() => {
                    window.location.href = "login.html";
                }, 1000);
            }
        });
    }

    // Inicio de sesión
    if (loginForm) {
        loginForm.addEventListener("submit", (e) => {
            e.preventDefault();
            const username = document.getElementById("loginUser").value;
            const password = document.getElementById("loginPass").value;

            if (localStorage.getItem(username) === password) {
                localStorage.setItem("loggedInUser", username);
                window.location.href = "dashboard.html";
            } else {
                message.textContent = "❌ Usuario o contraseña incorrectos";
            }
        });
    }

    // Verificación de usuario en dashboard
    if (usernameDisplay) {
        const loggedInUser = localStorage.getItem("loggedInUser");
        if (!loggedInUser) {
            window.location.href = "login.html";
        } else {
            usernameDisplay.textContent = loggedInUser;
        }
    }

    // Cerrar sesión
    if (logoutBtn) {
        logoutBtn.addEventListener("click", () => {
            localStorage.removeItem("loggedInUser");
            window.location.href = "index.html";
        });
    }
});
