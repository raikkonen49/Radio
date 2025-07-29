const historyOpenButtons = document.querySelectorAll('.history-button');
const historyCloseButton = document.querySelector('.history-close');
const historyPanel = document.querySelector('.history-container');

historyOpenButtons.forEach(button => {
  button.addEventListener('click', () => {
    historyPanel.classList.toggle('action');
    button.classList.toggle('action');
  });
});

historyCloseButton.addEventListener('click', () => {
  historyPanel.classList.remove('action');
  historyOpenButtons.forEach(button => button.classList.remove('action'));
});