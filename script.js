import Amplify, { Auth } from 'aws-amplify';
import awsconfig from './aws-exports';

Amplify.configure(awsconfig);

document.getElementById('loginForm').addEventListener('submit', async (e) => {
    e.preventDefault();
    
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const notification = document.getElementById('notification');

    try {
        // Sign in the user
        const user = await Auth.signIn(username, password);

        // Notify the user of success
        notification.innerText = 'Login successful! Redirecting...';

        // Redirect to your portfolio page
        window.location.href = 'portfolio.html'; // Replace with your actual portfolio page URL
    } catch (error) {
        // Handle any login errors
        notification.innerText = 'Login failed: ' + error.message;
    }
});
