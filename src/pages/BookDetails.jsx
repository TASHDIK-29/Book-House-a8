import { useLoaderData, useParams } from "react-router-dom";
import { deleteBook, getReadBooks, getWishList, saveReadBook, saveWishList } from "../utils/storage";

const BookDetails = () => {
    const books = useLoaderData();
    const { id } = useParams();
    const book = books.find(book => book.id === id);

    console.log(book);

    const { yearOfPublishing, publisher, tags, category, rating, totalPages, review, img, author, title } = book;

   

    const handelRead = book => {
        const storedWishList = getWishList();
        if (storedWishList) {
            const isExist2 = storedWishList.find(item => item.id === book.id);
            if(isExist2){
                deleteBook(book);
            }
        }

        const storedReadBooks = getReadBooks();
        const isExist = storedReadBooks.find(item => item.id === book.id);
        if (!isExist) {
            saveReadBook(book);
        }
        else {
            alert('Already Exist!!!!!');
        }
    }


    const handelWishList = book => {
        const storedReadBooks = getReadBooks();
        const isExist1 = storedReadBooks.find(item => item.id === book.id);
        if (!isExist1) {
            const storedWishList = getWishList();
            const isExist2 = storedWishList.find(item => item.id === book.id);
            if (!isExist2) {
               saveWishList(book);
            }
            else {
                alert('Already Exist is WishList')
            }
        }
        else {
            alert('Already Read !!!!!');
        }
    }








    return (
        <div className="card lg:card-side bg-base-100 mt-4 mb-2">
            <div className="w-2/5 bg-[#1313130D] rounded-xl flex flex-col justify-center">
                <figure><img className="w-3/4" src={img} alt="Album" /></figure>
            </div>
            <div className="card-body space-y-1 w-3/5">
                <h2 className="card-title text-4xl">{title}</h2>
                <p className="font-medium text-lg">By : {author}</p>
                <hr />
                <h1 className="font-medium">{category}</h1>
                <hr />
                <p><span className="font-bold">Review</span> : {review}</p>
                <div className="flex items-center gap-8">
                    <h1 className="font-bold">Tag</h1>
                    {
                        tags.map(tag => <h1 className="block bg-[#F3F3F399] rounded-xl p-1 text-base font-medium tracking-widest  text-[#23BE0A]" key={tag}>#{tag}</h1>)
                    }
                </div>
                <hr />
                <p>Number of Pages : <span className="font-bold">{totalPages}</span></p>
                <p>Publisher : <span className="font-bold">{publisher}</span></p>
                <p>Year of Publishing : <span className="font-bold">{yearOfPublishing}</span></p>
                <p>Rating : <span className="font-bold">{rating}</span></p>
                <div className="card-actions justify-start">
                    <button onClick={() => handelRead(book)} className="py-2 px-3 rounded-lg font-bold text-black border bg-none">Read</button>
                    <button onClick={() => handelWishList(book)} className="py-2 px-3 rounded-lg font-bold text-white border bg-[#50B1C9] border-none">Wishlist</button>
                </div>
            </div>
        </div>
    );
};

export default BookDetails;