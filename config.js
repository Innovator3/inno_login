const awsconfig = {
    Auth: {
      region: 'us-east-1', // Replace with your region
      userPoolId: 'us-east-1_ExaMple', // Replace with your User Pool ID
      userPoolWebClientId: '1h5l8k4abcde6fg7hijk8lmnopqr', // Replace with your App Client ID
      mandatorySignIn: false, // Set to true if you want to force sign-in
      authenticationFlowType: 'USER_PASSWORD_AUTH' // Change if needed
    },
    // Other configuration settings if needed
  };
  
  export default awsconfig;
  