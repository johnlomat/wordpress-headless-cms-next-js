if (!process.env.WORDPRESS_GRAPHQL_API) {
  throw new Error(`
    Please provide a valid WordPress instance URL.
    Add to your environment variables WORDPRESS_GRAPHQL_API.
  `);
}

let protocol, hostname, port, pathname;

try {
  const url = new URL(process.env.WORDPRESS_GRAPHQL_API);
  protocol = url.protocol.slice(0, -1); // Remove the colon at the end
  hostname = url.hostname;
  port = url.port;
  pathname = url.pathname;
} catch (error) {
  throw new Error("Invalid WORDPRESS_GRAPHQL_API URL");
}

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol,
        hostname,
        port,
        pathname: "/wp-content/uploads/**",
      },
    ],
  },
};

export default nextConfig;
