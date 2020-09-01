const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const checkboxRef = document.querySelector('.js-switch-input');
const bodyRef = document.body;
checkboxRef.addEventListener('change', checkboxHandler);

checkThemeLocalStorage();

function checkboxHandler(e) {
  if (e.currentTarget.checked) {
    bodyRef.classList.remove(Theme.LIGHT);
    bodyRef.classList.add(Theme.DARK);
    localStorage.setItem('theme', 'dark');
  } else {
    bodyRef.classList.remove(Theme.DARK);
    bodyRef.classList.add(Theme.LIGHT);
    localStorage.setItem('theme', 'light');
  }
}

function checkThemeLocalStorage() {
  switch (localStorage.getItem('theme')) {
    case 'dark':
      bodyRef.classList.add(Theme.DARK);
      checkboxRef.checked = true;
    case 'light': 
      bodyRef.classList.add(Theme.LIGHT);
    case null:
      bodyRef.classList.add(Theme.LIGHT);
  }
}