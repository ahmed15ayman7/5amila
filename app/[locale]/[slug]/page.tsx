"use client";

import { Pages } from "@/constant/data";
import { useTranslations } from "next-intl";


export default function Home({ params }: { params: { slug: string } }) {
  const t = useTranslations("navbar");
  return (
    <div>
      {/* <OurTeam/> */}
      {/* <FeedbackComponent/> */}
      {t(params.slug)}
      {
        //@ts-ignore
        Pages[`${params.slug}`]
      }
      {/* <BlogPage/> */}
    </div>
  );
}
