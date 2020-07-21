const packSelectionEls = document.getElementsByClassName(
  'choose-questions-pack-container--pack-list--item',
);
for (let i = 0; i < packSelectionEls.length; i++) {
  const packEl = packSelectionEls[i];
  packEl.addEventListener('click', (e) => {
    localStorage.setItem('questionPack', Number(e.target.textContent));
    window.location.href = '/test.html';
  });
}
