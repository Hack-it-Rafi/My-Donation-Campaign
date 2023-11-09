import { useNavigate } from "react-router-dom";

const Card = ({ card }) => {
    const { id, image, bg_color, category_bg, text_color, title, button_text, squareImg, price, description } = card;
    const navigate = useNavigate();
    const handleDonationDetails = ()=>{
        navigate(`/${id}`)
    }
    return (
        <div onClick={handleDonationDetails} className="rounded-lg min-h-full">
            <div className="rounded-lg bg-base-100 shadow-xl min-h-full" style={{ backgroundColor: `${bg_color}` }}>
                <figure><img className="w-full" src={image} alt="Shoes" /></figure>
                <div className='card-body text-left rounded-b-lg ' >
                    <div className="py-2 px-4 w-24 text-center rounded-lg " style={{ backgroundColor: `${category_bg}` }}>
                        <span style={{color: `${text_color}`}}>
                            {button_text}
                        </span>
                    </div>
                    <p style={{ color: `${text_color}` }}>{title}</p>

                </div>
            </div>
        </div>
    );
};

export default Card;