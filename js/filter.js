document.querySelectorAll('button').forEach(button => {
  button.addEventListener('click', function () {
    const filter = this.getAttribute('data-filter');
    const items = document.querySelectorAll('.list-item');
    items.forEach(item => {
      if (filter === 'all' || item.classList.contains(filter)) {
        item.style.display = 'block';
      } else {
        item.style.display = 'none';
      }
    });
  });
});
