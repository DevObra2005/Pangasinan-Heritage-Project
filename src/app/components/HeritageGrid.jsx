"use client";

import { useState } from "react";
import HeritageCard from "./HeritageCard";
import Button from "./Button";

export default function HeritageGrid({ items, columns = 3, theme = "light"}) {
  const [visibleCount, setVisibleCount] = useState(3);

  const columnClasses = {
    2: "md:grid-cols-2",
    3: "md:grid-cols-3",
    4: "md:grid-cols-4",
  };

  const visibleItems = items.slice(0, visibleCount);
  const buttonVariant = theme === "glass" ? "outlineglass" : "outlinelight";

  return (
    <>
      <div className={`grid gap-8 items-stretch ${columnClasses[columns]}`}>
        {visibleItems.map((item) => (
          <div key={item.title} data-aos="fade-up">
            <HeritageCard
              theme={theme}
              image={item.image}
              title={item.title}
              description={item.description}
            />
          </div>
        ))}
      </div>

      {visibleCount < items.length && (
        <div className="text-center mt-12">
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