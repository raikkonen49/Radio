function openPopup(button) {
  const popupId = button.getAttribute('data-popup');
  document.getElementById(popupId).classList.remove('hidden');
}

function closePopup(button) {
  const popupId = button.getAttribute('data-popup');
  document.getElementById(popupId).classList.add('hidden');
}

// ✅ Обрабатываем все формы с классом .popup-form-element
document.querySelectorAll('.popup-form-element').forEach(form => {
  form.addEventListener('submit', function (e) {
    e.preventDefault();
    let isValid = true;

    const wrappers = this.querySelectorAll('.field-wrapper');
    wrappers.forEach(wrapper => wrapper.classList.remove('invalid'));

    const successText = this.querySelector('.success-text');
    if (successText) successText.classList.add('hidden');

    wrappers.forEach(wrapper => {
      const input = wrapper.querySelector('input, textarea');
      if (input && !input.value.trim()) {
        wrapper.classList.add('invalid');
        isValid = false;
      }
    });

    const checkbox = this.querySelector('input[name="agreement"]');
    const errorText = this.querySelector('.error-text');
    if (checkbox && errorText) {
      if (!checkbox.checked) {
        errorText.classList.remove('hidden');
        isValid = false;
      } else {
        errorText.classList.add('hidden');
      }
    }

    if (isValid) {
      this.reset();
      wrappers.forEach(wrapper => wrapper.classList.remove('invalid'));
      if (errorText) errorText.classList.add('hidden');
      if (successText) successText.classList.remove('hidden');
    }
  });

  form.querySelectorAll('input, textarea, input[type="checkbox"]').forEach(el => {
    el.addEventListener('input', () => {
      const successText = form.querySelector('.success-text');
      if (successText) successText.classList.add('hidden');
    });
  });
});
