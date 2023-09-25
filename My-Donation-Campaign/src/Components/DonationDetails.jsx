import { useLoaderData, useParams } from "react-router-dom";

const DonationDetails = () => {
    const cards = useLoaderData();
    const { id } = useParams();
    console.log(id);
    const card = cards.find(card => card.id == id);
    console.log(card);
    return (
        <div className="mt-10">
            <div className="z-10 relative">
                <img className="w-full rounded-lg md:h-[650px]" src={card.image} alt="" />
                <div className="absolute bottom-0 w-full">
                    <div className="bg-black bg-opacity-50 py-10 px-10 rounded-b-lg">
                        <button className="py-2 px-4  text-center rounded-lg text-white text-lg" style={{ backgroundColor: `${card.text_color}` }}>Donate {card.price}</button>
                    </div>
                </div>
            </div>
            <div className="mt-10">
                <h2 className="text-4xl font-bold">{card.title}</h2>
                <p className="my-7 mb-20 text-slate-700">{card.description}</p>
            </div>
        </div>
    );
};

export default DonationDetails;