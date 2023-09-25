import { Outlet } from "react-router-dom";
import NavBar from "./NavBar";

const Root = () => {
    return (
        <div className="max-w-screen-xl mx-auto px-5">
            <NavBar></NavBar>
            <div>
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Root;