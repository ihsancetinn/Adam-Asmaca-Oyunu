const word_el = document.getElementById('word');
const popup = document.getElementById('popup-container');
const message_el = document.getElementById('success-message');
const wrongLetters_el = document.getElementById('wrong-letters');
const items = document.querySelectorAll('.item');




const correctLetters = [];
const wrongLetters = [];
const selectedWord = getRandomWord();

function getRandomWord() {
    const words = ['javascrıpt', 'python', 'java', 'django', 'reactjs', 'angularjs', 'vuejs', 'typescrıpt', 'nodejs', 'nextjs'];
    return words[Math.floor(Math.random() * words.length)];

};


function displayWord() {
    word_el.innerHTML = `
     ${selectedWord.split('').map(letter => `
     <div class="letter">${correctLetters.includes(letter) ? letter : ''}</div>
     `).join('')}`;

    const w = word_el.innerText.replace(/\n/g, '');
    if (w === selectedWord) {
        popup.style.display = 'flex';
        message_el.innerText = 'Tebrikler Kazandınız. \n 🎉🥳🎊';
    }

};
function updateWrongLetters() {

    wrongLetters_el.innerHTML = `
    ${wrongLetters.length > 0 ? '<h3>Hatalı Harfler</h3>' : ''}
    ${wrongLetters.map(letter => `<span>${letter}</span>`)}
    `;

    items.forEach((item, index) => {
        const errorCount = wrongLetters.length;
        if (index < errorCount) {
            item.style.display = 'block';
        } else {
            item.style.display = 'none';
        }
    })
    if(wrongLetters.length === items.length) {
        popup.style.display = 'flex';
        popup.style.color= 'red';
        message_el.innerText = ' Kaybettiniz 😲';
    }t

}


window.addEventListener('keydown', function (e) {

    if (e.keyCode >= 65 && e.keyCode <= 90) {
        const letter = e.key;
        if (selectedWord.includes(letter)) {
            if (!correctLetters.includes(letter)) {
                correctLetters.push(letter);
                displayWord();
            } else {
                alert("Bu Harf Zaten Eklidir.")

            }
        } else {
            if (!wrongLetters.includes(letter)) {
                wrongLetters.push(letter);
                updateWrongLetters();
            }

        }
    }
})

displayWord();