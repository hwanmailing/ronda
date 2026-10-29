(() => {
 const input = document.getElementById('template-search');
 const cards = [...document.querySelectorAll('.collection-card')];
 const filters = [...document.querySelectorAll('[data-category][aria-pressed]')];
 let category = '전체';
 function filter() {
  const term = input.value.trim().toLocaleLowerCase(); let count = 0;
  cards.forEach(card => { const visible = (category === '전체' || card.dataset.category === category) && card.dataset.search.toLocaleLowerCase().includes(term); card.hidden = !visible; if(visible) count++; });
  document.getElementById('collection-count').textContent = `${count}개의 템플릿`;
  document.getElementById('collection-empty').hidden = count !== 0;
  filters.forEach(button => button.setAttribute('aria-pressed', String(button.dataset.category === category)));
 }
 input.addEventListener('input', filter);
 filters.forEach(button => button.addEventListener('click', () => {category = button.dataset.category; filter();}));
 document.getElementById('reset-search').addEventListener('click', () => { input.value = ''; category = '전체'; filter(); });
})();
