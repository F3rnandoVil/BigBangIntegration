document.addEventListener('DOMContentLoaded', () => {
    const userDetails = document.getElementById('userDetails');
    const logoutBtn = document.getElementById('logout');

    const loggedInUser = localStorage.getItem('loggedInUser');
    const userRole = localStorage.getItem('userRole');

    if (!loggedInUser) {
        window.location.href = "../login.html";
    } else {
        userDetails.innerHTML = `
            <p><strong>Usuario:</strong> ${loggedInUser}</p>
            <p><strong>Rol:</strong> ${userRole}</p>
        `;
    }

    logoutBtn.addEventListener('click', () => {
        localStorage.removeItem('loggedInUser');
        localStorage.removeItem('userRole');
        window.location.href = "../index.html";
    });
});