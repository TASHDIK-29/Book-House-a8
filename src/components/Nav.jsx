import { NavLink } from "react-router-dom";

const Nav = () => {
    return (
        <>
            <div className="lg:flex justify-between items-center space-y-2 container mx-auto">
                <div className="flex justify-center w-1/5 md:w-full navbar bg-base-100">
                    <div className="navbar-start">
                        <div className="dropdown">
                            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                            </div>
                            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                                <NavLink className={({ isActive }) => isActive ? 'border py-2 px-3 border-green-600 rounded-lg text-lg text-[#23BE0A] font-bold my-3' : 'text-lg py-2 px-3 text-black font-bold my-3'} to="/">Home</NavLink>
                                <NavLink className={({ isActive }) => isActive ? 'border py-2 px-3 border-green-600 rounded-lg text-lg text-[#23BE0A] font-bold my-3' : 'text-lg py-2 px-3 text-black font-bold my-3'} to="/list">Listed Books</NavLink>
                                <NavLink className={({ isActive }) => isActive ? 'border py-2 px-3 border-green-600 rounded-lg text-lg text-[#23BE0A] font-bold my-3' : 'text-lg py-2 px-3 text-black font-bold my-3'} to="/stat">Pages to Read</NavLink>
                                <NavLink className={({ isActive }) => isActive ? 'border py-2 px-3 border-green-600 rounded-lg text-lg text-[#23BE0A] font-bold my-3' : 'text-lg py-2 px-3 text-black font-bold my-3'} to="/trend">Trending</NavLink>
                                <NavLink className={({ isActive }) => isActive ? 'border py-2 px-3 border-green-600 rounded-lg text-lg text-[#23BE0A] font-bold my-3' : 'text-lg py-2 px-3 text-black font-bold my-3'} to="/writer">Writer</NavLink>
                            </ul>
                        </div>
                        <NavLink to="/" className="btn btn-ghost text-3xl font-bold">Book House</NavLink>
                    </div>
                    <div className="navbar-center hidden lg:flex">
                        <ul className="menu menu-horizontal px-1">
                            <NavLink className={({ isActive }) => isActive ? 'border py-2 px-3 border-green-600 rounded-lg text-lg text-[#23BE0A] font-bold my-3' : 'text-lg py-2 px-3 text-black font-bold my-3'} to="/">Home</NavLink>
                            <NavLink className={({ isActive }) => isActive ? 'border py-2 px-3 border-green-600 rounded-lg text-lg text-[#23BE0A] font-bold my-3' : 'text-lg py-2 px-3 text-black font-bold my-3'} to="/list">Listed Books</NavLink>
                            <NavLink className={({ isActive }) => isActive ? 'border py-2 px-3 border-green-600 rounded-lg text-lg text-[#23BE0A] font-bold my-3' : 'text-lg py-2 px-3 text-black font-bold my-3'} to="/stat">Pages to Read</NavLink>
                            <NavLink className={({ isActive }) => isActive ? 'border py-2 px-3 border-green-600 rounded-lg text-lg text-[#23BE0A] font-bold my-3' : 'text-lg py-2 px-3 text-black font-bold my-3'} to="/trend">Trending</NavLink>
                            <NavLink className={({ isActive }) => isActive ? 'border py-2 px-3 border-green-600 rounded-lg text-lg text-[#23BE0A] font-bold my-3' : 'text-lg py-2 px-3 text-black font-bold my-3'} to="/writer">Writer</NavLink>
                        </ul>
                    </div>

                </div>
                <div className="navbar-end gap-2 flex mx-auto">
                    <a className="btn bg-[#23BE0A] text-white font-bold">Sign In</a>
                    <a className="btn bg-[#59C6D2] text-white font-bold">Sign Up</a>
                </div>
            </div>
        </>
    );
};

export default Nav;