function login() {
    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value.trim();

    if (username === "admin" && password === "admin123") {
        localStorage.setItem("role", "ADMIN");
        window.location.href = "index.html";
    }
    else if (username === "user" && password === "user123") {
        localStorage.setItem("role", "USER");
        window.location.href = "index.html";
    }
    else {
        alert("Invalid credentials");
    }
}
