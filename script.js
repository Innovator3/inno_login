document.getElementById('loginForm').addEventListener('submit', (e) => {
    e.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const notification = document.getElementById('notification');

    const authenticationData = {
        Username: username,
        Password: password,
    };
    
    const poolData = {
        UserPoolId: 'us-east-1_EAZJwauBS', // Replace with your User Pool ID
        ClientId: '4temc6j9dhf5v6an616ubga8oo', // Replace with your App Client ID
    };

    const userPool = new AmazonCognitoIdentity.CognitoUserPool(poolData);
    const userData = {
        Username: username,
        Pool: userPool,
    };

    const cognitoUser = new AmazonCognitoIdentity.CognitoUser(userData);
    const authenticationDetails = new AmazonCognitoIdentity.AuthenticationDetails(authenticationData);

    cognitoUser.authenticateUser(authenticationDetails, {
        onSuccess: (result) => {
            // User authenticated successfully
            notification.innerText = 'Login successful! Redirecting...';
            window.location.href = 'https://innoviousitservices.co.in/'; // Replace with your actual website URL
        },
        onFailure: (err) => {
            // Authentication failed
            notification.innerText = 'Login failed: ' + err.message;
        },
    });
});
