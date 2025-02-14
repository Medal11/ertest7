// Show login screen
function showLogin() {
    document.getElementById('login-container').style.display = 'block';
    document.getElementById('signup-container').style.display = 'none';
}

// Show signup screen
function showSignup() {
    document.getElementById('signup-container').style.display = 'block';
    document.getElementById('login-container').style.display = 'none';
}

// Check if user is logged in
function checkLogin() {
    const username = localStorage.getItem('username');
    if (username) {
        // If the username exists in localStorage, show the chatroom
        document.getElementById('login-container').style.display = 'none';
        document.getElementById('chatroom-container').style.display = 'block';
    } else {
        // If the username doesn't exist, show the login screen
        document.getElementById('login-container').style.display = 'block';
        document.getElementById('chatroom-container').style.display = 'none';
    }
}

// Login function
function login() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Get the stored password for the entered username
    const storedPassword = localStorage.getItem(username);
    
    if (storedPassword && storedPassword === password) {
        // If password matches, save username to localStorage and load the chatroom
        localStorage.setItem('username', username);
        checkLogin();
    } else {
        // Alert if username or password is incorrect
        alert('Incorrect username or password');
    }
}

// Sign up function
function signup() {
    const username = document.getElementById('new-username').value;
    const password = document.getElementById('new-password').value;

    if (localStorage.getItem(username)) {
        // Alert if username already exists
        alert('Username already exists');
    } else {
        // Save new username and password in localStorage
        localStorage.setItem(username, password);
        alert('Sign up successful! Please log in.');
        showLogin();
    }
}

// Logout function
function logout() {
    localStorage.removeItem('username'); // Remove username from localStorage
    checkLogin();
}

// Send message function
function sendMessage() {
    const message = document.getElementById('message').value;
    const username = localStorage.getItem('username'); // Get the current logged-in username

    if (message && username) {
        const messagesDiv = document.getElementById('messages');
        const messageDiv = document.createElement('div');
        
        // Add sender's username and message content
        messageDiv.innerHTML = `<strong>${username}</strong>: ${message}`;
        messagesDiv.appendChild(messageDiv);
        
        document.getElementById('message').value = ''; // Clear the input after sending
        messagesDiv.scrollTop = messagesDiv.scrollHeight; // Scroll to the bottom
    }
}

// Initialize the login state on page load
checkLogin();
