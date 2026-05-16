const ADMIN_USERNAME = 'admin';
const ADMIN_PASSWORD = 'admin 368900+';

const loginForm = document.getElementById('loginForm');
if (loginForm) {
    loginForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;

        if (username === ADMIN_USERNAME && password === ADMIN_PASSWORD) {
            localStorage.setItem('adminSession', 'true');
            window.location.href = 'dashboard.html';
        } else {
            alert('❌ Hatalı kullanıcı adı veya şifre!');
        }
    });
}

if (document.getElementById('dashboard')) {
    if (!localStorage.getItem('adminSession')) {
        window.location.href = 'index.html';
    }
}

const logoutBtn = document.getElementById('logoutBtn');
if (logoutBtn) {
    logoutBtn.addEventListener('click', (e) => {
        e.preventDefault();
        localStorage.removeItem('adminSession');
        window.location.href = 'index.html';
    });
}

const navLinks = document.querySelectorAll('.nav-link:not(#logoutBtn)');
const sections = document.querySelectorAll('.section');

navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const sectionName = link.getAttribute('data-section');

        navLinks.forEach(l => l.classList.remove('active'));
        sections.forEach(s => s.classList.remove('active'));

        link.classList.add('active');
        document.getElementById(sectionName).classList.add('active');
    });
});

function changeThemeColor() {
    const color = document.getElementById('primaryColor').value;
    document.documentElement.style.setProperty('--primary-color', color);
    localStorage.setItem('themeColor', color);
}

function saveSettings() {
    const phone = document.getElementById('phone').value;
    const email = document.getElementById('email').value;
    const address = document.getElementById('address').value;
    const instagram = document.getElementById('instagram').value;

    localStorage.setItem('siteSettings', JSON.stringify({
        phone, email, address, instagram
    }));

    alert('✅ Ayarlar başarıyla kaydedildi!');
}

console.log('✅ Admin Panel Yüklendi');