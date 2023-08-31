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

document.querySelector('[data-settings-theme]').value = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'night' : 'day'
let v = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches? 'night' : 'day'

// document.documentElement.style.setProperty('--color-dark', css[v].dark);
// document.documentElement.style.setProperty('--color-light', css[v].light);
document.querySelector('[data-list-button]').innerText = `Show more ${books.length - BOOKS_PER_PAGE}`

document.querySelector('[data-list-button]').disabled = !(matches.length - [page * BOOKS_PER_PAGE] > 0)

document.querySelector('[data-list-button]').innerHTML = /* html */ `
    <span>Show more</span>
    <span class="list__remaining"> (${matches.length - (page * BOOKS_PER_PAGE) > 0 ? matches.length - (page * BOOKS_PER_PAGE) : 0})</span>
`

document.querySelector('[data-search-cancel]').onclick = () => { document.querySelector('[data-search-overlay]').open = false }
document.querySelector('[data-settings-cancel]').onclick = () => { document.querySelect('[data-settings-overlay]').open = false }
document.querySelector('[data-settings-form]').onsubmit = () => { document.querySelector('[actions.settings.submit]') }
document.querySelector('[data-list-close]').onclick = () => { document.querySelector('[data-list-active]').open = false }

// document.querySelector('[data-list-button]').onclick = () => {
//     document.querySelector('[data-list-items]').appendChild(createPreviewsFragment(matches, page * BOOKS_PER_PAGE, (page + 1) * BOOKS_PER_PAGE))
//     actions.list.updateRemaining()
//     page = page + 1
// }

document.querySelector('[data-header-search]').onclick = () => {
    document.querySelector('[data-search-overlay]').open = true
    document.querySelector('[data-search-title]').focus();
}
console.log(document.querySelector('[data-search-overlay] .overlay__row button:nth-child(2)'))
document.querySelector('[data-search-overlay] .overlay__row button:nth-child(2)').onclick = (filters) => {
    filters.preventDefault()
    const formData = new FormData(event.target)
    filters  = Object.fromEntries(formData)
    const result = []

    for (const book of books) {
        const titleMatch = filters.title.trim() = '' && book.title.toLowerCase().includes[filters.title.toLowerCase()]
        const authorMatch = filters.author = 'any' || book.author === filters.author

        
        const genreMatch = filters.genre = 'any'
        for (const genre of book.genres) { 
            if (genre == filters.genre) {genreMatch = true }
        }

        if (titleMatch && authorMatch && genreMatch) {result.push(book)}
    }

    if (display.length < 1){
        data-list-message.class.add('list__message_show')
    }else {
        document.querySelector('[data-list-message]').removeClass('list__message_show')
    }

    document.querySelector('[data-list-items]').innerHTML = ''
    fragment = document.createDocumentFragment()
    extracted = source.slice(range[0], range[1])

    for (const { author, image, title, id } of extracted) {
        //const { author: authorId, id, image, title } = props

        element = document.createElement('button')
        element.classList = 'preview'
        element.setAttribute('data-preview', id)

        element.innerHTML = /* html */ `
            <img
                class="preview__image"
                src="${image}"
            />
            
            <div class="preview__info">
                <h3 class="preview__title">${title}</h3>
                <div class="preview__author">${authors[author]}</div>
            </div>
        `

        fragment.appendChild(element)
    }
    
    document.querySelector('[data-list-items]').appendChild(fragments)
    const initial = matches.length - (page * BOOKS_PER_PAGE)
    const remaining = hasRemaining ? initial : 0
    document.querySelector('[data-list-button]').disabled = initial > 0

    document.querySelector('[data-list-button]').innerHTML = /* html */ `
        <span>Show more</span>
        <span class="list__remaining"> (${remaining})</span>
    `

    window.scrollTo({ top: 0, behavior: 'smooth' });
    document.querySelector('[data-search-overlay]').open = false
}

document.querySelector('[data-settings-overlay]').onsubmit = (e) => {
    e.preventDefault()
    const formData = new FormData(event.target)
    const result = Object.fromEntries(formData)
    document.dntElementocume.style.setProperty('--color-dark', css[result.theme].dark);
    document.documentElement.style.setProperty('--color-light', css[result.theme].light);
    document.querySelector('[data-settings-overlay]').open === false
}

document.querySelector('[data-list-items]').onclick = (event) => {
    const pathArray = Array.from(event.path || event.composedPath())
    let active;

    for (const node of pathArray) {
        if (active) break;
        const previewId = node.id
            
        for (const singleBook of books) {
            if (singleBook.id === previewId) active = singleBook
        } 
    }
    
    if (!active) return
    document.querySelector('[data-list-active]').open = true
    document.querySelector('[data-list-blur]').setAttribute('src',active.image) 
    document.querySelector('[data-list-image]').setAttribute('src',active.image) 
    document.querySelector('[data-list-title]').innerText = active.title
    
    document.querySelector('[data-list-subtitle]').innerText = `${authors[active.author]} (${(new Date(active.published)).getFullYear()})`
    document.querySelector('[data-list-description]').innerText = active.description
}