(function () {
  'use strict';
  const form = document.getElementById('contact-form');
  const status = document.getElementById('contact-form-status');
  if (!form || !status) return;
  const submit = form.querySelector('button[type="submit"]');
  form.addEventListener('submit', async function (event) {
    event.preventDefault();
    if (!form.reportValidity()) return;
    if (submit) submit.disabled = true;
    status.textContent = 'Sending your message...';
    try {
      const response = await fetch(form.action, {
        method: 'POST',
        body: new FormData(form),
        headers: { 'Accept': 'application/json' }
      });
      const result = await response.json();
      if (!response.ok || !result.success) {
        throw new Error('The form service did not accept this message.');
      }
      form.reset();
      status.textContent = 'Thank you! Your message has been sent.';
    } catch (error) {
      status.textContent = 'Sorry, your message could not be sent. Please email or call us directly.';
      console.error('Contact form submission failed:', error);
    } finally {
      if (submit) submit.disabled = false;
    }
  });
})();
