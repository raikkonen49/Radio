const historyOpenButton = document.querySelector('.history-button');
const historyCloseButton = document.querySelector('.history-close');
const historyPanel = document.querySelector('.history-container');

historyOpenButton.addEventListener('click', () => {
  historyPanel.classList.toggle('action');
  historyOpenButton.classList.toggle('action');
});

historyCloseButton.addEventListener('click', () => {
  historyPanel.classList.remove('action');
  historyOpenButton.classList.remove('action');
});

