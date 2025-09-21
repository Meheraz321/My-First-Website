// year auto update
document.getElementById('year').textContent = new Date().getFullYear();

// contact form fake submit
const form = document.getElementById('contactForm');
const sendBtn = document.getElementById('sendBtn');
const status = document.getElementById('status');

form.addEventListener('submit', e => {
  e.preventDefault();
  sendBtn.disabled = true;
  sendBtn.textContent = 'Sending...';
  setTimeout(()=>{
    sendBtn.disabled = false;
    sendBtn.textContent = 'Send message';
    status.textContent = 'Message sent! I will reply soon.';
    form.reset();
  }, 1000);
});