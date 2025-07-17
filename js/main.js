const toggleBtn = document.querySelector('.mob-meniu-button');
const menu = document.querySelector('.mob-meniu');
const closeBtn = document.querySelector('.mb-meniu-corner');

toggleBtn.addEventListener('click', () => {
  menu.classList.toggle('show');
});

closeBtn.addEventListener('click', () => {
  menu.classList.remove('show');
});

document.querySelectorAll('.mob-meniu-item').forEach(item => {
  item.addEventListener('click', () => {
    item.classList.toggle('active');
  });
});
