const addButton = document.getElementById('add-btn');

addButton.addEventListener('click', () => {
  const box = document.createElement('div');
  box.classList.add('box');

  const closeBtn = document.createElement('span');
  closeBtn.classList.add('close-btn');
  closeBtn.innerHTML = 'x';
  closeBtn.addEventListener('click', () => {
    box.remove();
  });

  box.appendChild(closeBtn);

  document.body.appendChild(box);
});
