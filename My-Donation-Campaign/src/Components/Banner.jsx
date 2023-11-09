import { useState } from "react";
import CardList from "./CardList";

const Banner = ({ data }) => {
    const [searchedData, handleSearchedData] = useState(data);

    const handleSearch = (e) => {
        e.preventDefault();
        const searchText = e.target.name.value;
        const filteredData = data.filter(search => search.button_text === searchText);
        
        if(searchText==""){
            handleSearchedData(data);
        }
        else handleSearchedData(filteredData);
    };

    const bannerStyle = {
        backgroundImage: 'url(/bg.jpeg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center center',
        position: 'relative',
    };

    const overlayStyle = {
        content: '',
        backgroundColor: 'rgba(255, 255, 255, 0.95)',
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
    };

    return (
        <div>
            <div id="overlay" className="h-96 mb-5" style={bannerStyle}>
                <div style={overlayStyle}></div>
                <div className="flex justify-center items-center h-full relative">
                    <div className="text-center">
                        <h1 className="text-5xl font-bold text-black">
                            I Grow By Helping People In Need
                        </h1>
                        <div className="mt-5">
                            <form onSubmit={handleSearch} className="">
                                <input
                                    className="py-3 px-2 rounded-s-lg border-[2px]"
                                    type="text"
                                    name="name"
                                />
                                <input
                                    className="py-3 px-2 rounded-e-lg bg-[#FF444A] border-[2px]"
                                    type="submit"
                                    value="Search"
                                />
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <CardList searchedData={searchedData}></CardList>
        </div>
    );
};

export default Banner;
