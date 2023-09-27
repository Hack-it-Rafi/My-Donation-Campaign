import { NavLink } from "react-router-dom";

const NavBar = () => {
    return (
        <div className="bg-opacity-5 mt-7">
            <div className="navbar bg-base-100 flex-col md:flex-row">
                <div className="flex-1">
                    <img className="w-44" src="../../public/Logo.png" alt="" />
                </div>
                <div className="flex-none">
                    <ul className="menu menu-horizontal px-1">
                        <li><NavLink to="/">Home</NavLink></li>
                        <li><NavLink to="/donation">Donation</NavLink></li>
                        <li><NavLink to="/statistics">Statistics</NavLink></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default NavBar;