import { fetchData } from "./DataLoading.js";
import { renderCards } from "./Cards.js";
import { cardsWrapper } from "./index.js"; 

const categories = document.querySelectorAll('.category');

export function Categories() {

    document.addEventListener('DOMContentLoaded', async function() {
        const categoryText = document.querySelector('.chosen').textContent;
        const data = await fetchData(categoryText); 
        if (data) {
            renderCards(data); 
        }
    });

    document.addEventListener('click', async function(event) {
        if (event.target.classList.contains('category__text')) { 
            const categoryText = event.target.textContent;
            const categoryImage = event.target.closest('.category').querySelector('.category__img');
    
            categories.forEach(category => {
                category.querySelector('.category__text').classList.remove('chosen');
                const image = category.querySelector('.category__img');
                if (image) {
                    image.removeAttribute('src');
                    image.style.paddingRight = '';
                }
            });
    
            event.target.classList.add('chosen');
            categoryImage.setAttribute('src', './images/svg/кружок.svg');
    
            const data = await fetchData(categoryText);
    
            if (data) {
                console.log(data);
                cardsWrapper.innerHTML = '';
                renderCards(data);
            }
        }
    })
}