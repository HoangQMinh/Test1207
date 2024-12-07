document.getElementById("signupForm").addEventListener("submit", async function (e) {
    e.preventDefault();
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    const response = await fetch("https://your-backend-server.com/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password }),
    });

    const result = await response.json();
    if (response.ok) {
        alert("Account created successfully!");
    } else {
        alert("Error: " + result.message);
    }
});
