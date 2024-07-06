"use client";

import React, { useState } from "react";
import { Breadcrumb, BreadcrumbItem, Flowbite } from "flowbite-react";
import breadcrumbTheme from "@/components/theme/flowbite-react/BreadcrumbTheme";

const CustomBreadcrumb = ({ items }: { items: any }) => {
  const [activeIndex, setActiveIndex] = useState(items.length - 2); // Start with the second to last item

  const handleClick = (index: number) => {
    setActiveIndex(index);
  };

  return (
    <>
      <Flowbite theme={{ theme: breadcrumbTheme }}>
        <Breadcrumb aria-label="Default breadcrumb example">
          {items.map((item: any, index: number) => (
            <BreadcrumbItem
              key={index}
              href={item.href}
              onClick={() => handleClick(index)}
              className={`${index === activeIndex ? "flex" : "hidden lg:flex"}`}
            >
              {item.label}
            </BreadcrumbItem>
          ))}
        </Breadcrumb>
      </Flowbite>
    </>
  );
};

export default CustomBreadcrumb;
