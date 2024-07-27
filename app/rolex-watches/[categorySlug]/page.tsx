import { notFound } from 'next/navigation'
import { robots } from '@/app/robots-metadata'
import { Section, Row, Col } from '@/components/Layouts'
import ProductCard from '@/components/ProductCard'
import { getProductCategoryBySlug, getAllProductCategoriesSlug } from '@/lib/get-products'
import CustomBreadcrumb from '@/components/Breadcrumb'

// Comment this out to disable SSG
export async function generateStaticParams() {
  const productCategoriesData = await getAllProductCategoriesSlug()

  return productCategoriesData.data.productCategories.nodes.map((productCategoryData: any) => {
    categorySlug: productCategoryData.slug
  })
}

export async function generateMetadata({
  params: { categorySlug },
}: {
  params: { categorySlug: string }
}) {
  // fetch data
  const productCategoryData = await getProductCategoryBySlug(categorySlug)

  if (!productCategoryData.data.productCategory) {
    notFound()
  }

  // Return Seo title and description
  return {
    title: productCategoryData.data.productCategory.seo.openGraph.title,
    description: productCategoryData.data.productCategory.seo.openGraph.description,
    ...robots,
  }
}

const ProductCategory = async ({
  params: { categorySlug },
}: {
  params: { categorySlug: string }
}) => {
  const productCategoryData = await getProductCategoryBySlug(categorySlug)

  if (!productCategoryData.data.productCategory) {
    notFound()
  }

  const title = productCategoryData.data.productCategory.name
  const products = productCategoryData.data.productCategory.products.nodes

  const breadcrumbItems = [
    { label: 'Rolex Watches', href: '/rolex-watches' },
    {
      label: title,
    },
  ]

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
              <ProductCard
                key={index}
                href={`/rolex-watches/${categorySlug}/${product.slug}`}
                src={product.featuredImage.node.sourceUrl}
                alt={product.featuredImage.node.altText}
                width={product.featuredImage.node.mediaDetails.width}
                height={product.featuredImage.node.mediaDetails.height}
                modelName={product.rolexProducts.modelName}
                modelCase={product.rolexProducts.modelCase}
              />
            ))}
          </Col>
        </Row>
      </Section>
    </>
  )
}

export default ProductCategory
