document.addEventListener('DOMContentLoaded', function() {
  TU_REST_API();
});

function TU_REST_API() {
  document.getElementById('loginButton').addEventListener('click', async function(event) {
    event.preventDefault(); // Prevent page refresh on button click

    // Trim the inputs
    const username = document.getElementById('username').value.trim();
    const password = document.getElementById('password').value.trim();

    // Ensure lowercase fields (if required by the API)
    const data = {
      UserName: username,
      PassWord: password
    };

    const applicationKey = "TU1ccb6b0f7bcc2b84370e137b43ec5890f7d6fc1f9d52572753a6b100574a97a2dd855115923fd522953b6c260360540f";

    try {
      console.log('Request:', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Application-Key': applicationKey
        },
        body: JSON.stringify(data)
      });

      const response = await fetch('https://restapi.tu.ac.th/api/v1/auth/Ad/verify', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Application-Key': applicationKey
        },
        body: JSON.stringify(data)
      });

      const result = await response.json();
      console.log('Response:', result);

      if (response.ok) {
        console.log('Login Successful:', result);
        alert('Login success');
      } else {
        console.log('Error:', result);
        alert('Login failed: ' + result.message);
      }
    } catch (error) {
      console.error('Error:', error);
    }
  });
}
