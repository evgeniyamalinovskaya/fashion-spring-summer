// Форма открытия и закрытия popup

const menuButton = document.querySelector('.header__menu-button');
const closeButtons = document.querySelector('.popup__close');
const popupMenu = document.querySelector('.popup');

//Функция открытия меню
menuButton.addEventListener('click', () => openPopup(popupMenu));

//Функция закрытия меню
closeButtons.addEventListener('click', () => closePopup(popupMenu));

// Универсальная функция открытия всех popup
function openPopup(popupMenu) {
    popupMenu.classList.add('popup_opened');
}

// Универсальная функция закрытия всех popup
function closePopup(popupMenu) {
    popupMenu.classList.remove('popup_opened');
}

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
