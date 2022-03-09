// Форма открытия и закрытия popup

const menuButton = document.querySelector('.header__menu-button');
const closeButtons = document.querySelector('.popup__close');
const popupMenu = document.querySelector('.popup');

//Функция открытия меню
menuButton.addEventListener('click', () => openPopup(popupMenu));

//Функция закрытия меню
//closeButtons.addEventListener('click', () => closePopup(popupMenu));

const buttonEscKey = 27;

// Универсальная функция открытия всех popup
function openPopup(popupMenu) {
    popupMenu.classList.add('popup_opened');
    document.addEventListener('keydown', handleEscUp);
    popupMenu.addEventListener('mousedown', handleClickOverlay);
}

// Универсальная функция закрытия всех popup
function closePopup(popupMenu) {
    popupMenu.classList.remove('popup_opened');
    document.removeEventListener('keydown', handleEscUp);
    popupMenu.removeEventListener('mousedown', handleClickOverlay);
}

// Функция на overlay
const handleClickOverlay = (evt) => {
    if (evt.target.classList.contains('popup') || evt.target.classList.contains('popup__close')) {
        closePopup(evt.currentTarget);
    }
};

// //Функция на esc
const handleEscUp = (evt) => {
    if (evt.keyCode === buttonEscKey) {
        const activePopup = document.querySelector('.popup_opened');
        closePopup(activePopup);
    }
};

//Форма submit
const formElement = document.querySelector('.form');
const emailInput = formElement.querySelector('.form__email');

formElement.addEventListener('submit', sendFromSubmit);

function sendFromSubmit(evt) {
    console.log('sendFromSubmit')
    console.log(emailInput.value)

    emailInput.value = "";
    evt.preventDefault();
}

// Автоматическое закрытие popup после перехода по ссылке

const popupAboutLink = document.querySelector('#popup-about');
const popupLooksLink = document.querySelector('#popup-looks');
const popupFooterLink = document.querySelector('#popup-footer');

popupAboutLink.addEventListener('click', () => closePopup(popupMenu));

popupLooksLink.addEventListener('click', () => closePopup(popupMenu));

popupFooterLink.addEventListener('click', () => closePopup(popupMenu));
