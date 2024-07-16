import { WPGRAPHQL_API } from "@/utils/constants";

export const getProductBySlug = async (productSlug: string) => {
  try {
    const response = await fetch(WPGRAPHQL_API, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        query: `
          query RolexProductBySlug($productSlug: ID!) {
            product(idType: SLUG, id: $productSlug) {
              featuredImage {
                node {
                  altText
                  mediaDetails {
                    height
                    width
                  }
                  sourceUrl
                }
              }
              title(format: RENDERED)
              rolexProducts {
                bezel
                bracelet
                brochure
                calibre
                certification
                dial
                familyIntro
                familyName
                feature1Text
                feature1Title
                feature2Text
                feature2Title
                feature3Text
                feature3Title
                modelCase
                modelName
                movement
                powerReserve
                ranking
                reference
                regularPrice
                waterResistance
                familyBannerImageDesktop {
                  node {
                    altText
                    sourceUrl
                    mediaDetails {
                      height
                      width
                    }
                  }
                }
                familyBannerImageMobile {
                  node {
                    altText
                    mediaDetails {
                      height
                      width
                    }
                    sourceUrl
                  }
                }
                feature1ImageDesktop {
                  node {
                    altText
                    mediaDetails {
                      height
                      width
                    }
                    sourceUrl
                  }
                }
                feature1ImageMobile {
                  node {
                    altText
                    sourceUrl
                    mediaDetails {
                      height
                      width
                    }
                  }
                }
                feature2ImageDesktop {
                  node {
                    altText
                    mediaDetails {
                      height
                      width
                    }
                    sourceUrl
                  }
                }
                feature2ImageMobile {
                  node {
                    altText
                    mediaDetails {
                      height
                      width
                    }
                    sourceUrl
                  }
                }
                feature3ImageDesktop {
                  node {
                    altText
                    mediaDetails {
                      height
                      width
                    }
                    sourceUrl
                  }
                }
                feature3ImageMobile {
                  node {
                    altText
                    mediaDetails {
                      height
                      width
                    }
                    sourceUrl
                  }
                }
                modelAvailabilityInBoxImage {
                  node {
                    altText
                    mediaDetails {
                      height
                      width
                    }
                    sourceUrl
                  }
                }
                specificationImage {
                  node {
                    altText
                    mediaDetails {
                      height
                      width
                    }
                    sourceUrl
                  }
                }
              }
              productCategories {
                nodes {
                  name
                  slug
                }
              }
              seo {
                openGraph {
                  title
                  description
                }
              }
            }
          }
        `,
        variables: {
          productSlug: productSlug,
        },
      }),
      next: {
        revalidate: 60,
      },
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error("Error fetching products:", error);
  }
};

export const getProductCategoryBySlug = async (categorySlug: string) => {
  try {
    const response = await fetch(WPGRAPHQL_API, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        query: `
          query RolexProductCategoryBySlug($categorySlug: ID!) {
            productCategory(idType: SLUG, id: $categorySlug) {
              seo {
                openGraph {
                  title
                  description
                }
              }
              products(first: 100) {
                nodes {
                  featuredImage {
                    node {
                      sourceUrl
                      altText
                      mediaDetails {
                        width
                        height
                      }
                    }
                  }
                  rolexProducts {
                    modelName
                    modelCase
                  }
                  slug
                }
              }
              name
              count
            }
          }
        `,
        variables: {
          categorySlug: categorySlug,
        },
      }),
      next: {
        revalidate: 60,
      },
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error("Error fetching products:", error);
  }
};
