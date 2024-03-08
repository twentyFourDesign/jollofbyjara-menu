import React, {useEffect, useState} from "react";
import CardDetails from "./CardDetails";
import Masonry from "react-smart-masonry";

const breakpoints = {mobile: 600, tablet: 700, desktop: 1100};

export default function Menu() {
    const [menu, setMenu] = useState([]);
    const [_, setLoading] = useState(false);


    const desireOrder = [
        "Brunch",
        "Starters / Small Plates",
        "West African Specials",
        "Mains",
        "Sides",
        "Made for Sharing",
        "Mya’s Menu (Children's)", "Desserts",
        "SOFT DRINKS",
        "MOCKTAILS",
        "COCKTAILS",
        "Cocktails (alc)",
        "Mocktails (non-alc)",
        "BEER / CIDER / BITTERS",
        "WINE",
        "SPIRITS",
        "PREMIUM COLLECTION",
        "HOT DRINKS",
        "OTHER - RESTAURANT",
        "DELIVERY",
        "VOUCHERS",
        "GIFTS",
        "ART"
    ];
    const toHide = [
        'External Event Catering (24hrs notice required)'
    ];

    async function fetchAndSortData() {
        const apiResponse = await fetch(`https://sabis.jollofbyjara.com/api/`);
        const apiData = await apiResponse.json();
        let combinedData = [];
        for (const apiItem of apiData.data) {
            const index = desireOrder.map(item => item.toLowerCase()).indexOf(apiItem.title.toLowerCase())
            if (index > -1) {
                combinedData.push({...apiItem, sort: index})
            } else {
                combinedData.push({...apiItem, sort: 10000})
            }
        }

        const sorted = combinedData.filter((item) => {
            return !(toHide.map(item => item.toLowerCase()).indexOf(item.title.toLowerCase()) > -1)
        }).sort((a, b) => a.sort - b.sort)
        setMenu(sorted);
    }

    useEffect(() => {
        setLoading(true);


        fetchAndSortData()
            .catch(() => setMenu([]))
            .finally(() => setLoading(false));
    }, []);

    return (
        <div className="testing">
            <Masonry
                autoArrange={true}
                breakpoints={breakpoints}
                columns={{mobile: 1, tablet: 2, desktop: 3}}
                gap={{mobile: 20, tablet: 30, desktop: 40}}
            >
                {menu?.length ? (
                    menu.map((item, idx) => (
                        <CardDetails title={item.title} items={item.data} key={idx}/>
                    ))
                ) : (
                    <h2 className="data-notfound">Menu Not Found</h2>
                )}
            </Masonry>
        </div>
    );
}


