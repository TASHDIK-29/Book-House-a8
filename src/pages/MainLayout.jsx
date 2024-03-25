import { Outlet } from "react-router-dom";
import Nav from "../components/Nav";

const MainLayout = () => {
    return (
        <div className="container mx-auto mt-3">
            <Nav/>
           <div>
            <Outlet></Outlet>
           </div>
        </div>
    );
};

export default MainLayout;