import BookCard from "./BookCard";

const Books = ({books}) => {

    // console.log(books);

    return (
        <div className="mb-12">
            <h1 className="text-center text-3xl font-bold mt-16 mb-10">Books</h1>
            <div className="grid grid-cols-3 gap-5">
                {
                    books.map(book => <BookCard book={book} key={book.id}></BookCard>)
                }
            </div>
        </div>
    );
};

export default Books;