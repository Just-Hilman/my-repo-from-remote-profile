const film = document.querySelector('.film');
const detail = document.querySelector('.detail');

film.addEventListener('click', function (e) {
    if (e.target.className == 'thumb') {
        detail.src = e.target.src;
    }
});

const harga = 275500;
// const quantity = document.querySelector('.quantity');
const minus = document.querySelector('.minus');
const plus = document.querySelector('.plus');
const angka = document.querySelector('input');

minus.addEventListener('click', function (e) {
    angka.value = parseInt(angka.value) - 1;

});

plus.addEventListener('click', function (e) {
    angka.value = parseInt(angka.value) + 1;
});



const hitung = document.querySelector('.hitung');
hitung.addEventListener('click', function (e) {
    const total = harga * angka.value;
    document.querySelector('#total').innerHTML = total;
});