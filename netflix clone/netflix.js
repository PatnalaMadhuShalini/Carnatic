const faqList = document.querySelectorAll('.quest .textbox');
const faqIcons = document.querySelectorAll('.quest i');

for (let i = 0; i < faqList.length; i++) {
  faqList[i].addEventListener('click', function () {
    if (this.nextElementSibling.classList.contains('active')) {
      this.nextElementSibling.classList.remove('active');
      faqIcons[i].classList.remove('la-minus');
      faqIcons[i].classList.add('la-plus');
    } else {
      this.nextElementSibling.classList.add('active');
      faqIcons[i].classList.remove('la-plus');
      faqIcons[i].classList.add('la-minus');
    }
  });
}

const tryButtons = document.querySelectorAll('.try');

for (let button of tryButtons) {
  button.addEventListener('click', function () {
    const emailInput = this.parentNode.querySelector('input[type="text"]');
    if (!emailInput.value) {
      alert('Please enter your email address.');
      return;
    }
    if (!/\S+@\S+\.\S+/.test(emailInput.value)) {
      alert('Please enter a valid email address.');
      return;
    }
    // Submit the form or perform desired action
  });
}

const googleTranslateElement = document.getElementById('google_translate_element');

if (googleTranslateElement) {
  new google.translate.TranslateElement({ pageLanguage: 'en' }, googleTranslateElement);
}
