import React from "react";
import { removeDuplicateClasses } from "@/lib/htmlClasses";

export const Section = ({
  children,
  className = "",
}: Readonly<{
  children: React.ReactNode;
  className?: any;
}>) => {
  return (
    <>
      <section
        className={removeDuplicateClasses(
          `${!className ? "" : `${className} `}relative py-[3.75rem] md:py-[5.625rem]`,
        )}
      >
        {children}
      </section>
    </>
  );
};

export const Row = ({
  children,
  className = "",
}: Readonly<{
  children: React.ReactNode;
  className?: any;
}>) => {
  return (
    <>
      <div
        className={removeDuplicateClasses(
          `${!className ? "" : `${className} `}container flex flex-col md:w-[70%] lg:w-full lg:flex-row`,
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
}: Readonly<{
  children: React.ReactNode;
  className?: any;
}>) => {
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
