import { useEffect, useState } from "react";
import { getReadBooks } from "../utils/storage";
import ReadCard from "./ReadCard";

const Read = () => {

    const [books , setBooks] = useState([]);
    useEffect( () =>{
        const readBooks = getReadBooks();
        setBooks(readBooks);
    // console.log(readBooks);
    }, [books])
    // const readBooks = getReadBooks();
    // console.log(readBooks);

    return (
        <div className="mt-10">
            {
                books.map(book => <ReadCard key={book.id} book={book}></ReadCard>)
            }
        </div>
    );
};

export default Read;