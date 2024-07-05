import { notFound, redirect } from "next/navigation";
import Image from "next/image";
import getProducts from "@/lib/get-products";
import { Section, Row, Col } from "@/components/Layouts";
import SpecificationItem from "@/components/SpecificationItem";
import { SecondaryButton } from "@/components/Buttons";
import Price from "@/components/Price";
import FeatureItem from "@/components/FeatureItem";

const ProductPage = async ({
  params,
}: {
  params: { productSlug: string; categorySlug: string };
}) => {
  // Fetch product data
  const productData = await getProducts(params.productSlug);

  // Handle case where no products are found
  if (!productData || productData.length === 0) {
    notFound();
  }

  const productCategories =
    productData.data.product.productCategories.nodes[0].slug;

  // Redirect if the category slug doesn't match
  if (params.categorySlug !== productCategories) {
    redirect(`/rolex-watches/${productCategories}/${params.productSlug}`);
  }

  const productACF = productData.data.product.rolexProducts;

  // Extract relevant product data
  const productTitle = productData.data.product.title;
  const modelName = productACF.modelName;
  const regularPrice = productACF.regularPrice;
  const modelCase = productACF.modelCase;
  const brochure = productACF.brochure;

  const productImageSrc = productData.data.product.featuredImage.node.sourceUrl;
  const productImageAltText =
    productData.data.product.featuredImage.node.altText;

  // Define specifications for rendering
  const specificationsOne = [
    { label: "Reference", value: productACF.reference },
    { label: "Model Case", value: productACF.modelCase },
    { label: "Water Resistance", value: productACF.waterResistance },
    { label: "Bezel", value: productACF.bezel },
    { label: "Dial", value: productACF.dial },
  ];

  const specificationsTwo = [
    { label: "Bracelet", value: productACF.bracelet },
    { label: "Movement", value: productACF.movement },
    { label: "Calibre", value: productACF.movement },
    { label: "Power Reserve", value: productACF.powerReserve },
    { label: "Certification", value: productACF.certification },
  ];

  const specificationImage = productACF.specificationImage.node.sourceUrl;
  const specificationImageAltText = productACF.specificationImage.node.altTest;

  const features = [
    {
      title: productACF.feature1Title,
      text: productACF.feature1Text,
      desktopImage: {
        src: productACF.feature1ImageDesktop.node.sourceUrl,
        alt_text: productACF.feature1ImageDesktop.node.altText,
        width: productACF.feature1ImageDesktop.node.mediaDetails.width,
        height: productACF.feature1ImageDesktop.node.mediaDetails.height,
      },
      mobileImage: {
        src: productACF.feature1ImageMobile.node.sourceUrl,
        alt_text: productACF.feature1ImageMobile.node.altText,
        width: productACF.feature1ImageMobile.node.mediaDetails.width,
        height: productACF.feature1ImageMobile.node.mediaDetails.height,
      },
    },
    {
      title: productACF.feature2Title,
      text: productACF.feature2Text,
      desktopImage: {
        src: productACF.feature2ImageDesktop.node.sourceUrl,
        alt_text: productACF.feature2ImageDesktop.node.altText,
        width: productACF.feature2ImageDesktop.node.mediaDetails.width,
        height: productACF.feature2ImageDesktop.node.mediaDetails.height,
      },
      mobileImage: {
        src: productACF.feature2ImageMobile.node.sourceUrl,
        alt_text: productACF.feature2ImageMobile.node.altText,
        width: productACF.feature2ImageMobile.node.mediaDetails.width,
        height: productACF.feature2ImageMobile.node.mediaDetails.height,
      },
    },
    {
      title: productACF.feature3Title,
      text: productACF.feature3Text,
      desktopImage: {
        src: productACF.feature3ImageDesktop.node.sourceUrl,
        alt_text: productACF.feature3ImageDesktop.node.altText,
        width: productACF.feature3ImageDesktop.node.mediaDetails.width,
        height: productACF.feature3ImageDesktop.node.mediaDetails.height,
      },
      mobileImage: {
        src: productACF.feature3ImageMobile.node.sourceUrl,
        alt_text: productACF.feature3ImageMobile.node.altText,
        width: productACF.feature3ImageMobile.node.mediaDetails.width,
        height: productACF.feature3ImageMobile.node.mediaDetails.height,
      },
    },
  ];

  const [lastFeature] = features.slice(-1);

  // Render the product page with fetched data
  return (
    <>
      <Section className="bg-rlx-light-beige pb-[3.75rem!important] pt-[0!important] lg:py-[0!important]">
        <Row className="flex-col-reverse">
          <Col className="flex w-full flex-col justify-center lg:w-1/3">
            <h1 className="leading-[1.2em]">
              <span className="rlx-body24-bold mb-[0.625rem] block text-rlx-brown">
                Rolex
              </span>
              <span className="rlx-headline50 mb-[0.625rem] block text-rlx-brown">
                {modelName}
              </span>
              <span className="rlx-body20-light block text-rlx-black">
                {modelCase}
              </span>
              <span className="rlx-body20-light block text-rlx-black">
                {productTitle}
              </span>
            </h1>
            <div className="mb-4">
              <Price price={regularPrice} />
            </div>
            <SecondaryButton
              link="#model-availability"
              text="Model availability"
            />
          </Col>
          <Col className="w-full lg:w-1/3">
            <Image
              src={productImageSrc}
              alt={productImageAltText}
              width={800}
              height={1180}
              unoptimized
            />
          </Col>
        </Row>
      </Section>
      <Section className="bg-rlx-beige pt-[0!important] lg:pt-[3.75rem!important]">
        <Row className="flex-col-reverse">
          <Col className="flex w-full flex-col justify-center lg:w-4/5">
            <div className="flex flex-row space-x-[8.483%] pb-[1.875rem] lg:flex-row">
              <div className="w-1/2 space-y-[1.25rem]">
                {specificationsOne.map((specification, index) => (
                  <SpecificationItem key={index}>
                    <SpecificationItem.Label>
                      {specification.label}
                    </SpecificationItem.Label>
                    <SpecificationItem.Value>
                      {specification.value}
                    </SpecificationItem.Value>
                  </SpecificationItem>
                ))}
              </div>
              <div className="w-1/2 space-y-[1.25rem]">
                {specificationsTwo.map((specification, index) => (
                  <SpecificationItem key={index}>
                    <SpecificationItem.Label>
                      {specification.label}
                    </SpecificationItem.Label>
                    <SpecificationItem.Value>
                      {specification.value}
                    </SpecificationItem.Value>
                  </SpecificationItem>
                ))}
              </div>
            </div>
            <div className="border-t-[1px] border-[rgba(118,118,118,0.3)] pt-[1.875rem]">
              <SecondaryButton
                link={brochure}
                text="Download Brochure"
                newTab
                iconRight
              />
            </div>
          </Col>
          <Col className="w-auto">
            <Image
              src={specificationImage}
              alt={specificationImageAltText}
              width={750}
              height={844}
              unoptimized
            />
          </Col>
        </Row>
      </Section>
      <Section className="rlx-spacing-y bg-rlx-light-beige">
        <Row size="sm">
          <Col className="rlx-spacing-y w-full">
            {features.slice(0, 2).map((feature, index) => (
              <FeatureItem key={index}>
                <FeatureItem.Textblock>
                  <FeatureItem.Title>{feature.title}</FeatureItem.Title>
                  <FeatureItem.Text>{feature.text}</FeatureItem.Text>
                </FeatureItem.Textblock>
                <Image
                  src={feature.desktopImage.src}
                  alt={feature.desktopImage.alt_text}
                  width={feature.desktopImage.width}
                  height={feature.desktopImage.height}
                  className="hidden md:block"
                  unoptimized
                />
                <Image
                  src={feature.mobileImage.src}
                  alt={feature.mobileImage.alt_text}
                  width={feature.mobileImage.width}
                  height={feature.mobileImage.height}
                  className="block md:hidden"
                  unoptimized
                />
              </FeatureItem>
            ))}
            {
              <FeatureItem key={features.length - 1}>
                <FeatureItem.Textblock>
                  <FeatureItem.Title>{lastFeature.title}</FeatureItem.Title>
                  <FeatureItem.Text>{lastFeature.text}</FeatureItem.Text>
                </FeatureItem.Textblock>
              </FeatureItem>
            }
          </Col>
        </Row>
        <Row>
          <Col className="rlx-spacing-y w-full">
            {
              <FeatureItem key={features.length - 1}>
                <Image
                  src={lastFeature.desktopImage.src}
                  alt={lastFeature.desktopImage.alt_text}
                  width={lastFeature.desktopImage.width}
                  height={lastFeature.desktopImage.height}
                  className="hidden w-full md:block"
                  unoptimized
                />
                <Image
                  src={lastFeature.mobileImage.src}
                  alt={lastFeature.mobileImage.alt_text}
                  width={lastFeature.mobileImage.width}
                  height={lastFeature.mobileImage.height}
                  className="block w-full md:hidden"
                  unoptimized
                />
              </FeatureItem>
            }
          </Col>
        </Row>
      </Section>
    </>
  );
};

export default ProductPage;
