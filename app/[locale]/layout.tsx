import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";

import { dir } from "i18next";
import { getLocale, getMessages } from "next-intl/server";
import ThemsProv from "@/components/providers/NextIntlClient";
import { NextIntlClientProvider } from "next-intl";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

interface RootLayoutProps {
  children: React.ReactNode;
  params: {
    locale: string;
  };
}
export default async function RootLayout({
  children,
  params: { locale },
}: Readonly<RootLayoutProps>) {
  const messages = await getMessages();

  // إدارة الوضع الداكن والفاتح باستخدام useState

  return (
    <html lang={locale} dir={dir(locale)}>
      <body className={inter.className}>
        <NextIntlClientProvider messages={messages}>
          <ThemsProv>{children}</ThemsProv>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}