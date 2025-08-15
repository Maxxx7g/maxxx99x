// DOM Elements
const loginForm = document.getElementById('loginForm');
const loginPage = document.getElementById('loginPage');
const dashboardPage = document.getElementById('dashboardPage');
const uidInput = document.getElementById('uidInput');
const uidDetails = document.getElementById('uidDetails');

// Sample UID data for demonstration
const sampleUIDData = {
    "123456789": {
        name: "Alice Johnson",
        level: 45,
        guild: "Dragon Slayers",
        experience: 125000,
        lastActive: "2024-01-15 14:30"
    },
    "987654321": {
        name: "Bob Smith",
        level: 32,
        guild: "Phoenix Rising",
        experience: 89000,
        lastActive: "2024-01-14 09:15"
    },
    "555555555": {
        name: "Charlie Brown",
        level: 67,
        guild: "Thunder Hawks",
        experience: 234000,
        lastActive: "2024-01-15 18:45"
    }
};

// Login Form Handler
loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    // Get form values
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    
    // Simple validation
    if (email && password) {
        // Simulate login success and redirect to dashboard
        showDashboard();
    }
});

// Show Dashboard Function
function showDashboard() {
    loginPage.classList.remove('active');
    dashboardPage.classList.add('active');
    
    // Update page background for dashboard
    document.body.style.background = '#f8fafc';
    
    // Initialize dashboard features
    initializeDashboard();
}

// Initialize Dashboard Features
function initializeDashboard() {
    // Add event listeners for dashboard functionality
    const getDetailsBtn = document.querySelector('.get-details-btn');
    if (getDetailsBtn) {
        getDetailsBtn.addEventListener('click', getUIDDetails);
    }
    
    // Add diamond selection functionality
    const diamondOptions = document.querySelectorAll('.diamond-option');
    diamondOptions.forEach(option => {
        option.addEventListener('click', function() {
            const amount = this.getAttribute('onclick').match(/\d+/)[0];
            selectDiamond(parseInt(amount));
        });
    });
}

// UID Lookup Function
function getUIDDetails() {
    const uidInput = document.getElementById('uidInput');
    const uid = uidInput.value.trim();
    
    if (!uid) {
        alert('Please enter a UID');
        return;
    }
    
    const detailsSection = document.getElementById('uidDetails');
    
    // Simulate API call
    setTimeout(() => {
        if (sampleUIDData[uid]) {
            const data = sampleUIDData[uid];
            displayUIDDetails(data);
        } else {
            displayUIDDetails({
                name: "User Not Found",
                level: "-",
                guild: "-",
                experience: "-",
                lastActive: "-"
            });
        }
    }, 500);
}

// Display UID Details
function displayUIDDetails(data) {
    const detailsSection = document.getElementById('uidDetails');
    detailsSection.style.display = 'block';
    
    document.getElementById('userName').textContent = data.name;
    document.getElementById('userLevel').textContent = data.level;
    document.getElementById('userGuild').textContent = data.guild;
    document.getElementById('userExp').textContent = data.experience;
    document.getElementById('lastActive').textContent = data.lastActive;
}

// Diamond Selection Function
function selectDiamond(amount) {
    const selectedInfo = document.getElementById('selectedDiamond');
    const selectedAmount = document.getElementById('selectedAmount');
    
    selectedAmount.textContent = amount;
    selectedInfo.style.display = 'block';
}

// Purchase Diamonds Function
function purchaseDiamonds() {
    const selectedAmount = document.getElementById('selectedAmount').textContent;
    alert(`Processing purchase for ${selectedAmount} diamonds...`);
}

// Logout Function
function logout() {
    dashboardPage.classList.remove('active');
    loginPage.classList.add('active');
    document.body.style.background = 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)';
    
    // Clear form
    document.getElementById('email').value = '';
    document.getElementById('password').value = '';
}

// Add keyboard navigation
document.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' && e.target.type === 'password') {
        loginForm.dispatchEvent(new Event('submit'));
    }
});

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    // Add initial animations
    const loginCard = document.querySelector('.login-card');
    if (loginCard) {
        loginCard.style.opacity = '0';
        loginCard.style.transform = 'translateY(30px)';
        
        setTimeout(() => {
            loginCard.style.transition = 'all 0.6s ease';
            loginCard.style.opacity = '1';
            loginCard.style.transform = 'translateY(0)';
        }, 100);
    }
});

