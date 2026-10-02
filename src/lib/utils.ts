import { COMPANY_DETAILS } from './data';

export function cn(...classes: (string | boolean | undefined | null)[]): string {
  return classes.filter(Boolean).join(' ');
}

export function formatIndianCurrency(amount: number): string {
  if (amount >= 10000000) {
    const cr = (amount / 10000000).toFixed(2);
    return `₹${cr.replace(/\.00$/, '')} Cr`;
  }
  if (amount >= 100000) {
    const lakhs = (amount / 100000).toFixed(1);
    return `₹${lakhs.replace(/\.0$/, '')} Lakhs`;
  }
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    maximumFractionDigits: 0
  }).format(amount);
}

export function formatNumber(num: number): string {
  return new Intl.NumberFormat('en-IN').format(num);
}

export function validateIndianPhone(phone: string): boolean {
  const cleaned = phone.replace(/[^0-9]/g, '');
  // Valid Indian 10 digit number or 91 + 10 digits
  if (cleaned.length === 10 && /^[6-9]\d{9}$/.test(cleaned)) return true;
  if (cleaned.length === 12 && cleaned.startsWith('91') && /^[6-9]\d{9}$/.test(cleaned.slice(2))) return true;
  return false;
}

export function cleanPhoneDigits(phone: string): string {
  return phone.replace(/[^0-9]/g, '');
}

export function createWhatsAppUrl(customMessage?: string): string {
  const defaultMsg = "Hi Tier 3 Builders, I visited your website. I have a plot in Bangalore and want to discuss home construction without unexpected surprises.";
  const text = encodeURIComponent(customMessage || defaultMsg);
  return `https://wa.me/${COMPANY_DETAILS.whatsappRaw}?text=${text}`;
}

export function trackWhatsAppClick(source: 'hero' | 'sticky' | 'footer' | 'portfolio' | 'header' | 'estimator' | 'materials'): void {
  try {
    if (typeof window !== 'undefined' && (window as unknown as { gtag?: (...args: unknown[]) => void }).gtag) {
      (window as unknown as { gtag: (...args: unknown[]) => void }).gtag('event', 'whatsapp_click', {
        method: source,
        timestamp: new Date().toISOString()
      });
    }
  } catch {
    // Silent catch for analytics
  }
}

export function trackCallClick(source: string): void {
  try {
    if (typeof window !== 'undefined' && (window as unknown as { gtag?: (...args: unknown[]) => void }).gtag) {
      (window as unknown as { gtag: (...args: unknown[]) => void }).gtag('event', 'phone_call_click', {
        source,
        timestamp: new Date().toISOString()
      });
    }
  } catch {
    // Silent catch
  }
}
