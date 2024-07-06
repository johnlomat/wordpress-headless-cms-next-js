import React from "react";
import { removeDuplicateClasses } from "@/utils/helpers";

export const Section = ({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <>
      <section
        className={removeDuplicateClasses(
          `${!className ? "" : `${className} `}relative rlx-section-spacing`,
        )}
      >
        {children}
      </section>
    </>
  );
};

interface RowProps {
  children: React.ReactNode;
  className?: string;
  size?: "sm";
}

const sizeMap = {
  sm: "max-w-[46.875rem]",
};

export const Row: React.FC<RowProps> = ({ children, className = "", size }) => {
  const sizeValue = size ? `${sizeMap[size]} ` : "";

  return (
    <>
      <div
        className={removeDuplicateClasses(
          `${!className ? "" : `${className} `}${sizeValue}container flex flex-wrap md:w-[75%] lg:w-full`,
        )}
      >
        {children}
      </div>
    </>
  );
};

export const Col = ({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <>
      <div
        className={removeDuplicateClasses(
          `${!className ? "" : `${className} `}px-0 md:px-[0.25rem]`,
        )}
      >
        {children}
      </div>
    </>
  );
};
