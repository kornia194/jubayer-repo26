
// Countdown Timer
const countdown = () => {
    const eventDate = new Date("sep 10, 2024 00:00:00").getTime();
    const now = new Date().getTime();
    const difference = eventDate - now;

    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);

    document.getElementById('days').innerHTML = days;
    document.getElementById('hours').innerHTML = hours;
    document.getElementById('minutes').innerHTML = minutes;
    document.getElementById('seconds').innerHTML = seconds;

    if (difference < 0) {
        document.getElementById('countdown').innerHTML = "The event has started!";
    }
};

setInterval(countdown, 1000);

// RSVP Form
document.getElementById('rsvp-form').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Thank you for your RSVP!');
});

// Guestbook Form
document.getElementById('guestbook-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const message = this.querySelector('textarea').value;
    const messageContainer = document.getElementById('messages');
    const newMessage = document.createElement('p');
    newMessage.textContent = message;
    messageContainer.appendChild(newMessage);
    this.reset();
    alert('Thank you for your message!');
});
