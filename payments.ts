import crypto from "node:crypto";

export function esewaConfig() {
  const live = process.env.ESEWA_ENV === "production";
  return {
    url: live ? "https://epay.esewa.com.np/api/epay/main/v2/form" : "https://rc-epay.esewa.com.np/api/epay/main/v2/form",
    statusUrl: live ? "https://epay.esewa.com.np/api/epay/transaction/status/" : "https://uat.esewa.com.np/api/epay/transaction/status/",
    productCode: process.env.ESEWA_PRODUCT_CODE || "EPAYTEST",
    secret: process.env.ESEWA_SECRET_KEY || ""
  };
}

export function esewaSignature(total: string, uuid: string, productCode: string) {
  return crypto.createHmac("sha256", esewaConfig().secret).update(`total_amount=${total},transaction_uuid=${uuid},product_code=${productCode}`).digest("base64");
}

export function verifyEsewaResponse(data: Record<string, string>) {
  const signedNames = data.signed_field_names || "transaction_code,status,total_amount,transaction_uuid,product_code,signed_field_names";
  const message = signedNames.split(",").map((key) => `${key}=${data[key] ?? ""}`).join(",");
  const expected = crypto.createHmac("sha256", esewaConfig().secret).update(message).digest("base64");
  return crypto.timingSafeEqual(Buffer.from(expected), Buffer.from(data.signature || ""));
}

export function khaltiBase() {
  return process.env.KHALTI_ENV === "production" ? "https://khalti.com/api/v2" : "https://dev.khalti.com/api/v2";
}
