const toggleTheme = document.getElementById("toggle-theme");
const themeIcon = document.getElementById("theme-icon");

toggleTheme.addEventListener("click", () => {
    document.body.classList.toggle("dark");
    if (document.body.classList.contains("dark")) {
        themeIcon.setAttribute("name", "moon"); // Cambia el ícono para el modo oscuro
        themeIcon.setAttribute("color", "white"); // Opcional: cambia el color del ícono
    } else {
        themeIcon.setAttribute("name", "sun"); // Cambia el ícono para el modo claro
        themeIcon.setAttribute("color", "black"); // Opcional: cambia el color del ícono
    }
});