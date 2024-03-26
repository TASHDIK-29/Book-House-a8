import { getWishList } from "../utils/storage";
import WishCard from "./WishCard";

const Wish = () => {

    const wishBooks = getWishList();
    console.log(wishBooks);

    return (
        <div className="mt-10">
            {
                wishBooks.map(book => <WishCard key={book.id} book={book}></WishCard>)
            }
        </div>
    );
};

export default Wish;