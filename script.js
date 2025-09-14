// Expand/collapse boxes
document.querySelectorAll('.box').forEach(box => {
  box.addEventListener('click', () => {
    document.querySelectorAll('.box').forEach(b => b.classList.remove('expanded'));
    box.classList.add('expanded');
  });
});

// Color change
document.querySelectorAll('.color').forEach(btn => {
  btn.addEventListener('click', e => {
    e.stopPropagation();
    let box = btn.closest('.box');
    if (btn.classList.contains('red')) box.style.background = "lightcoral";
    if (btn.classList.contains('blue')) box.style.background = "lightblue";
    if (btn.classList.contains('green')) box.style.background = "lightgreen";
  });
});

// Size change
document.querySelectorAll('.size').forEach(btn => {
  btn.addEventListener('click', e => {
    e.stopPropagation();
    let box = btn.closest('.box');
    if (btn.classList.contains('small')) box.style.height = "120px";
    if (btn.classList.contains('medium')) box.style.height = "180px";
    if (btn.classList.contains('large')) box.style.height = "250px";
  });
});
