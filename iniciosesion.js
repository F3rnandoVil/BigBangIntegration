document.addEventListener("DOMContentLoaded", () => {
    const registerForm = document.getElementById("registerForm");
    const loginForm = document.getElementById("loginForm");
    const message = document.getElementById("message");
    const logoutBtn = document.getElementById("logout");
    const usernameDisplay = document.getElementById("username");

    // Cuentas preestablecidas
    const predefinedUsers = {
        admin: { password: "root", role: "admin" },
        vendedor: { password: "123", role: "vendedor" }
    };

    // Registro de usuario
    if (registerForm) {
        registerForm.addEventListener("submit", (e) => {
            e.preventDefault();
            const username = document.getElementById("regUser").value;
            const password = document.getElementById("regPass").value;

            if (localStorage.getItem(username)) {
                message.textContent = "⚠️ Usuario ya registrado";
            } else {
                const userData = { password, role: "usuario" };
                localStorage.setItem(username, JSON.stringify(userData));
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

            const userData = predefinedUsers[username] || JSON.parse(localStorage.getItem(username));
            if (userData && userData.password === password) {
                localStorage.setItem("loggedInUser", username);
                localStorage.setItem("userRole", userData.role);
                window.location.href = "/catalogos/front.html";
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
            localStorage.removeItem("userRole");
            window.location.href = "index.html";
        });
    }
});