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

function showForm(){
    const form = document.querySelector('form.form');
    form.classList.remove('hidden');
}

const addBtn = document.querySelector('button.newBook');

addBtn.addEventListener('click',showForm);

const submit = document.getElementById('submit');

const form = document.querySelector('form.form');

function checkRead() {
    const checkbox = document.getElementById('read');
    if (checkbox.checked == true){
        checkbox.value = 'True';
    } else {
        checkbox.value = 'False';
    }
}




submit.addEventListener('click', function getTarget(e) {
    e.preventDefault();
    let titleInput = document.getElementById('title').value;
    let authorInput = document.getElementById('author').value;
    let pagesInput = document.getElementById('pages').value;
    let readInput = document.getElementById('read').value;
    let newBook = new Book(titleInput, authorInput, pagesInput, readInput);
    libBook.addBook(newBook);
    
    const form = document.querySelector('form.form');
    form.classList.add('hidden');
    createDivs();
})

const displayDiv = document.querySelector('div.display')        

function createDivs(){
for (let i = displayDiv.childNodes.length - 3; i < libBook.book.length; i++){
        let bookDiv = document.createElement('div');
            bookDiv.className = 'bookDivs';
            bookDiv.value = `book[${i}]`;
        

        const removeBookBtn = document.createElement('button');
            removeBookBtn.className = 'remove';
            removeBookBtn.textContent = 'Remove';
            removeBookBtn.value = i;

            removeBookBtn.addEventListener('click', function(){
                libBook.book.pop(this.value);
                const targetDiv = this.parentElement;
                displayDiv.removeChild(targetDiv);
            })

        let title = document.createElement('p');
        let author = document.createElement('p');
        let pages = document.createElement('p');
        let read = document.createElement('p');
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
        bookDiv.appendChild(removeBookBtn);
        
        displayDiv.appendChild(bookDiv);
}
}



