export const WORDPRESS_DOMAIN = process.env.WORDPRESS_DOMAIN;

if (!process.env.WORDPRESS_GRAPHQL_API) {
  console.warn("WORDPRESS_GRAPHQL_API is not defined. Using default value.");
}
export const WPGRAPHQL_API: string =
  process.env.WORDPRESS_GRAPHQL_API ?? "https://default-api-url.com/graphql";
