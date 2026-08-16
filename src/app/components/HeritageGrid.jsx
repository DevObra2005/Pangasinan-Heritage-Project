"use client";

import { useState } from "react";
import HeritageCard from "./HeritageCard";
import Button from "./Button";

export default function HeritageGrid({ items, columns = 4, theme = "light"}) {
  const [visibleCount, setVisibleCount] = useState(4);

  const columnClasses = {
    2: "md:grid-cols-2",
    3: "md:grid-cols-3",
    4: "md:grid-cols-4",
  };

  const visibleItems = items.slice(0, visibleCount);
  const buttonVariant = theme === "glass" ? "outlineglass" : "outlinelight";

  return (
    <>
      <div className={`grid gap-5 ${columnClasses[columns]}`}>
        {visibleItems.map((item, index) => (
          <div key={item.title} data-aos="fade-up">
            <HeritageCard
              index={index}
              location={item.location}
              image={item.image}
              title={item.title}
              description={item.description}
            />
          </div>
        ))}
      </div>

      {visibleCount < items.length && (
        <div className="text-center mt-10" data-aos="fade-up">
          <Button 
            variant={buttonVariant}
            onClick={() => setVisibleCount(items.length)}
          >
            Load More...
          </Button>
        
        </div>
      )}
    </>
  );
}