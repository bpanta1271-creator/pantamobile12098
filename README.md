# Panta Mobile Premium Store

A premium full-stack mobile shop website built from the store photos in the supplied PDF.

## Stack

- Next.js App Router + TypeScript
- PostgreSQL + Prisma
- Server-side eSewa ePay V2 integration
- Server-side Khalti KPG-2 integration
- Admin dashboard
- Product/category/shop pages
- Cart + checkout
- Order tracking
- Repair booking
- Contact form
- Wishlist stored in the browser

## Run locally

```bash
npm install
cp .env.example .env
npm run prisma:generate
npm run db:push
npm run db:seed
npm run dev
```

Open http://localhost:3000.

## GitHub + deployment

GitHub stores the code; it does not run the backend. For an immediate public deployment, push this repository to GitHub and import it into Vercel. Create a hosted PostgreSQL database (Neon/Supabase/Railway/Render), add the same environment variables in Vercel, then deploy.

Before going live:

1. Replace the admin password/session secret.
2. Add your real eSewa merchant product code/secret.
3. Add your real Khalti secret key.
4. Change store phone/address/email.
5. Replace the sample seed products/prices with your real catalog.
6. Use HTTPS in production.

Payment verification is server-side. The browser is never trusted as proof of payment.
