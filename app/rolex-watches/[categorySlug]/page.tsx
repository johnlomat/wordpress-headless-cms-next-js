import { notFound } from "next/navigation";
import { Section, Row, Col } from "@/components/Layouts";
import ProductCard from "@/components/ProductCard";
import { getProductCategoryBySlug } from "@/lib/get-products";
import CustomBreadcrumb from "@/components/Breadcrumb";

export async function generateMetadata({
  params,
}: {
  params: { categorySlug: string };
}) {
  // fetch data
  const productCategoryData = await getProductCategoryBySlug(
    params.categorySlug,
  );

  // Handle case where no products are found
  if (!productCategoryData.data.productCategory) {
    notFound();
  }

  // Return Seo title and description
  return {
    title: productCategoryData.data.productCategory.seo.openGraph.title,
    description:
      productCategoryData.data.productCategory.seo.openGraph.description,
  };
}

const ProductCategory = async ({
  params,
}: {
  params: { categorySlug: string };
}) => {
  const productCategoryData = await getProductCategoryBySlug(
    params.categorySlug,
  );

  if (!productCategoryData.data.productCategory) {
    notFound();
  }

  const title = productCategoryData.data.productCategory.name;
  const products = productCategoryData.data.productCategory.products.nodes;

  const breadcrumbItems = [
    { label: "Rolex Watches", href: "/rolex-watches" },
    {
      label: title,
    },
  ];

  return (
    <>
      <Section className="bg-rlx-rolex-green py-[1.5rem!important]">
        <Row>
          <Col>
            <CustomBreadcrumb items={breadcrumbItems} />
          </Col>
        </Row>
      </Section>
      <Section className="bg-rlx-light-beige">
        <Row className="max-w-[70rem] space-y-[2.5rem]">
          <Col className="w-full">
            <div className="rlx-headline50 text-center text-rlx-brown">
              <h2>Rolex {title}</h2>
              <h3>A Selection of models</h3>
            </div>
          </Col>
          <Col className="grid w-full grid-cols-2 gap-[0.5rem] lg:grid-cols-3">
            {products.map((product: any, index: number) => (
              <ProductCard key={index}>
                <ProductCard.LinkWrapper
                  href={`/rolex-watches/${params.categorySlug}/${product.slug}`}
                >
                  <ProductCard.ImageWrapper
                    src={product.featuredImage.node.sourceUrl}
                    alt={product.featuredImage.node.altText}
                    width={product.featuredImage.node.mediaDetails.width}
                    height={product.featuredImage.node.mediaDetails.height}
                  />
                  <ProductCard.BodyWrapper>
                    <div className="mb-[0.3125rem]">
                      <h3>
                        <span className="rlx-legend16-bold block">Rolex</span>
                        <span className="rlx-body24-bold block">
                          {product.rolexProducts.modelName}
                        </span>
                      </h3>
                    </div>
                    <div className="rlx-legend16-light">
                      {product.rolexProducts.modelCase}
                    </div>
                  </ProductCard.BodyWrapper>
                </ProductCard.LinkWrapper>
              </ProductCard>
            ))}
          </Col>
        </Row>
      </Section>
    </>
  );
};

export default ProductCategory;
