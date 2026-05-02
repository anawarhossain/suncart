# SunCart

SunCart is a modern, summer-inspired eCommerce storefront built with Next.js 16 and React 19. It combines a polished shopping experience with authentication, product browsing, responsive design, and a style system based on Tailwind CSS and DaisyUI.

## Project Overview

SunCart is designed as a small demo eCommerce application with a focus on:

- Responsive landing and product listing pages
- Product detail pages with rich UI cards and stock indicators
- User authentication using email/password and Google social login
- Profile management with editable user information
- Client-side product fetching from a remote JSON data source
- Lightweight and attractive summer-themed design

## Key Features

- **Home page** with hero section, featured summer products, and curated tips.
- **Products page** with category filtering and product grid layout.
- **Product details page** for single product viewing and call-to-action buttons.
- **Authentication** using Better Auth with email/password registration, login, and Google OAuth.
- **User profile** page that displays authenticated account info.
- **Update profile** page for changing name and avatar image URL.
- **Toast notifications** for success and error feedback.
- **Animations** with `@react-spring/web` and UI motion effects.
- **Responsive navigation** and mobile-friendly layout.

## Tech Stack

- Next.js `16.2.4`
- React `19.2.4`
- Tailwind CSS `4`
- DaisyUI `5.5.19`
- Better Auth `1.6.9`
- MongoDB adapter via `@better-auth/mongo-adapter`
- `react-hook-form` for form handling
- `react-toastify` for notifications
- `react-icons` and `lucide-react` for iconography
- `react-fast-marquee` for animated hero and brand sections

## Architecture & Code Structure

### App Routes

- `/` – Home page with hero, featured products, tips, and brand showcase.
- `/products` – Product catalog with category filters.
- `/products/[id]` – Product details page.
- `/login` – Login page.
- `/register` – User registration page.
- `/profile` – Authenticated user profile page.
- `/profile/update` – Profile edit page.
- `/api/auth/[...all]` – Next.js authentication API route.

### Core Libraries

- `src/lib/products.js` – Custom React hook that fetches product data from a remote JSON source.
- `src/lib/auth-client.js` – Client-side Better Auth wrapper for sign-in/sign-up, session hooks, and sign-out.
- `src/lib/auth.js` – Server-side Better Auth configuration, MongoDB adapter, and social provider setup.

### UI Components

Major UI component groups include:

- `src/components/navbar` – Navigation bar, auth buttons, and search input.
- `src/components/footer` – Footer with contact, links, and newsletter form.
- `src/components/products` – Product cards, grid, skeleton loading states, filters, and rating display.
- `src/components/heroSection` – Home hero section and marquee branding.
- `src/components/tipsSection` – Summer shopping tips and care advice.

## Authentication Setup

SunCart uses `better-auth` for authentication and session handling.

### Server-side auth

The auth handler is configured in `src/lib/auth.js` and exposed through `src/app/api/auth/[...all]/route.js`.

### Client-side auth

The `authClient` object from `src/lib/auth-client.js` is used across login, register, profile, and navbar components.

### Supported auth flows

- Email/password sign up
- Email/password login
- Google social login
- Session tracking with `authClient.useSession()`
- Profile update via `authClient.updateUser()`

## Data Source

Product data is loaded from a remote JSON file:

`https://raw.githubusercontent.com/anawarhossain/suncart/main/public/products.json`

This makes product browsing and detail pages data-driven while keeping the UI code simple and reusable.

## Local Setup

### Prerequisites

- Node.js (recommended latest LTS)
- npm or pnpm
- MongoDB connection string
- Better Auth base URL and Google OAuth credentials

### Install dependencies

```bash
npm install
```

### Environment Variables

Create a `.env` file at the project root with the following values:

```env
BETTER_AUTH_URL=http://localhost:3000/api/auth
MONGODB_DB_URL=mongodb+srv://<username>:<password>@<cluster>/your-db-name
GOOGLE_CLIENT_ID=your-google-client-id
GOOGLE_CLIENT_SECRET=your-google-client-secret
```

> Note: `BETTER_AUTH_URL` should match the API route path used by Better Auth and your deployed environment.

### Run development server

```bash
npm run dev
```

Open `http://localhost:3000` in your browser.

## Scripts

- `npm run dev` – Start the Next.js development server.
- `npm run build` – Build the application for production.
- `npm run start` – Run the built production server.
- `npm run lint` – Run ESLint.

## Deployment Notes

- The app is designed for deployment on platforms like Vercel or any server supporting Next.js.
- Ensure environment variables are configured in the deployment settings.
- If deploying to Vercel, the `BETTER_AUTH_URL` should point to the deployed API endpoint.

## Future Enhancements

Potential improvements for SunCart:

- Add a real cart and checkout flow
- Integrate server-side product search
- Add order history and saved addresses
- Improve product discovery with sorting and pagination
- Add payment gateway integration
- Localize the app for multiple languages

## Contact

SunCart is a demonstration storefront built with modern React, Next.js, and auth integration patterns. Feel free to explore the code and customize it for your own demo or portfolio project.


# 👨‍💻 Author
**Md Anawar Hossain**
- **GitHub:** [@anawarhossain](https://github.com/anawarhossain)
- **Facebook:** [Anawar Hossain](https://web.facebook.com/AnawarHossain55)
- **LinkeIn:** [Anawar Hossain](https://www.linkedin.com/in/anawarhossain/)
- **X(Twitter):** [Anawar Hossain](https://x.com/MDANAWAR22)
- **WhatsApp:** [Anawar Hossain](https://wa.me/+8801701020694)
- **Role:** Junior Developer
