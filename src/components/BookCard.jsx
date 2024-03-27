import { IoIosStarOutline } from "react-icons/io";
import { Link } from "react-router-dom";

const BookCard = ({ book , isWriter}) => {

    //console.log(book);

    const { yearOfPublishing, publisher, tags, category, rating, totalPages, review, img, author, title, id } = book;

    return (
        <Link to={`/book/${id}`} className="p-6 rounded-lg border border-base-300 flex flex-col">
            <div className="bg-[#F3F3F3] rounded-xl flex flex-col justify-center items-center w-full h-[200px]">
                <img src={img} alt="" className="w-28 lg:w-1/3 rounded-md " />
            </div>
            <div className="mt-6 mb-2 space-y-3 flex-grow">
                <div className="flex justify-between gap-2">
                    {
                        tags.map(tag => <span key={tag} className="block bg-[#F3F3F3] rounded-xl p-1 text-base font-medium tracking-widest  text-[#23BE0A]">{tag}</span>)
                    }
                </div>
                <h2 className="text-xl font-semibold tracking-wide">{title}</h2>
                {!isWriter && <h2 className="text-base font-bold tracking-wide">By : {author}</h2>}
            </div>

            <div className="flex justify-between pt-2 border-t-2 border-dashed">
                <div>
                    <h1>{category}</h1>
                </div>
                <div className="flex gap-1 items-center">
                    <h1>{rating}</h1>
                    <IoIosStarOutline className="text-lg"/>
                </div>
            </div>
        </Link>
    );
};

export default BookCard;