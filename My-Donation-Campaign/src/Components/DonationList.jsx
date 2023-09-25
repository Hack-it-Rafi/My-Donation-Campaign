const DonationList = ({ donation }) => {
    // console.log(donation);
    

    return (
        <div className="flex">
            <div>
                <img src={donation.squareImg} alt="" />
            </div>
            <div className=" w-full rounded-e-lg" style={{ backgroundColor: `${donation.bg_color}` }}>
                <div className="py-[2px] px-2 ml-3 mt-3 w-24 text-center rounded-lg" style={{ backgroundColor: `${donation.category_bg}` }}>
                    <span style={{ color: `${donation.text_color}` }}>
                        {donation.button_text}
                    </span>
                </div>
                <h2 className="ml-3 text-lg font-semibold">{donation.title}</h2>
                <p className="ml-3 text-base font-semibold" style={{ color: `${donation.text_color}` }}>{donation.price}</p>
                <button className="ml-3 mt-1 py-[2px] px-3 text-sm rounded-lg text-white" style={{ backgroundColor: `${donation.text_color}`}}>View Details</button>
            </div>
        </div>
    );
};

export default DonationList;