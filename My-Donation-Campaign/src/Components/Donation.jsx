import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredDonations } from "./LocalStorage";

const Donation = () => {
    const data = useLoaderData();
    const [donations, setDonations] = useState([]);
    useEffect(()=>{
        const storedDonations = getStoredDonations();
        setDonations(storedDonations);
    },[])
    return (
        <div>
            <h2>Total Donation: {donations.length}</h2>
        </div>
    );
};

export default Donation;