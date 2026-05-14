// Countdown Timer Logic
// Set the date we're counting down to: May 29, 2026, 19:00:00
const countDownDate = new Date("May 29, 2026 19:00:00").getTime();

// Update the count down every 1 second
const countdownFunction = setInterval(function() {
    const now = new Date().getTime();
    const distance = countDownDate - now;

    if (distance < 0) {
        clearInterval(countdownFunction);
        document.getElementById("countdown").innerHTML = "<h3 style='color: var(--gold-dark); font-family: Cairo;'>لقد حان موعد الفرحة! أهلاً بكم</h3>";
        return;
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("days").innerHTML = days < 10 ? '0' + days : days;
    document.getElementById("hours").innerHTML = hours < 10 ? '0' + hours : hours;
    document.getElementById("minutes").innerHTML = minutes < 10 ? '0' + minutes : minutes;
    document.getElementById("seconds").innerHTML = seconds < 10 ? '0' + seconds : seconds;
}, 1000);


// RSVP Form Submission to WhatsApp
document.getElementById('rsvp-form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const name = document.getElementById('guest-name').value;
    const status = document.getElementById('guest-status').value;
    const count = document.getElementById('guest-count').value || "1";
    
    // The specific WhatsApp number provided
    const phoneNumber = "963968804006"; 
    
    let message = `مرحباً،\nأنا ${name}\n`;
    
    if (status === 'yes') {
        message += `أؤكد حضوري لحفل الخطوبة بكل سرور 🌸\nعدد الأشخاص: ${count}`;
    } else {
        message += `أعتذر عن الحضور، وأتمنى لكم السعادة والتوفيق 🤍`;
    }
    
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');
});


// Falling Rose Petals Animation Logic
function createPetal() {
    const petalsContainer = document.getElementById('petals-container');
    const petal = document.createElement('div');
    petal.classList.add('petal');
    
    // Randomize position across the screen width
    petal.style.left = Math.random() * 100 + 'vw';
    
    // Randomize animation duration to simulate natural falling (between 6s and 12s)
    const fallDuration = Math.random() * 6 + 6;
    petal.style.animation = `fall ${fallDuration}s linear forwards`;
    
    // Randomize size slightly for realistic depth
    const size = Math.random() * 15 + 10;
    petal.style.width = size + 'px';
    petal.style.height = size + 'px';
    
    // Randomize starting rotation
    petal.style.transform = `rotate(${Math.random() * 360}deg)`;
    
    petalsContainer.appendChild(petal);
    
    // Remove petal after animation completes to keep DOM clean
    setTimeout(() => {
        petal.remove();
    }, fallDuration * 1000);
}

// Create new petals periodically (adjust the interval for petal density)
// 400ms = beautiful elegant density, not too chaotic
setInterval(createPetal, 400);

// Initialize a few petals immediately on load
for(let i = 0; i < 5; i++) {
    setTimeout(createPetal, i * 100);
}
