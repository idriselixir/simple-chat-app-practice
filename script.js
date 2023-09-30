function sendMessage() {
    const chatMessages = document.getElementById('chatMessages');
    const messageInput = document.getElementById('messageInput');
    const messageText = messageInput.value;

    if (messageText) {
        const messageElement = document.createElement('div');
        messageElement.textContent = messageText;
        messageElement.style.marginBottom = '10px';
        chatMessages.appendChild(messageElement);
        messageInput.value = '';
    }
}

// Allow sending messages with the Enter key
document.getElementById('messageInput').addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        sendMessage();
    }
});

