function Book(title,author,pages,read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

function Library() {
    this.book = [];

    this.addBook = function(book) {
        this.book.push(book);
    }
}

let libBook = new Library();

function domManip(){
    for(let i = 0; i < libBook.book.length; i++){
        const displayDiv = document.querySelector('div.display');
        let bookDiv = document.createElement('div');
        let title = document.createElement('h3');
        let author = document.createElement('h3');
        let pages = document.createElement('h3');
        let read = document.createElement('h3');
        let book_title = libBook.book[i].title;
        let book_author = libBook.book[i].author;
        let book_pages = libBook.book[i].pages;
        let book_read = libBook.book[i].read;
        title.textContent = 'Title: ' + book_title;
        author.textContent = 'Author: ' + book_author;
        pages.textContent = 'Pages: ' + book_pages;
        read.textContent = 'Read: ' + book_read;
        bookDiv.appendChild(title);
        bookDiv.appendChild(author);
        bookDiv.appendChild(pages);
        bookDiv.appendChild(read);
        bookDiv.className = 'bookDivs';
        displayDiv.appendChild(bookDiv);
        libBook.book.pop();
    }
}

function showForm(){
    const form = document.querySelector('form.form');
    form.classList.remove('hidden');
}

const addBtn = document.querySelector('button.newBook');

addBtn.addEventListener('click',showForm);

const submit = document.getElementById('submit');

submit.addEventListener('click', function getTarget(e) {
    e.preventDefault()
    let titleInput = document.getElementById('title').value;
    let authorInput = document.getElementById('author').value;
    let pagesInput = document.getElementById('pages').value;
    let readInput = document.getElementById('read').value;
    let newBook = new Book(titleInput, authorInput, pagesInput, readInput);
    libBook.addBook(newBook);
    titleInput.value = '';
    authorInput.value = '';
    pagesInput.value = '';
    readInput.value = '';
    const form = document.querySelector('form.form');
    form.classList.add('hidden');
    domManip();
})



