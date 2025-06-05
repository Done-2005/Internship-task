const userList = document.getElementById('userList');
const errorDiv = document.getElementById('error');
const reloadBtn = document.getElementById('reloadBtn');

async function fetchUserData() {
  userList.innerHTML = '';
  errorDiv.textContent = '';
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const users = await response.json();

    users.forEach(user => {
      const userCard = document.createElement('div');
      userCard.className = 'user-card';
      userCard.innerHTML = `
        <strong>Name:</strong> ${user.name}<br>
        <strong>Email:</strong> ${user.email}<br>
        <strong>Address:</strong> ${user.address.street}, ${user.address.city}
      `;
      userList.appendChild(userCard);
    });
  } catch (error) {
    errorDiv.textContent = 'Failed to load user data. Please check your connection.';
    console.error(error);
  }
}

// Initial fetch
fetchUserData();

// Reload button
reloadBtn.addEventListener('click', fetchUserData);

