const film = document.querySelector('.film');


const detail = document.querySelector('.detail');

const thumbnail2 = document.querySelector('.thumbnail2');
const h3 = document.querySelector('.judul');

film.addEventListener('click', function (e) {
    if (e.target.className == 'thumb') {
        detail.src = e.target.src;
    }
});

//untuk mengganti judul
const h3baru = document.createElement('h3');
const teksh3baru = document.createTextNode('Midsomar');

h3baru.appendChild(teksh3baru);
thumbnail2.replaceChild(h3baru, h3);