import React from "react"; // Import React
import Link from "next/link";
import { CustomFlowbiteTheme, Button } from "flowbite-react";
import { FaChevronRight } from "react-icons/fa6";
import { IoMdDownload } from "react-icons/io";

const secondaryButtonTheme: CustomFlowbiteTheme["button"] = {
  base: "inline-block rlx-fixed14",
  color: {
    primary: "text-rlx-green",
  },
  pill: {
    off: "rounded-0",
  },
};

interface SecondaryButtonProps {
  link: string;
  text: string;
  newTab?: boolean;
  iconRight?: boolean;
}

export const SecondaryButton: React.FC<SecondaryButtonProps> = ({
  link,
  text,
  newTab,
  iconRight,
}) => {
  return (
    <Button
      as={Link}
      href={link}
      theme={secondaryButtonTheme}
      color="primary"
      target={newTab ? "_blank" : undefined}
    >
      {iconRight && (
        <IoMdDownload className="relative top-[0.1575rem] mr-[0.375rem] text-[1rem]" />
      )}
      {text}
      {!iconRight && (
        <FaChevronRight className="relative top-[0.1875rem] ml-[0.375rem] text-[0.75rem]" />
      )}
    </Button>
  );
};
