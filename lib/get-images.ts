const getImages = async (imageID: number) => {
  const imageUrl = `${process.env.WORDPRESS_DOMAIN}/wp-json/wp/v2/media/${imageID}`;

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

export default getImages;
