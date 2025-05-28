// 🔢 Step 1: Define the following variables
// 🔐 Step 2: Login check
// 🧠 Step 3: Entry access logic using Boolean operators
// 🧾 Step 4: Handle userRole using a switch statement


let age = 19;
let hasID = true;
let isVIP = true;
let isLoggedIn = true;
let userRole = 'Guest';

if (!isLoggedIn) {
    console.log('🔒 Access denied. Please log in.')
} else {
    if ((age >= 18 && hasID) || isVIP) {
        console.log('✅ You may enter.');
        switch(userRole.toLowerCase()) {
            case 'admin':
                console.log(`👑 Welcome, ${userRole}. You have full access.`)
                break;
            case 'staff':
                console.log(`🛠️ Welcome, ${userRole}. You have limited tools.`)
                break;
            case 'guest':
                console.log(`👋 Hello ${userRole}! Upgrade to VIP for more features.`)
                break;
            case 'banned':
                console.log(`⛔ You are banned from this venue.`)  
                break;
            default:
                console.log('❓ Unknown role.')
                }
    }  else {
        console.log('🚫 Entry denied due to age or ID.')
    }
}

