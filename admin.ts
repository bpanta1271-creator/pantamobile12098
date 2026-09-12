import { SignJWT, jwtVerify } from "jose";
import { cookies } from "next/headers";

const secret = () => new TextEncoder().encode(process.env.ADMIN_SESSION_SECRET || "dev-only-change-me");

export async function createAdminSession() {
  return new SignJWT({ admin: true, email: process.env.ADMIN_EMAIL || "admin@pantamobile.com" }).setProtectedHeader({ alg: "HS256" }).setIssuedAt().setExpirationTime("7d").sign(secret());
}

export async function isAdmin() {
  const token = (await cookies()).get("panta_admin")?.value;
  if (!token) return false;
  try { await jwtVerify(token, secret()); return true; } catch { return false; }
}
