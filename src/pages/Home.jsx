import { useLoaderData } from "react-router-dom";
import Books from "../components/Books";
import HomeBanner from "../components/HomeBanner";

const Home = () => {

    const books = useLoaderData();

    return (
        <div className="mt-8">
           <HomeBanner/>
           <Books books={books}></Books>
        </div>
    );
};

export default Home;