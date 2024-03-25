import { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { Link, Outlet } from "react-router-dom";

const ListedBooks = () => {

    const [count, setCount] = useState(1);
    return (
        <div>
            <div className="h-20 rounded-xl mt-8 bg-base-200 flex justify-center items-center">
                <h1 className="text-2xl font-bold">Books</h1>
            </div>

            <div className=" flex flex-col items-center justify-center mt-6">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn m-1 bg-[#23BE0A] hover:bg-[#23BE0A] text-white font-bold">Sort By <span><IoIosArrowDown /></span></div>
                    <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
                        <li><a>Item 1</a></li>
                        <li><a>Item 2</a></li>
                    </ul>
                </div>
            </div>

            {/* Tabs */}

            <div className="flex justify-start mt-10">
                <Link onClick={() => setCount(1)} to="" className={`flex items-center flex-shrink-0 px-5 py-3 space-x-2 ${count === 1 && 'border border-b-0 rounded-t-lg'} ${count !== 1 && 'border-b'} `}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                        <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
                        <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
                    </svg>
                    <span>Read Books</span>
                </Link>
                <Link onClick={() => setCount(2)} to="/list/wishList" className={`flex items-center flex-shrink-0 px-5 py-3 space-x-2 ${count === 2 && 'border border-b-0 rounded-t-lg'} ${count !== 2 && 'border-b'}`}>

                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                        <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path>
                    </svg>
                    <span>Wishlist Books</span>
                </Link>
            </div>
            <div>
                <Outlet/>
            </div>
        </div>
    );
};

export default ListedBooks;