import React, { useEffect, useState } from "react";
import CardDetails from "./CardDetails";

import Masonry from "react-smart-masonry";
const breakpoints = { mobile: 600, tablet: 700, desktop: 1100 };

export default function Menu() {
  const [menu, setMenu] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch(`https://sabis.jollofbyjara.com/api/`)
      .then((response) => response.json())
      .then((data) => {
        setMenu(data.data);
      })
      .catch((error) => console.log({ error }))
      .finally(() => setLoading(false));
  }, []);

  if (loading) {
    return (
      <div className="testing">
        <h2 className="data-notfound">Loading...</h2>
      </div>
    );
  }
  return (
    <div className="testing">
      <Masonry
        breakpoints={breakpoints}
        columns={{ mobile: 1, tablet: 2, desktop: 3 }}
        gap={{ mobile: 20, tablet: 30, desktop: 40 }}
      >
        {menu?.length ? (
          menu?.map((item) => (
            <CardDetails title={item.title} items={item.data} />
          ))
        ) : (
          <h2 className="data-notfound">Menu Not Found</h2>
        )}
      </Masonry>
    </div>
  );
}
