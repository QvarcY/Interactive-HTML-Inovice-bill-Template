document.addEventListener('DOMContentLoaded', () => {
  const paymentStatus = document.querySelector('#paymentStatus');
  const paymentStatusText = document.querySelector('#paymentStatusText');
  const balanceText = document.querySelector('.balance b');

  paymentStatus.addEventListener('change', () => {
      paymentStatusText.classList.remove('prepared', 'paid');

      if (paymentStatus.value === 'prepared') {
          paymentStatusText.textContent = 'Sagatavots Apmaksai';
          paymentStatusText.classList.add('prepared');
          balanceText.textContent = 'Apmaksai kopā:';
      } else if (paymentStatus.value === 'paid') {
          paymentStatusText.textContent = 'APMAKSĀTS';
          paymentStatusText.classList.add('paid');
          balanceText.textContent = 'Kopā samaksāts:';
      } else {
          paymentStatusText.textContent = '';
          balanceText.textContent = 'Samaksai kopā:';
      }
  });
});