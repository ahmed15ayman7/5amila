import { notFound } from 'next/navigation';
import { getRequestConfig } from 'next-intl/server';

// يمكن استيرادها من تكوين مشترك
const locales = ['en', 'ar'];

export default getRequestConfig(async ({ locale }) => {
  // تحقق من أن الـ locale المُمرر صالح
  if (!locales.includes(locale as string)) {
    notFound();
  }

  // استيراد الرسائل للـ locale
  const messages = await import(`@/messages/${locale}.json`).then((mod) => mod.default);

  // أعد فقط الرسائل، لا تعيد locale مرة أخرى
  return {
    messages,
  };
});
