import { useLoaderData } from "react-router-dom";
import Banner from "./Banner";
import CardList from "./CardList";

const Home = () => {
    const data = useLoaderData();
    return (
        <div className="mb-10">
            <Banner data={data}></Banner>
            {/* <CardList data={data}></CardList> */}
        </div>
    );
};

export default Home;