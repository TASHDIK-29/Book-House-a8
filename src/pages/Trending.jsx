import { useLoaderData } from "react-router-dom";
import TrendingCard from "../components/TrendingCard";

const Trending = () => {

    const books = useLoaderData();
    books.sort((b, a) => a.rating - b.rating);
    return (
        <>
            <div className="text-center my-10">
                <h1 className="text-5xl font-bold underline">Weekly Top Rated <span className="text-6xl text-[#23BE0A]">5</span> Books</h1>
            </div>
            <div>
                {
                    books.slice(0, 5).map(book => <TrendingCard key={book.id} book={book}></TrendingCard>)
                }
            </div>
        </>
    );
};

export default Trending;