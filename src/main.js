import '../styles/modern-normalize.css'
import '../styles/style.css'

const themeDarkBtn = document.querySelector('.btn-dark');

const themeLightBtn = document.querySelector('.btn-light');

const symbolIcon = document.querySelectorAll('.icon');

const theme = localStorage.getItem('theme');

theme && document.body.classList.add(theme);

const handleThemeDark = () => {
    document.body.classList.add('dark-mode');
    localStorage.setItem('theme','dark-mode');
    symbolIcon.forEach(icon => {
        icon.style.filter = "invert(100%)";
    });
    };

const handleThemeLight = () => {
    document.body.classList.remove('dark-mode');
    localStorage.removeItem('theme');
    symbolIcon.forEach(icon => {
        icon.style.filter = "none";
    });
};

themeDarkBtn.addEventListener('click', handleThemeDark);

themeLightBtn.addEventListener('click', handleThemeLight);

// const symbolIcon = document.querySelector('.symbol-icon');

// const imgIcon = document.querySelectorAll('.img-icon');


// symbolIcon.style.filter = "invert(99%) sepia(96%) saturate(696%) hue-rotate(303deg) brightness(104%) contrast(101%)";
// imgIcon.forEach(icon => {
//     icon.style.filter = "brightness(0) saturate(100%) invert(92%) sepia(20%) saturate(942%) hue-rotate(308deg) brightness(111%) contrast(101%);)";
// });

// symbolIcon.style.removeProperty('filter');
// imgIcon.forEach(icon => {
//     icon.style.filter = "invert(100%)";
// });