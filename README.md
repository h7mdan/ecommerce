# Ecommerce Portfolio Project

A simple ecommerce front-end built with Next.js App Router, TypeScript, and Tailwind CSS.
The project focuses on clean layout structure, reusable components, and a basic product browsing flow.

## Tech Stack

- Next.js 16 (App Router)
- React 19
- TypeScript
- Tailwind CSS 4

## Project Structure

- `app/page.tsx`: Home page (navbar, hero, featured product grid)
- `app/products/page.tsx`: Product listing page
- `app/cart/page.tsx`: Currently contains product detail-style code and needs refactor into a true cart page
- `app/product/id/page.tsx`: Present but currently empty
- `components/Navbar.tsx`: Main navigation (Home, Shop, Cart)
- `components/Hero.tsx`: Landing hero section
- `components/ProductGrid.tsx`: Product list grid
- `components/ProductCard.tsx`: Product card with link to detail URL
- `data/products.ts`: Static product mock data

## Current Routes

- `/` - Home
- `/products` - Shop all products
- `/cart` - Placeholder/in-progress page
- `/product/id` - Static path currently present

## Run Locally

1. Install dependencies:

```bash
npm install
```

2. Start development server:

```bash
npm run dev
```

3. Open:

`http://localhost:3000`

## Notes

- Product data is currently mocked in `data/products.ts`.
- Product detail links in cards are generated as `/product/{id}`; the dynamic detail route is still in progress.
- Metadata in `app/layout.tsx` is still the default and can be updated to project-specific values.
