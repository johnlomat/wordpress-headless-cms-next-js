# WordPress Headless CMS with Next.js

This project demonstrates how to use WordPress as a headless CMS with Next.js. It leverages Advanced Custom Fields (ACF) to manage custom data in WordPress and fetches this data via the WordPress REST API to render content on the Next.js frontend.

## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Requirements](#requirements)
- [Installation](#installation)
- [Configuration](#configuration)
- [Usage](#usage)
- [Deployment](#deployment)

## Introduction

This project uses WordPress as a headless CMS, where WordPress manages the content and Next.js handles the frontend rendering. By using ACF, you can create custom fields and structures within WordPress and then fetch this data using the WordPress REST API.

## Features

- **WordPress as a Headless CMS**: WordPress is used solely for content management, with the frontend entirely decoupled.
- **Advanced Custom Fields (ACF)**: Utilize ACF to define and manage custom data fields within WordPress.
- **Next.js for Server-side Rendering (SSR) and Static Site Generation (SSG)**: Next.js provides flexibility in rendering strategies to optimize performance.
- **Data Fetching from WordPress REST API**: Fetch content and custom data from WordPress via its REST API endpoints.
- **Responsive and Modern UI**: Design and implement a responsive user interface leveraging Next.js and Tailwind CSS.

## Requirements

- WordPress installation (self-hosted or managed)
- Advanced Custom Fields (ACF) plugin
- Node.js (version 12 or higher)
- npm or yarn package manager

## Installation

### WordPress Setup

1. **Install WordPress:**

   - Download and install WordPress from [wordpress.org](https://wordpress.org/download/).

2. **Install ACF Plugin:**

   - Go to the WordPress admin dashboard.
   - Navigate to Plugins > Add New.
   - Search for "Advanced Custom Fields" and install the plugin.

3. **Create Custom Fields:**
   - Use ACF to create custom fields as needed.

### Next.js Setup

1. **Clone the repository:**

   ```bash
   git clone https://github.com/yourusername/your-repo-name.git
   cd your-repo-name
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

   **or**

   ```bash
   yarn install
   ```

3. **Configure Environment Variables:**

   Create a `.env.local` file in the root of your project and define your WordPress domain:

   ```bash
   WORDPRESS_DOMAIN=http://your-wordpress-domain.com
   ```

### Configuration

1. **Fetching Data Example**
   To fetch data from WordPress using the REST API, you can define a function like `getProducts`:

   ```bash
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
   ```

   Replace `productsUrl` with the appropriate endpoint URL from your WordPress installation.

### Usage

- Customize components and pages in your Next.js application to consume data fetched from WordPress.
- Utilize Tailwind CSS or other styling solutions for responsive and modern UI design.

### Deployment

Deploy your Next.js application as per your deployment strategy, ensuring that environment variables are correctly configured for production use.
