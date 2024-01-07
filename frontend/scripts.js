const loginForm = document.getElementById('loginForm');
loginForm.addEventListener('submit', async (event) => {
    event.preventDefault();
    const formData = new FormData(loginForm);
    try {
        const response = await fetch('/login', {
            method: 'POST',
            body: formData
        });
        if (response.ok) {
            // Redirect to home page upon successful login
            window.location.href = '/home.html';
        } else {
            // Handle login failure
            console.error('Login failed');
        }
    } catch (error) {
        console.error('Error:', error);
    }
});
