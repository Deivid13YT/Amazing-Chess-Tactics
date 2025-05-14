document.getElementById('buscador').addEventListener('input', function () {
  const search = this.value.toLowerCase();
  document.querySelectorAll('section').forEach(section => {
    section.style.display = section.innerText.toLowerCase().includes(search) ? 'block' : 'none';
  });
});