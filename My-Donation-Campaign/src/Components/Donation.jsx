import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredDonations } from "./LocalStorage";
import DonationList from "./DonationList";

const Donation = () => {
    const data = useLoaderData();
    const [donations, setDonations] = useState([]);
    const [totDonations, setTotDonations] = useState(4);
    useEffect(() => {
        const storedDonations = getStoredDonations();
        if (data.length) {
            const givenDonations = [];
            for (const id of storedDonations) {
                const donation = data.find(donation => donation.id == id);
                if (donation) {
                    givenDonations.push(donation);
                }
            }
            setDonations(givenDonations);
        }

    }, [data])
    return (
        <div>
            {/* <h2>Total Donation: {donations.length}</h2> */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-10">
                {
                    donations.slice(0, totDonations).map(donation => <DonationList key={donation.id} donation={donation}></DonationList>)
                }
            </div>
            <div className="text-center">
                <div className={totDonations === data.length && "hidden"}>
                    <button onClick={() => setTotDonations(data.length)} className="btn btn-success mb-10">See All</button>
                </div>
            </div>
        </div>
    );
};

export default Donation;