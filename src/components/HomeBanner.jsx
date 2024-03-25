import { Link } from "react-router-dom";

const HomeBanner = () => {
    return (
        <div className="hero min-h-[450px] bg-base-200 rounded-xl">
            <div className="hero-content flex-col lg:flex-row-reverse w-full p-10">
                <div className="w-1/2 flex justify-center">
                    <img src="../../public/bannerImg.png" className="max-w-sm" />
                </div>
                <div className="w-3/5 p-5 flex flex-col items-start space-y-4">
                    <h1 className="text-5xl font-bold">Books to freshen up your bookshelf</h1>
                    <Link to="/list"><button className="btn btn-primary bg-[#23BE0A] hover:bg-[#23BE0A] border-none text-white font-bold">View The List</button></Link>
                </div>
            </div>
        </div>
    );
};

export default HomeBanner;