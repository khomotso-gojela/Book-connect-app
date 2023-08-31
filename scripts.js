import { BOOKS_PER_PAGE, authors, books, genres } from "./data.js";

const matches = books
const page = 1;

// if (!books && !Array.isArray(books)) throw new Error('Source required') 
// if (!range && range.length < 2) throw new Error('Range must be an array with two numbers')

const day = {
    dark: '10, 10, 20',
    light: '255, 255, 255',
}

const night = {
    dark: '255, 255, 255',
    light: '10, 10, 20',
}

/****************BOOKS PREVIEW & MORE INFO FUNCTIONALITY*************************/
let fragment = document.createDocumentFragment()
const extracted = books.slice(0, 36)

function createPreview(book) {
    const prevElement = document.createElement('div');
    prevElement.classList.add('preview');
    prevElement.id = book.id

    const imageElement = document.createElement('img');
    imageElement.classList.add('preview__image')
    imageElement.src = book.image;
    imageElement.alt = book.title;
    prevElement.appendChild(imageElement);

    const prevInfo = document.createElement('div')
    prevInfo.classList.add('preview__info')

    const titleElement = document.createElement('h3');
    titleElement.classList.add('preview__title')
    titleElement.textContent = book.title;
    prevInfo.appendChild(titleElement);

    const authorElement = document.createElement('p');
    authorElement.classList.add("preview__author")
    authorElement.id = book.author
    authorElement.textContent = `Author: ${authors[book.author]}`;
    prevInfo.appendChild(authorElement);

    prevElement.appendChild(prevInfo);    

    return prevElement;
}
//Getting book info from the books array and appending them in the doc fragment.
for (let book of extracted) {
    const preview = createPreview(book)
    fragment.appendChild(preview)
}

document.querySelector('[data-list-items]').appendChild(fragment)
/*************************************************************************/

/****************SCREATING SEARCH GENRE OPTIONS*************************/
const genresFrag = document.createDocumentFragment()
const genreOption = document.createElement('option')
genreOption.value = 'any'
genreOption.innerText = 'All Genres'
genresFrag.appendChild(genreOption)

for (const [value,text] of Object.entries(genres)) {
    const opt = document.createElement('option')
    opt.value = value
    opt.innerText = text
    genresFrag.appendChild(opt)
}

document.querySelector('[data-search-genres]').appendChild(genresFrag)
/*************************************************************************/

/****************SCREATING SEARCH AUTHOR OPTIONS*************************/
const authorsFrag = document.createDocumentFragment()
const searchOpt = document.createElement('option')
searchOpt.value = 'any'
searchOpt.innerText = 'All Authors'
authorsFrag.appendChild(searchOpt)

for (const [id, text] of Object.entries(authors)) {
    const opt = document.createElement('option')
    opt.value = id
    opt.innerText = text
    authorsFrag.appendChild(opt)
}

document.querySelector('[data-search-authors]').appendChild(authorsFrag)
/*************************************************************************/

/****************VIEW BOOK DISCRIPTIION*************************/
const handlebookClick = (e) => {
    console.log(e.target)
    console.log(e.srcElement)
    const image = e.target.querySelector('.preview__image')
    const title = e.target.querySelector('.preview__title')
    const author = e.target.querySelector('.preview__author')
    const close = document.querySelector('[data-list-close]')

    if (e.target == close) {
        
        document.querySelector('[data-list-active]').close()
    } else {
        document.querySelector('[data-list-active]').show()
        //console.log(image.getAttribute('src'))

        // document.querySelector('.overlay__blur').setAttribute('src',image.getAttribute('src'))
        // document.querySelector('.overlay__image').setAttribute('src',image.getAttribute('src'))
    }
}

const items = document.querySelectorAll('.preview')
console.log(items[1])
for (let i = 0;i<items.length;i++) {
    console.log(items[i])
    items[i].addEventListener('click',handlebookClick)
}
document.querySelector('[data-list-close]').addEventListener('click',handlebookClick)

/*************************************************************************/

/****************SETTING THEME*************************/
document.querySelector('[data-settings-theme]').value === window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'night' : 'day'
const v = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches? 'night' : 'day'

// documentElement.style.setProperty('--color-dark', css[v].dark);
// documentElement.style.setProperty('--color-light', css[v].light);
document.querySelector('[data-list-button]').textContent = `Show more ${books.length - BOOKS_PER_PAGE}`

document.querySelector('[data-list-button]').disabled = !(matches.length - [page * BOOKS_PER_PAGE] > 0)

document.querySelector('[data-list-button]').innerHTML = /* html */ `
    <span>Show more</span>
    <span class="list__remaining"> (${matches.length - [page * BOOKS_PER_PAGE] > 0 ? matches.length - [page * BOOKS_PER_PAGE] : 0})</span>
    `

/*************************************************************************/

