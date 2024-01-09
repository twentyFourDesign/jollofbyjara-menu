import React, { useLayoutEffect, useState } from "react";
import CardDetails from "./CardDetails";
import Masonry from "react-smart-masonry";
const breakpoints = { mobile: 600, tablet: 700, desktop: 1100 };

export default function Menu() {
  const [menu, setMenu] = useState([]);
  const [_, setLoading] = useState(false);

  const desireOrder = [
    "Brunch", "Starters / Small Plates", "West African Specials", "Mains",
    "Sides", "Made for Sharing", "Mya’s Menu (Children's)", "Desserts",
    "SOFT DRINKS", "MOCKTAILS", "COCKTAILS", "BEER / CIDER / BITTERS",
    "WINE", "SPIRITS", "PREMIUM COLLECTION", "HOT DRINKS", "OTHER - RESTAURANT",
    "DELIVERY", "VOUCHERS", "GIFTS", "ART"
  ];

  useLayoutEffect(() => {
    setLoading(true);

    async function fetchAndSortData() {
      const apiResponse = await fetch(`https://sabis.jollofbyjara.com/api/`);
      const apiData = await apiResponse.json();
      const combinedData = [];

      for (const sortedItem of desireOrder) {
        for (const apiItem of apiData.data) {
          if (sortedItem.toLowerCase() === apiItem.title.toLowerCase()) {
            combinedData.push({ ...apiItem, category: sortedItem });
          } else {
            // Uncomment the following line if you want to log items that don't match any category
            // console.log(apiItem, 'else');
          }
        }
      }

      

      // combinedData.sort((a, b) => a.title.localeCompare(b.title));

      setMenu(combinedData);
    }

    fetchAndSortData()
      .catch(() => setMenu([]))
      .finally(() => setLoading(false));
  }, []);

  return (
    <div className="testing">
      <Masonry
        autoArrange={true}
        breakpoints={breakpoints}
        columns={{ mobile: 1, tablet: 2, desktop: 3 }}
        gap={{ mobile: 20, tablet: 30, desktop: 40 }}
      >
        {menu?.length ? (
          menu.map((item, idx) => (
            <CardDetails title={item.title} items={item.data} key={idx} />
          ))
        ) : (
          <h2 className="data-notfound">Menu Not Found</h2>
        )}
      </Masonry>
    </div>
  );
}


