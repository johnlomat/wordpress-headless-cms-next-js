const WPGRAPHQL_API = `${process.env.WORDPRESS_GRAPHQL_API}`;

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
                  slug
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
        revalidate: 3600,
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

export const getProductMetaData = async (productSlug: string) => {
  try {
    const response = await fetch(WPGRAPHQL_API, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        query: `
          query RolexProductSeo($productSlug: ID!) {
          product(idType: SLUG, id: $productSlug) {
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
        revalidate: 3600,
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
