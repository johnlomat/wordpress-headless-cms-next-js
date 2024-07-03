const getProducts = async (productsUrl: string) => {
  try {
    const response = await fetch(productsUrl, {
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

export default getProducts;
