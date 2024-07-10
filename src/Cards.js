import { storage } from "./LocalStorage.js";
import { cardsWrapper } from "./index.js";

export function renderCards(data) {

    data.forEach(item => {
        const volumeInfo = item.volumeInfo;
        const image = volumeInfo.imageLinks ? volumeInfo.imageLinks.thumbnail : '../images/png/placeholder-21.png';
        const authors = volumeInfo.authors ? volumeInfo.authors.join(', ') : 'Unknown Author';
        const title = volumeInfo.title ? volumeInfo.title : 'Unknown Title';
        const averageRating = volumeInfo.averageRating ? volumeInfo.averageRating : '';
        const ratingsCount = volumeInfo.ratingsCount ? volumeInfo.ratingsCount : '0';
        const description = volumeInfo.description ? volumeInfo.description : 'No description available';
        const retailPrice = item.saleInfo && item.saleInfo.retailPrice ? item.saleInfo.retailPrice.amount : '';
        let currencyCode = item.saleInfo && item.saleInfo.retailPrice ? item.saleInfo.retailPrice.currencyCode : '';
        if (currencyCode === "EUR") {
            currencyCode = "€"
        }
        const price = currencyCode + retailPrice;

        const newCard = `
            <div class="card">
                <img src="${image}" alt="Book cover" class="card__img">
                <div class="card__info">
                    <div class="card__info-wrapper">
                        <span class="card__info-author">${authors}</span>
                        <p class="card__info-booktitle">${title}</p>
                        ${ratingsCount !== '0' ? 
                            `
                            <div class="card__info-ratingblock">
                                <div class="rating" data-total-value="${averageRating}">
                                    <div class="rating__item" data-item-value="5">★</div>
                                    <div class="rating__item" data-item-value="4">★</div>
                                    <div class="rating__item" data-item-value="3">★</div>
                                    <div class="rating__item" data-item-value="2">★</div>
                                    <div class="rating__item" data-item-value="1">★</div>
                                </div>
                                <span class="card__info-rating">${ratingsCount}M review</span>
                            </div>
                            `
                            :
                            ''
                        }
                        <p class="card__info-book-description">${description}</p>
                        <p class="card__info-price">${price}</p>
                        <button type="button" class="card__info-button ${storage.includes(item.id) ? 'in-cart' : ''}" data-index="${item.id}">${storage.includes(item.id) ? 'IN THE CART' : 'BUY NOW'}</button>
                    </div>
                </div>
            </div>
        `;

        cardsWrapper.innerHTML += newCard;
    });
}