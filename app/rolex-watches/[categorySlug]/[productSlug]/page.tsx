import { notFound, redirect } from "next/navigation";
import Image from "next/image";
import { robots } from "@/app/robots-metadata";
import { getProductBySlug, getAllProductsSlug } from "@/lib/get-products";
import { Section, Row, Col } from "@/components/Layouts";
import SpecificationItem from "@/components/SpecificationItem";
import { SecondaryButton } from "@/components/Buttons";
import Price from "@/components/Price";
import FeatureItem from "@/components/FeatureItem";
import CustomBreadcrumb from "@/components/Breadcrumb";

// Comment this out to disable SSG
export async function generateStaticParams() {
  // fetch data
  const productsData = await getAllProductsSlug();

  return productsData.map((productData: any) => ({
    productSlug: productData.slug,
    categorySlug: productData.productCategories.nodes[0].slug,
  }));
}

export async function generateMetadata({
  params: { productSlug },
}: {
  params: { productSlug: string };
}) {
  // fetch data
  const productData = await getProductBySlug(productSlug);

  // Handle case where no products are found
  if (!productData.data.product) {
    notFound();
  }

  // Return Seo title and description
  return {
    title: productData.data.product.seo.openGraph.title,
    description: productData.data.product.seo.openGraph.description,
    ...robots,
  };
}

const ProductPage = async ({
  params: { productSlug, categorySlug },
}: {
  params: { productSlug: string; categorySlug: string };
}) => {
  // Fetch product data
  const productData = await getProductBySlug(productSlug);

  // Handle case where no products are found
  if (!productData.data.product) {
    notFound();
  }

  const productCategories = productData.data.product.productCategories.nodes[0];

  // Redirect if the category slug doesn't match
  if (categorySlug !== productCategories.slug) {
    redirect(`/rolex-watches/${productCategories.slug}/${productSlug}`);
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
  const specificationImageAltText = productACF.specificationImage.node.altText;

  const features = [
    {
      title: productACF.feature1Title,
      text: productACF.feature1Text,
      desktop_image: {
        src: productACF.feature1ImageDesktop.node.sourceUrl,
        alt_text: productACF.feature1ImageDesktop.node.altText,
        width: productACF.feature1ImageDesktop.node.mediaDetails.width,
        height: productACF.feature1ImageDesktop.node.mediaDetails.height,
      },
      mobile_image: {
        src: productACF.feature1ImageMobile.node.sourceUrl,
        alt_text: productACF.feature1ImageMobile.node.altText,
        width: productACF.feature1ImageMobile.node.mediaDetails.width,
        height: productACF.feature1ImageMobile.node.mediaDetails.height,
      },
    },
    {
      title: productACF.feature2Title,
      text: productACF.feature2Text,
      desktop_image: {
        src: productACF.feature2ImageDesktop.node.sourceUrl,
        alt_text: productACF.feature2ImageDesktop.node.altText,
        width: productACF.feature2ImageDesktop.node.mediaDetails.width,
        height: productACF.feature2ImageDesktop.node.mediaDetails.height,
      },
      mobile_image: {
        src: productACF.feature2ImageMobile.node.sourceUrl,
        alt_text: productACF.feature2ImageMobile.node.altText,
        width: productACF.feature2ImageMobile.node.mediaDetails.width,
        height: productACF.feature2ImageMobile.node.mediaDetails.height,
      },
    },
    {
      title: productACF.feature3Title,
      text: productACF.feature3Text,
      desktop_image: {
        src: productACF.feature3ImageDesktop.node.sourceUrl,
        alt_text: productACF.feature3ImageDesktop.node.altText,
        width: productACF.feature3ImageDesktop.node.mediaDetails.width,
        height: productACF.feature3ImageDesktop.node.mediaDetails.height,
      },
      mobile_image: {
        src: productACF.feature3ImageMobile.node.sourceUrl,
        alt_text: productACF.feature3ImageMobile.node.altText,
        width: productACF.feature3ImageMobile.node.mediaDetails.width,
        height: productACF.feature3ImageMobile.node.mediaDetails.height,
      },
    },
  ];

  const [lastFeature] = features.slice(-1);

  const breadcrumbItems = [
    { label: "Rolex Watches", href: "/rolex-watches" },
    {
      label: productCategories.name,
      href: `/rolex-watches/${productCategories.slug}`,
    },
    { label: productTitle },
  ];

  // Render the product page with fetched data
  return (
    <>
      <Section className="bg-rlx-rolex-green py-[1.5rem!important]">
        <Row>
          <Col>
            <CustomBreadcrumb items={breadcrumbItems} />
          </Col>
        </Row>
      </Section>
      <Section className="bg-rlx-light-beige pb-[3.75rem!important] pt-[0!important] lg:py-[0!important]">
        <Row className="flex-col-reverse lg:flex-row">
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
              priority={true}
            />
          </Col>
        </Row>
      </Section>
      <Section className="bg-rlx-beige pt-[0!important] lg:pt-[5.625rem!important]">
        <Row className="flex-col-reverse lg:flex-row">
          <Col className="flex w-full flex-col justify-center lg:w-3/5">
            <div className="flex flex-row space-x-[8.483%] pb-[1.875rem] lg:flex-row">
              <div className="w-1/2 space-y-[1.25rem]">
                {specificationsOne.map((specification, index) => (
                  <SpecificationItem key={index} {...specification} />
                ))}
              </div>
              <div className="w-1/2 space-y-[1.25rem]">
                {specificationsTwo.map((specification, index) => (
                  <SpecificationItem key={index} {...specification} />
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
          <Col className="w-full lg:w-2/5">
            <Image
              src={specificationImage}
              alt={specificationImageAltText}
              width={750}
              height={844}
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
                  src={feature.desktop_image.src}
                  alt={feature.desktop_image.alt_text}
                  width={feature.desktop_image.width}
                  height={feature.desktop_image.height}
                  className="hidden md:block"
                />
                <Image
                  src={feature.mobile_image.src}
                  alt={feature.mobile_image.alt_text}
                  width={feature.mobile_image.width}
                  height={feature.mobile_image.height}
                  className="block md:hidden"
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
                  src={lastFeature.desktop_image.src}
                  alt={lastFeature.desktop_image.alt_text}
                  width={lastFeature.desktop_image.width}
                  height={lastFeature.desktop_image.height}
                  className="hidden w-full md:block"
                />
                <Image
                  src={lastFeature.mobile_image.src}
                  alt={lastFeature.mobile_image.alt_text}
                  width={lastFeature.mobile_image.width}
                  height={lastFeature.mobile_image.height}
                  className="mt-[0!important] block w-full md:hidden"
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
