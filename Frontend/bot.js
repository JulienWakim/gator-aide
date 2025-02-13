const API_URL = "https://gator-aide.onrender.com"; // Your Flask API URL

document.getElementById("user-input").addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        sendMessage();
    }
});

function sendMessage() {
    let userInput = document.getElementById("user-input").value.trim();
    if (userInput === "") return;

    appendMessage("user", userInput);
    document.getElementById("user-input").value = "";

    // Test fetching from backend
    fetch(`${API_URL}/`)  // Fetch from existing home route
        .then(response => response.text()) // Convert response to text
        .then(data => {
            console.log("API Response:", data); // Log response to console
            appendMessage("bot", data); // Append to chat
        })
        .catch(error => {
            console.error("Error fetching from API:", error);
            appendMessage("bot", "Failed to connect to backend.");
        });
}

function appendMessage(sender, message) {
    let chatBox = document.getElementById("chat-box");
    let messageDiv = document.createElement("div");
    messageDiv.classList.add(sender === "bot" ? "bot-message" : "user-message");
    messageDiv.textContent = message;
    chatBox.appendChild(messageDiv);
    chatBox.scrollTop = chatBox.scrollHeight;
}
