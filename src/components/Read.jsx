import { getReadBooks } from "../utils/storage";
import ReadCard from "./ReadCard";

const Read = () => {

    const readBooks = getReadBooks();
    console.log(readBooks);

    return (
        <div className="mt-10">
            {
                readBooks.map(book => <ReadCard key={book.id} book={book}></ReadCard>)
            }
        </div>
    );
};

export default Read;