// URL For API Endpoint
const BASE_URL = 'http://192.168.100.218:8000';
const USER_URL = 'http://192.168.100.218:8000/user/';

// Function Update Analytics
async function updateAnalytics() {
  try {
    const res = await fetch(USER_URL);
    const data = await res.json();

    console.log(data.length);

    document.getElementById('totalUsers').textContent = data.length.toString().padStart(3, '0');
  } catch (error) {
    console.error('Error fetching analytics:', error);
  }
}

// Function Load Users From API
async function loadUsers() {
  try {
    const res = await fetch(USER_URL);
    const users = await res.json();

    renderUsers(users);
  } catch (error) {
    console.error('Error fetching users:', error);
  }
}

// Function Render Users In The DOM
function renderUsers(users) {
  const list = document.getElementById('userList');
  list.innerHTML = '';
  users.forEach(user => {
    const card = document.createElement('div');
    card.className = 'userCardContainer';

    card.innerHTML = `
      <img src="${BASE_URL}${user.profile_picture}" alt="profile">
      <div class="userCard">
        <h3>${user.name}</h3>
        <p>${user.age}, ${user.gender}</p>
        <p>${user.hobby}, ${user.profession}</p>
      </div>
    `;

    list.appendChild(card);
  });
}

// Search Functionality
document.getElementById('searchBar').addEventListener('input', async e => {
  const query = e.target.value.toLowerCase();
  try {
    const res = await fetch(API_URL);
    const users = await res.json();
    const filtered = users.filter(u => u.name.toLowerCase().includes(query));
    renderUsers(filtered);
  } catch (error) {
    console.error('Error filtering users:', error);
  }
});

// Calling The Load Users Function On Page Load
loadUsers();
updateAnalytics();