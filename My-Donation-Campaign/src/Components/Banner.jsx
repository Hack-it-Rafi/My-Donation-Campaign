const Banner = () => {
    const handleSearch = (e) => {
        e.preventDefault();
        console.log(e.target.name.value);
    };

    const bannerStyle = {
        backgroundImage: 'url(../../public/bg.jpeg)',
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
                                value="Submit"
                            />
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;

