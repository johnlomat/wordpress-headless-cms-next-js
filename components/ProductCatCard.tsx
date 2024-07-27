import Link from 'next/link'
import Image from 'next/image'

// Product Category Card
const ProductCatCard = ({ children }: { children: React.ReactNode }) => <>{children}</>

const LinkWrapper = ({ children, href }: { children: React.ReactNode; href: string }) => (
  <>
    <Link href={href} className="group space-y-[0.625rem]">
      {children}
    </Link>
  </>
)

interface ImageWrapperProps {
  src: string
  alt: string
  width: number
  height: number
}

const ImageWrapper: React.FC<ImageWrapperProps> = ({ src, alt, width, height }) => (
  <>
    <div className="overflow-hidden">
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        className="transition-all duration-300 ease-in-out group-hover:scale-110"
      />
    </div>
  </>
)

const BodyWrapper = ({ children }: { children: React.ReactNode }) => (
  <>
    <div className="text-rlx-brown">{children}</div>
  </>
)

ProductCatCard.LinkWrapper = LinkWrapper
ProductCatCard.ImageWrapper = ImageWrapper
ProductCatCard.BodyWrapper = BodyWrapper

export default ProductCatCard
