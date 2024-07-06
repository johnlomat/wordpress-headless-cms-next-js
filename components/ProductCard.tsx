import React from "react";
import Link from "next/link";
import Image from "next/image";

// Product Card
const ProductCard = ({ children }: { children: React.ReactNode }) => (
  <>{children}</>
);

const LinkWrapper = ({
  children,
  href,
}: {
  children: React.ReactNode;
  href: string;
}) => (
  <>
    <Link
      href={href}
      className="space-y-[0.625rem] bg-rlx-beige px-[1.25rem] pb-[1.875rem] pt-[1.25rem] md:px-[1.875rem] md:pb-[3.125rem] lg:px-[3.125rem]"
    >
      {children}
    </Link>
  </>
);

interface ImageWrapperProps {
  src: string;
  alt: string;
  width: number;
  height: number;
}

const ImageWrapper: React.FC<ImageWrapperProps> = ({
  src,
  alt,
  width,
  height,
}) => (
  <>
    <div>
      <Image src={src} alt={alt} width={width} height={height} unoptimized />
    </div>
  </>
);

const BodyWrapper = ({ children }: { children: React.ReactNode }) => (
  <>
    <div className="text-rlx-brown">{children}</div>
  </>
);

ProductCard.LinkWrapper = LinkWrapper;
ProductCard.ImageWrapper = ImageWrapper;
ProductCard.BodyWrapper = BodyWrapper;

export default ProductCard;
