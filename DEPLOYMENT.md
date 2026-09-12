# Deploy this repo in the fastest way

## 1. GitHub

Create a new GitHub repository and upload every file in this folder.

## 2. PostgreSQL

Create a hosted PostgreSQL database on Neon or Supabase. Copy its connection string into:

`DATABASE_URL`

## 3. Vercel

Import the GitHub repository into Vercel. Framework preset: **Next.js**.

Add all variables from `.env.example` in Vercel Project Settings → Environment Variables.

Minimum production variables:

- DATABASE_URL
- NEXT_PUBLIC_SITE_URL
- ADMIN_EMAIL
- ADMIN_PASSWORD
- ADMIN_SESSION_SECRET
- ESEWA_ENV
- ESEWA_PRODUCT_CODE
- ESEWA_SECRET_KEY
- KHALTI_ENV
- KHALTI_SECRET_KEY

## 4. Create the database tables

Run once from your computer after setting `DATABASE_URL`:

```bash
npm install
npx prisma generate
npx prisma db push
npx prisma db seed
```

## 5. Payment gateway setup

For eSewa, set the success URL used by the app to your production domain through `NEXT_PUBLIC_SITE_URL`. The code signs the ePay V2 request on the server and verifies the returned signature plus transaction status before marking an order paid.

For Khalti, use the live merchant secret only in Vercel Environment Variables. The callback performs a server-side lookup and only marks an order paid when Khalti returns `Completed` with the expected amount.

## 6. Important

GitHub alone does not host a Next.js backend. You need a runtime such as Vercel and a hosted database for the live site.
