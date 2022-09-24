const langMenu = document.querySelector('.lang-menu');
const langSelection = document.querySelector('.lang-selection');
const optionLang = document.querySelectorAll('.lang-option');
const selected = document.querySelector('.selected-lang');

function showSelections() {
    langSelection.classList.add('open-lang-selection');
};

function hideSelections() {
    langSelection.classList.remove('open-lang-selection');
};


langMenu.addEventListener('click', () => {
    langSelection.classList.toggle('open-lang-selection')
})


