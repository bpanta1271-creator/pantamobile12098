export function money(value: number) {
  return new Intl.NumberFormat("en-NP", { style: "currency", currency: "NPR", maximumFractionDigits: 0 }).format(value);
}
export function slugify(value: string) {
  return value.toLowerCase().trim().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
}
export function makeOrderNumber() {
  const d = new Date();
  const stamp = d.toISOString().replace(/\D/g, "").slice(0, 14);
  return `PANTA-${stamp}-${Math.random().toString(36).slice(2, 7).toUpperCase()}`;
}
export function makeTicketNumber() {
  return `REP-${Date.now()}-${Math.random().toString(36).slice(2, 5).toUpperCase()}`;
}
