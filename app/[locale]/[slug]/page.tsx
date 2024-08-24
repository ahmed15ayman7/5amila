"use client";

import { Pages } from "@/constant/data";
import { useTranslations } from "next-intl";

export default function Home({ params }: { params: { slug: string } }) {
  const t = useTranslations("navbar");
  return (
    <div className="bg-blue-800 min-h-screen">
      <div className="container mx-auto py-8">
        <h1 className="text-center text-white text-[40px] mb-8">{t(params.slug)}</h1>
        {
          //@ts-ignore
          Pages[`${params.slug}`]
        }
      </div>
    </div>
  );
}
