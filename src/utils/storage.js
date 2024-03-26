
const getReadBooks = () =>{
    let books= [];

    const storedBooks = localStorage.getItem('ReadBook');
    if(storedBooks){
        books = JSON.parse(storedBooks);
    }
    return books ;
}


const saveReadBook = book =>{
    const books = getReadBooks();
    books.push(book);
    localStorage.setItem('ReadBook', JSON.stringify(books));
    alert("Successfully Added");
}

const sortReadBooks = books =>{
    localStorage.setItem('ReadBook', JSON.stringify(books));
}


const getWishList = () =>{
    let books= [];

    const storedBooks = localStorage.getItem('WishBook');
    if(storedBooks){
        books = JSON.parse(storedBooks);
    }
    return books ;
}



const saveWishList = book =>{
    const books = getWishList();
    books.push(book);
    localStorage.setItem('WishBook', JSON.stringify(books));
    // alert("Successfully Added");

}

const sortWishList = books =>{
    localStorage.setItem('WishBook', JSON.stringify(books));
}


const deleteBook = book =>{
    let books = getWishList();
    const remaining = books.filter(b => b.id !== book.id);
    localStorage.setItem('WishBook', JSON.stringify(remaining));
    
}




export { getReadBooks, saveReadBook, getWishList, saveWishList, deleteBook, sortReadBooks, sortWishList }
