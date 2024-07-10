import { fetchData } from "./DataLoading.js";
import { renderCards } from "./Cards.js";
import { storage } from "./LocalStorage.js";

export function CardsWrapper() {
    const beigik = document.querySelector('.beigik');
    const beigikText = document.querySelector('.beigik-tekst');

    // Обработчик кнопки "Загрузить еще"
    const loadMoreButton = document.querySelector('.load-more-button');
    loadMoreButton.addEventListener('click', async function() {
        const categoryText = document.querySelector('.chosen').textContent;
        const newData = await fetchData(categoryText, true);
        if (newData) {
            renderCards(newData);
        }
    });

    // Обработчик кнопок покупки
    document.addEventListener('click', function(event) {
        if(event.target.classList.contains('card__info-button') || event.target.classList.contains('in-cart')) {
            const id = event.target.getAttribute('data-index');

            if(storage.includes(id)) {
                storage.splice(storage.indexOf(id), 1)
            } else {
                storage.push(id)
            }

            localStorage.setItem('cards', JSON.stringify(storage));

            const isBuyNow = event.target.innerHTML === 'BUY NOW';
            event.target.classList.toggle('card__info-button', !isBuyNow);
            event.target.classList.toggle('in-cart', isBuyNow);
            event.target.innerHTML = isBuyNow ? 'IN THE CART' : 'BUY NOW';

            beigikText.textContent = storage.length;
            if(storage.length === 0) {
                beigik.style.display = 'none';
                beigikText.style.display = 'none';
            } else {
                beigik.style.display = 'block';
                beigikText.style.display = 'block';
            }
        }
    })
}