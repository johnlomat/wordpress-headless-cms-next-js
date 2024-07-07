import Link from "next/link";
import Image from "next/image";

// Product Card
const ProductCard = ({
  href,
  src,
  alt,
  width,
  height,
  modelName,
  modelCase,
}: {
  href: string;
  src: string;
  alt: string;
  width: number;
  height: number;
  modelName: string;
  modelCase: string;
}) => (
  <>
    <Link
      href={href}
      className="space-y-[0.625rem] bg-rlx-beige px-[1.25rem] pb-[1.875rem] pt-[1.25rem] md:px-[1.875rem] md:pb-[3.125rem] lg:px-[3.125rem]"
    >
      <Image src={src} alt={alt} width={width} height={height} unoptimized />
      <div className="text-rlx-brown">
        <div className="mb-[0.3125rem]">
          <h3>
            <span className="rlx-legend16-bold block">Rolex</span>
            <span className="rlx-body24-bold block">{modelName}</span>
          </h3>
        </div>
        <div className="rlx-legend16-light">{modelCase}</div>
      </div>
    </Link>
  </>
);

export default ProductCard;
