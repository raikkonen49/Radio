function openPopup() {
  document.getElementById('popupOverlay').classList.remove('hidden');
}

function closePopup() {
  document.getElementById('popupOverlay').classList.add('hidden');
}

document.getElementById('radioForm').addEventListener('submit', function (e) {
  e.preventDefault();
  let isValid = true;

  // Убираем старые ошибки
  const wrappers = this.querySelectorAll('.field-wrapper');
  wrappers.forEach(wrapper => wrapper.classList.remove('invalid'));

  // Скрываем сообщение об успехе при новой отправке
  const successText = this.querySelector('.success-text');
  if (successText) successText.classList.add('hidden');

  // Проверяем каждый input и textarea
  wrappers.forEach(wrapper => {
    const input = wrapper.querySelector('input, textarea');
    if (input) {
      if (!input.value.trim()) {
        wrapper.classList.add('invalid');
        isValid = false;
      }
    }
  });

  // Проверка чекбокса
  const checkbox = this.querySelector('input[name="agreement"]');
  const errorText = this.querySelector('.error-text');

  if (!checkbox.checked) {
    errorText.classList.remove('hidden');
    isValid = false;
  } else {
    errorText.classList.add('hidden');
  }

  if (isValid) {
    this.reset();
    wrappers.forEach(wrapper => wrapper.classList.remove('invalid'));
    errorText.classList.add('hidden');
    if (successText) successText.classList.remove('hidden');
  }
});

// Скрывать сообщение об успехе при вводе в поля
document.querySelectorAll('#radioForm input, #radioForm textarea, #radioForm input[type="checkbox"]').forEach(el => {
  el.addEventListener('input', () => {
    const successText = document.querySelector('#radioForm .success-text');
    if (successText) successText.classList.add('hidden');
  });
});
