import { IoLocationOutline } from "react-icons/io5";
import { GoPeople } from "react-icons/go";
import { LuNewspaper } from "react-icons/lu";
import { Link } from "react-router-dom";

const WishCard = ({ book }) => {

    const { yearOfPublishing, publisher, tags, category, rating, totalPages, review, img, author, title, id } = book;

    return (
        <div className="card lg:card-side bg-base-100 p-3 border rounded-2xl border-base-300 my-4">
            <div className="w-1/6 flex flex-col justify-center items-center bg-[#1313130D] rounded-xl">
                <figure><img className="w-2/3" src={img} alt="Album" /></figure>
            </div>
            <div className="card-body space-y-2">
                <h2 className="card-title text-2xl">{title}</h2>
                <p className="font-semibold">By : {author}</p>
                <div className="flex gap-6 items-center text-lg font-bold">
                    <h1 className="text-lg font-bold">Tag </h1>
                    {
                        tags.map(tag => <h1 className="block bg-[#F3F3F399] rounded-xl p-1 text-base font-medium tracking-widest  text-[#23BE0A]" key={tag}>#{tag}</h1> )
                    }
                    <h1 className="font-medium text-base flex items-center gap-2"><span className="text-lg"><IoLocationOutline /></span>Year of Publishing: {yearOfPublishing}</h1>
                </div>
                <div className="flex gap-4">
                    <h1 className="text-base flex gap-2 items-center font-semibold"><span className="text-lg"><GoPeople /></span>Publisher : {publisher}</h1>
                    <h1 className="text-base flex gap-2 items-center font-semibold"><span className="text-lg"><LuNewspaper /></span>Page  {totalPages}</h1>
                </div>
                <hr />
                <div className="flex gap-6 items-center">
                    <h1 className="px-3 py-2 rounded-3xl text-[#328EFF] font-bold bg-[#328EFF26]">Category : {category}</h1>
                    <h1 className="px-3 py-2 rounded-3xl text-[#FFAC33] font-bold bg-[#FFAC3326]">Rating : {rating}</h1>
                    <Link to = {`/book/${id}`}  className="px-3 py-2 rounded-3xl text-white font-bold bg-[#23BE0A]">View Details</Link>
                </div>
            </div>
        </div>
    );
};


export default WishCard;