import Card from "./Card";

const CardList = ({data}) => {
    // console.log(data);
    return (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {
                data.map(card=><Card key={card.id} card={card}></Card>)
            }
        </div>
    );
};

export default CardList;