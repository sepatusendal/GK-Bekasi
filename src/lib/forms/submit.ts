/**
 * ============================================================================
 *  TEMPORARY STUB — REPLACE BEFORE LAUNCH
 * ============================================================================
 * TODO: ganti implementasi ini dengan submit ke Google Form asli setelah
 * form Google Forms dibuat oleh tim GK Bekasi. Saat form itu sudah ada:
 *   1. Buka Google Form-nya, lihat source HTML, cari `name="entry.XXXXXXX"`
 *      untuk tiap field.
 *   2. Ganti body function di bawah ini jadi POST ke URL
 *      `https://docs.google.com/forms/d/e/<FORM_ID>/formResponse`
 *      dengan `mode: "no-cors"` dan body `URLSearchParams` yang memetakan
 *      tiap key di `data` ke `entry.<ID>` yang sesuai.
 *   3. Karena "no-cors" tidak memberi status response yang bisa dibaca,
 *      anggap sukses kalau fetch tidak throw (sama seperti stub ini).
 * ============================================================================
 */

export type FormType = "join" | "contact";

export async function submitToGoogleForm(
  type: FormType,
  data: Record<string, unknown>,
): Promise<{ success: boolean }> {
  // Simulasi network delay + selalu sukses untuk sekarang.
  await new Promise((resolve) => setTimeout(resolve, 900));
  console.log(`[submitToGoogleForm:${type}]`, data);
  return { success: true };
}
