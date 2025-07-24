// Переходы по клику
document.getElementById('view-progress').addEventListener('click', () => {
  location.href = 'view.html';
});

document.getElementById('add-training').addEventListener('click', () => {
  location.href = 'add.html';
});

document.getElementById('delete-training').addEventListener('click', () => {
  location.href = 'delete.html';
});

// Переходы по Enter или Space (для accessibility)
function addKeyboardNavigation(id, url) {
  const el = document.getElementById(id);
  el.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      location.href = url;
    }
  });
}

addKeyboardNavigation('view-progress', 'view.html');
addKeyboardNavigation('add-training', 'add.html');
addKeyboardNavigation('delete-training', 'delete.html');
