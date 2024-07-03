const getProductCategories = async (productCategoryID: number) => {
  const imageUrl = `${process.env.WORDPRESS_DOMAIN}/wp-json/wp/v2/product_categories/${productCategoryID}`;

  try {
    const response = await fetch(imageUrl, {
      next: {
        revalidate: 3600,
      },
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error("Error fetching imagess:", error);
  }
};

export default getProductCategories;
