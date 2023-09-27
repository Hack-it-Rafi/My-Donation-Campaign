import { NavLink } from "react-router-dom";

const ErrorPage = () => {
    return (
        <div className="flex justify-center h-screen items-center">
            <div>
                <h2 className="text-5xl">Oops</h2><br />
                <p><NavLink to="/">Go back to home</NavLink></p>
            </div>
        </div>
    );
};

export default ErrorPage;