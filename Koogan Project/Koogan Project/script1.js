// 1. Get references to the input fields
const userField = document.getElementById('userField');
const passField = document.getElementById('passwordField');

// 2. Function to check credentials
function handleLogin() {
    const username = userField.value;
    const password = passField.value;

    // Set your "Correct" credentials here
    if (username === "admin" && password === "1234") {
        showDashboard();
    } else {
        alert("Wrong credentials! Try admin / 1234");
    }
}

// 3. Listen for the "Enter" key on the password field
passField.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        event.preventDefault(); // Prevents the page from refreshing
        handleLogin();
    }
});

// 4. Also update your button to use this new logic
document.getElementById('signInBtn').onclick = handleLogin;

// 5. The function that switches screens
function showDashboard() {
    document.getElementById('loginBox').style.display = 'none';
    document.getElementById('mainDashboard').style.display = 'block';
    document.body.style.alignItems = 'flex-start'; 
}