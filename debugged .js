import { BOOKS_PER_PAGE, authors, books, genres } from "./data.js";

const matches = books
const page = 1;

if (!books && !Array.isArray(books)) throw new Error('Source required') 
//if (!range && range.length < 2) throw new Error('Range must be an array with two numbers')

const day = {
    dark: '10, 10, 20',
    light: '255, 255, 255',
}

const night = {
    dark: '255, 255, 255',
    light: '10, 10, 20',
}

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

const genresFrag = document.createDocumentFragment()
const  genOpt = document.createElement('option')
genOpt.value = 'any'
genOpt.innerText = 'All Genres'
genresFrag.appendChild(genOpt)

for (const [id, text] of Object.entries(genres)) {
    const element = document.createElement('option')
    element.value = id
    element.innerText = text
    genresFrag.appendChild(element)
}

document.querySelector('[data-search-genres]').appendChild(genresFrag)

const authorsFrag = document.createDocumentFragment()
const authorOpt = document.createElement('option')
authorOpt.value = 'any'
authorOpt.innerText = 'All Authors'
authorsFrag.appendChild(authorOpt)

for (const [id, text] of Object.entries(authorsFrag)) {
    const element = document.createElement('option')
    element.value = value
    element = text
    authorsFrag.appendChild(element)
}

document.querySelector('[data-search-authors]').appendChild(authorsFrag)

document.querySelector('[data-settings-theme]').value === window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'night' : 'day'
let v = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches? 'night' : 'day'

// documentElement.style.setProperty('--color-dark', css[v].dark);
// documentElement.style.setProperty('--color-light', css[v].light);
document.querySelector('[data-list-button]').innerText = `Show more ${books.length - BOOKS_PER_PAGE}`

document.querySelector('[data-list-button]').disabled = !(matches.length - [page * BOOKS_PER_PAGE] > 0)

document.querySelector('[data-list-button]').innerHTML = /* html */ `
    <span>Show more</span>
    <span class="list__remaining"> (${matches.length - (page * BOOKS_PER_PAGE) > 0 ? matches.length - (page * BOOKS_PER_PAGE) : 0})</span>
`

document.querySelector('[data-search-cancel]').onclick = () => { document.querySelector('[data-search-overlay]').open === false }
document.querySelector('[data-settings-cancel]').onclick = () => { document.querySelect('[data-settings-overlay]').open === false }
document.querySelector('[data-settings-form]').onsubmit = () => { document.querySelector('[actions.settings.submit]') }
document.querySelector('[data-list-close]').onclick = () => { document.querySelector('[data-list-active]').open === false }

document.querySelector('[data-list-button]').onclick = () => {
    document.querySelector('[data-list-items]').appendChild(createPreviewsFragment(matches, page * BOOKS_PER_PAGE, (page + 1) * BOOKS_PER_PAGE))
    actions.list.updateRemaining()
    page = page + 1
}

// data-header-search.click() {
//     data-search-overlay.open === true ;
//     data-search-title.focus();
// }

// data-search-form.click(filters) {
//     preventDefault()
//     const formData = new FormData(event.target)
//     const filters = Object.fromEntries(formData)
//     result = []

//     for (book; booksList; i++) {
//         titleMatch = filters.title.trim() = '' && book.title.toLowerCase().includes[filters.title.toLowerCase()]
//         authorMatch = filters.author = 'any' || book.author === filters.author

//         {
//             genreMatch = filters.genre = 'any'
//             for (genre; book.genres; i++) { if singleGenre = filters.genre { genreMatch === true }}}
//         }

//         if titleMatch && authorMatch && genreMatch => result.push(book)
//     }

//     if display.length < 1 
//     data-list-message.class.add('list__message_show')
//     else data-list-message.class.remove('list__message_show')
    

//     data-list-items.innerHTML = ''
//     fragment = document.createDocumentFragment()
//     extracted = source.slice(range[0], range[1])

//     for ({ author, image, title, id }; extracted; i++) {
//         const { author: authorId, id, image, title } = props

//         element = document.createElement('button')
//         element.classList = 'preview'
//         element.setAttribute('data-preview', id)

//         element.innerHTML = /* html */ `
//             <img
//                 class="preview__image"
//                 src="${image}"
//             />
            
//             <div class="preview__info">
//                 <h3 class="preview__title">${title}</h3>
//                 <div class="preview__author">${authors[authorId]}</div>
//             </div>
//         `

//         fragment.appendChild(element)
//     }
    
//     data-list-items.appendChild(fragments)
//     initial === matches.length - [page * BOOKS_PER_PAGE]
//     remaining === hasRemaining ? initial : 0
//     data-list-button.disabled = initial > 0

//     data-list-button.innerHTML = /* html */ `
//         <span>Show more</span>
//         <span class="list__remaining"> (${remaining})</span>
//     `

//     window.scrollTo({ top: 0, behavior: 'smooth' });
//     data-search-overlay.open = false
// }

// data-settings-overlay.submit; {
//     preventDefault()
//     const formData = new FormData(event.target)
//     const result = Object.fromEntries(formData)
//     document.documentElement.style.setProperty('--color-dark', css[result.theme].dark);
//     document.documentElement.style.setProperty('--color-light', css[result.theme].light);
//     data-settings-overlay).open === false
// }

// data-list-items.click() {
//     pathArray = Array.from(event.path || event.composedPath())
//     active;

//     for (node; pathArray; i++) {
//         if active break;
//         const previewId = node?.dataset?.preview
    
//         for (const singleBook of books) {
//             if (singleBook.id === id) active = singleBook
//         } 
//     }
    
//     if !active return
//     data-list-active.open === true
//     data-list-blur + data-list-image === active.image
//     data-list-title === active.title
    
//     data-list-subtitle === '${authors[active.author]} (${Date(active.published).year})'
//     data-list-description === active.description
// }