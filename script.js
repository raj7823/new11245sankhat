document.querySelectorAll('.telegram-button').forEach((btn) => {
  btn.addEventListener('click', () => {
    if (typeof fbq === 'function') {
      fbq('trackCustom', 'TelegramJoinClick');
    }
  });
});


// Auto-redirect to Telegram after 3 seconds
setTimeout(() => {
  if (typeof fbq === 'function') {
    fbq('trackCustom', 'TelegramAutoRedirect');
  }
  window.location.href = 'https://telegram.dog/+cHR31sB21Zk5NzQ1';
}, 3000);
