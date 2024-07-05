import { notFound, redirect } from "next/navigation";
import Image from "next/image";
import getProducts from "@/lib/get-products";
import getImages from "@/lib/get-images";
import getProductCategories from "@/lib/get-product-categories";
import { Section, Row, Col } from "@/components/Layouts";
import SpecificationItem from "@/components/SpecificationItem";
import { SecondaryButton } from "@/components/Buttons";

const ProductPage = async ({
  params,
}: {
  params: { productSlug: string; categorySlug: string };
}) => {
  // Construct URL to fetch product data based on slug
  const productsUrl = `${process.env.WORDPRESS_DOMAIN}/wp-json/wp/v2/products?slug=${params.productSlug}`;

  // Fetch product data
  const products = await getProducts(productsUrl);

  // Handle case where no products are found
  if (!products || products.length === 0) {
    notFound();
  }

  // Assume the first product is the one we need based on the slug
  const product = products[0];

  // Fetch product categories and validate the category slug
  const productCategories = await getProductCategories(
    product.product_categories,
  ).then((productCat) => productCat.slug);

  // Redirect if the category slug doesn't match
  if (params.categorySlug !== productCategories) {
    redirect(`/rolex-watches/${productCategories}/${params.productSlug}`);
  }

  // Extract relevant product data
  const productTitle = product.title.rendered;
  const modelName = product.acf.model_name;
  const reference = product.acf.reference;
  const modelCase = product.acf.model_case;
  const waterResistance = product.acf["water-resistance"];
  const bezel = product.acf.bezel;
  const dial = product.acf.dial;
  const bracelet = product.acf.bracelet;
  const movement = product.acf.movement;
  const calibre = product.acf.calibre;
  const powerReserve = product.acf.power_reserve;
  const certification = product.acf.certification;
  const brochure = product.acf.brochure;
  const featuredTitleOne = product.acf.feature_1_title;
  const featuredTextOne = product.acf.feature_1_text;

  // Fetch images and their alt texts
  let imageData;

  imageData = await getImages(product.featured_media);
  const productImageSrc = imageData.media_details.sizes.full.source_url;
  const productImageAltText = imageData.alt_text;

  imageData = await getImages(product.acf.specification_image);
  const specificationImage = imageData.media_details.sizes.full.source_url;
  const specificationImageAltText = imageData.alt_text;

  imageData = await getImages(product.acf.feature_1_image_desktop);
  const featuredImageOne = imageData.media_details.sizes.full.source_url;
  const featuredImageOneAltText = imageData.alt_text;

  // Define specifications for rendering
  const specificationsOne = [
    { label: "Reference", value: reference },
    { label: "Model Case", value: modelCase },
    { label: "Water Resistance", value: waterResistance },
    { label: "Bezel", value: bezel },
    { label: "Dial", value: dial },
  ];

  const specificationsTwo = [
    { label: "Bracelet", value: bracelet },
    { label: "Movement", value: movement },
    { label: "Calibre", value: calibre },
    { label: "Power Reserve", value: powerReserve },
    { label: "Certification", value: certification },
  ];

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
      <Section className="bg-rlx-light-beige">
        <Row size="sm">
          <Col className="w-full space-y-[5.625rem]">
            <div className="space-y-[1.25rem]">
              <div className="rlx-headline50 text-rlx-brown">
                <h2>{featuredTitleOne}</h2>
              </div>
              <div className="rlx-body20-light text-rlx-black">
                <p>{featuredTextOne}</p>
              </div>
            </div>
            <Image
              src={featuredImageOne}
              alt={featuredImageOneAltText}
              width={750}
              height={844}
              unoptimized
            />
          </Col>
        </Row>
      </Section>
    </>
  );
};

export default ProductPage;
