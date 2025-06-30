# Memora Project

## Development
1. Install dependencies with `npm install`.
2. Run the development server with **`npm run dev`**.
3. Open [http://localhost:3000](http://localhost:3000) in your browser to view the site.

## Customizing Design Tokens
Brand colors and font families are defined in **`tailwind.config.ts`** (under `theme.extend`). To change the theme (colors, spacing, etc.), edit these values and restart the dev server. Tailwind will regenerate the CSS with your updates.

## Production Build
1. Generate an optimized production build with **`npm run build`**.
2. Start the production server with **`npm start`**. Ensure all environment variables (if any) are set appropriately before starting.

## Notes
- This project uses **Next.js 15 (App Router)** with **React** and **TypeScript**. 
- Global styles (including Tailwind CSS utilities) are in **`styles/globals.css`**.
- Shared components like the header and footer live in the **`components/`** directory and are imported in the app layout.
- A dark mode toggle is provided in the header (uses the Tailwind `dark` class). The default theme is light; user preference is stored in `localStorage`.
- The site is designed for accessibility and responsiveness, with proper focus states, ARIA labels, and keyboard navigation support.
