function togglePassword(){
    let senha = document.getElementById("senha");
    senha.type = senha.type === "password"? "text": "password";
}

function login() {
    let username = document.getElementById("username").value;
    let senha = document.getElementById("senha").value;

    if (username === "" || senha === "") {
        alert("Por favor, preencha todos os campos.");
        return;
    }

    // Simula uma verificação de login (pode ser substituído por uma requisição a um backend)
    if (username === "admin" && senha === "1234") {  
        alert("Login bem-sucedido!");
        window.location.href = "/principal/index.HTML"; // Redireciona para a página de cadastro (ou outra desejada)
    } else {
        alert("Usuário ou senha incorretos!");
    }
}