---
id: getting-started
title: Getting Started
sidebar_label: Getting Started
slug: /WP-Next/getting-started
---

# Getting Started with WP-Next

Welcome to **WP-Next**, a modern WordPress frontend framework built with **Next.js**. WP-Next allows you to create *
*fast, SEO-friendly, and highly customizable** WordPress-powered websites using Next.js and React.

## Prerequisites

Before you start, make sure you have the following installed:

- **Node.js (v18 or later)** → [Download here](https://nodejs.org/)
- **npm or yarn** → Package managers
- **A WordPress site with WP REST API enabled**
- **Basic knowledge of Next.js and React**

## Installation

To set up WP-Next, clone the repository and install dependencies:

```sh
git clone https://github.com/STechBD/WP-Next.git
cd WP-Next
npm install
```

or using yarn:

```sh
git clone https://github.com/STechBD/WP-Next.git
cd WP-Next
yarn install
```

## Configuration

After installing the dependencies, configure your WordPress site URL in the `.env.local` file:

```sh
WORDPRESS_URL=https://your-wordpress-site.com
```

## Development

To start the development server, run:

```sh
npm run dev
```

or using yarn:

```sh
yarn dev
```

This will start the development server at `http://localhost:3000`.

## Build

To build the project, run:

```sh
npm run build
```

or using yarn:

```sh
yarn build
```

This will create an optimized production build in the `build` directory.

## Deployment

To deploy the project, run:

```sh
npm run start
```

or using yarn:

```sh
yarn start
```

This will start the production server at `http://localhost:3000`.

## Learn More

To learn more about WP-Next, check out the [documentation](/docs/introduction).
