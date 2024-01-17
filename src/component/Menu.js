import React, {useLayoutEffect, useState} from "react";
import CardDetails from "./CardDetails";
import Masonry from "react-smart-masonry";

const breakpoints = {mobile: 600, tablet: 700, desktop: 1100};

export default function Menu() {
    const [menu, setMenu] = useState([]);
    const [loading, setLoading] = useState(false);

    const desiredOrder = [
        'Brunch',
        'Curated Combos',
        'Meats and Fish',
        'Stews',
        'Naija Bowls (made for one)',
        'Rice', 'Sides', 'Snack Warmer / To Go', 'Snacks', 'Street Food', 'Specials',
        'Soups', 'With ❤️ from Jara Beach Resort', "Mya's Menu (Children's)", 'Desserts',
        'Beer / Cider / Bitters', 'Cocktails', 'Mocktails', 'Hot Drinks', 'Premium Collection',
        'Soft Drinks', 'Spirits', 'Wine', 'Other - Restaurant', 'Other', 'Gifts', 'Art'
    ];

    useLayoutEffect(() => {
        setLoading(true);
        fetch(`https://sabis.jollofbyjara.com/api`)
            .then((response) => response.json())
            .then((data) => {
                setMenu(data.data);
            })
            .catch(() => setMenu([]))
            .finally(() => setLoading(false));
    }, []);

    const sortedMenu = menu.sort(
        (a, b) => desiredOrder.indexOf(a.title) - desiredOrder.indexOf(b.title)
    );

    console.log(sortedMenu)

    return (
        <div className="testing">
            <Masonry
                autoArrange={true}
                breakpoints={breakpoints}
                columns={{mobile: 1, tablet: 2, desktop: 3}}
                gap={{mobile: 20, tablet: 30, desktop: 40}}
            >
                {sortedMenu?.length ? (
                    sortedMenu
                        ?.filter(
                            (item) =>
                                item.title.toUpperCase() !==
                                "EXTERNAL EVENT CATERING (24HRS NOTICE REQUIRED)"
                        )
                        .map((item, idx) => (
                            <CardDetails title={item.title} items={item.data} key={idx}/>
                        ))
                ) : (
                    <h2 className="data-notfound">Menu Not Found</h2>
                )}
            </Masonry>
        </div>
    );
}
