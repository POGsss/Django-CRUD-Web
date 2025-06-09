// URL For API Endpoint
const BASE_URL = 'http://192.168.100.218:8000';
const USER_URL = 'http://192.168.100.218:8000/user/';
const UPDATE_URL = 'http://192.168.100.218:8000/user/<int:pk>/';

// Function Update Analytics
async function updateAnalytics() {
  try {
    const res = await fetch(USER_URL);
    const data = await res.json();

    console.log(data.length);

    document.getElementById('totalUsers').textContent = data.length.toString().padStart(3, '0');
    document.getElementById('maleUsers').textContent = data.filter(user => user.gender === 'Male').length.toString().padStart(3, '0');
    document.getElementById('femaleUsers').textContent = data.filter(user => user.gender === 'Female').length.toString().padStart(3, '0');
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

    const imageUrl = user.profile_picture ? `${BASE_URL}${user.profile_picture}` : 'assets/image_placeholder.svg';

    card.innerHTML = `
      <img src="${imageUrl}" alt="profile">
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
    const res = await fetch(USER_URL);
    const users = await res.json();
    const filtered = users.filter(u => u.name.toLowerCase().includes(query));
    renderUsers(filtered);
  } catch (error) {
    console.error('Error filtering users:', error);
  }
});

// Search Icon Toggle
document.getElementById('search').addEventListener('click', () => {
  const searchBar = document.getElementById('searchBar');
  searchBar.style.display = searchBar.style.display === 'block' ? 'none' : 'block';
  searchBar.focus();
});

// Search Icon Visibility Based On Screen Width
window.addEventListener('resize', () => {
  const searchBar = document.getElementById('searchBar');
  if (window.screen.width > 512) {
    searchBar.style.display = 'block';
  } else {
    searchBar.style.display = 'none';
  }
});

// Calling The Load Users Function On Page Load
loadUsers();
updateAnalytics();
