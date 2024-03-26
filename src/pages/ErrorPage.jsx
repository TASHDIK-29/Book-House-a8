import { Link } from "react-router-dom";

const ErrorPage = () => {
    return (
        <div className="text-center flex flex-col justify-center items-center h-screen">
            <h1 className="text-7xl font-bold">404</h1>
            <p className="text-lg font-semibold underline">Page Not Found !!</p>
            <Link to='/' className="mt-6 font-bold underline">Go to Home</Link>
        </div>
    );
};

export default ErrorPage;