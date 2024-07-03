import { notFound } from "next/navigation";
import Image from "next/image";
import { redirect } from "next/navigation";
import Link from "next/link";
import getProducts from "@/lib/getProducts";
import getImages from "@/lib/getImages";
import getProductCategories from "@/lib/getProductCategories";
import { Section, Row, Col } from "@/components/Layout";

const ProductPage = async ({
  params,
}: {
  params: { productSlug: string; categorySlug: string };
}) => {
  const productsUrl = `${process.env.WORDPRESS_DOMAIN}/wp-json/wp/v2/products?slug=${params.productSlug}`;

  const products = await getProducts(productsUrl);

  if (!products || products.length === 0) {
    notFound();
  }

  const product = products[0]; // Assuming the first product is the one we need

  const productCategories = await getProductCategories(
    product.product_categories,
  ).then((productCat) => productCat.slug);

  if (params.categorySlug !== productCategories) {
    redirect(`/rolex-watches/${productCategories}/${params.productSlug}`);
  }

  // Extracting meta data values
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
  const producImage = await getImages(product.featured_media).then(
    (image) => image.media_details.sizes.full.source_url,
  );
  const productImageAltText = await getImages(product.featured_media).then(
    (image) => image.alt_text,
  );
  const specificationImage = await getImages(
    product.acf.specification_image,
  ).then((image) => image.media_details.sizes.full.source_url);
  const specificationImageAltText = await getImages(
    product.acf.specification_image,
  ).then((image) => image.alt_text);

  const specificationsOne = [
    { label: "Reference", value: reference },
    { label: "Model Case", value: modelCase },
    { label: "Water-resistance", value: waterResistance },
    { label: "Water-resistance", value: bezel },
    { label: "Dial", value: dial },
  ];

  const specificationsTwo = [
    { label: "Bracelet", value: bracelet },
    { label: "Movement", value: movement },
    { label: "Calibre", value: calibre },
    { label: "Power reserve", value: powerReserve },
    { label: "Certification", value: certification },
  ];

  const SpecificationItem = (specification: any) => (
    <div>
      <div className="text-rlx-brown rlx-body20-bold">
        {specification.label}
      </div>
      <div className="text-rlx-black rlx-body20-light">
        {specification.value}
      </div>
    </div>
  );

  return (
    <>
      <Section className="bg-rlx-light-beige pb-[3.75rem!important] pt-[0!important] lg:py-[0!important]">
        <Row className="flex flex-col-reverse lg:flex-row">
          <Col className="flex w-full flex-col justify-center lg:w-1/3">
            <h1 className="leading-[1.2em]">
              <span className="text-rlx-brown rlx-body24-bold mb-[0.625rem] block">
                Rolex{" "}
              </span>
              <span className="text-rlx-brown rlx-headline50 mb-[0.625rem] block">
                {modelName}
              </span>
              <span className="text-rlx-black rlx-body20-light block">
                {modelCase}
              </span>
              <span className="text-rlx-black rlx-body20-light block">
                {productTitle}
              </span>
            </h1>
          </Col>
          <Col className="w-full lg:w-1/3">
            <Image
              src={producImage}
              alt={productImageAltText}
              width={800}
              height={1180}
              unoptimized
            />
          </Col>
        </Row>
      </Section>
      <Section className="bg-rlx-beige pt-[0!important] lg:pt-[3.75rem!important]">
        <Row className="flex-col-reverse lg:flex-row">
          <Col className="flex w-full flex-col justify-center lg:w-4/5">
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
            <div>
              <Link href={brochure} target="_blank">
                Download Brochure
              </Link>
            </div>
          </Col>
          <Col className="w-auto">
            <Image
              src={specificationImage}
              alt={specificationImageAltText}
              width={800}
              height={1180}
              unoptimized
            />
          </Col>
        </Row>
      </Section>
    </>
  );
};

export default ProductPage;
