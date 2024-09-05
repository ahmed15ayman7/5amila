
import ContactUs from "@/components/pages/contact-us";
import Blog from "@/components/pages/Blog";
import FreeConsultation from "@/components/pages/FreeConsultation";
import HairTransplantReviews from "@/components/pages/HairTransplantReviews";
import OurQualityStandards from "@/components/pages/OurQualityStandards";
// import VirtualTour from "@/components/pages/VirtualTour";
import IntheMedia from "@/components/pages/IntheMedia";
import PartnerInstitutions from "@/components/pages/PartnerInstitutions";
import DHI from "@/components/pages/DHI";
import Sapphire from "@/components/pages/Sapphire";
import HairlineSurgery from "@/components/pages/HairlineSurgery";
import Oxycure from "@/components/pages/Oxycure";
import African from "@/components/pages/African";
import Eyebrow from "@/components/pages/Eyebrow";
import FacialHair from "@/components/pages/Facial Hair";
import Womens from "@/components/pages/Womens";
import Sideburn from "@/components/pages/Sideburn";
import FUT from "@/components/pages/FUT";
import Mustache from "@/components/pages/Mustache";
import FollicleCalculator from "@/components/pages/Follicle Calculator";
import Before_after from "@/components/pages/before_after";
import Post_care from "@/components/pages/post_care";
import FAQs from "@/components/pages/FAQs";
import { FaUserMd, FaUsers, FaClock, FaAward } from 'react-icons/fa';
import AboutUs from "@/components/pages/AboutUs";
export const Pages = {
  "contact-us": <ContactUs />,
  about_us:<AboutUs/>,
  blog: <Blog />,
  free_consultation: <FreeConsultation />,
  hair_transplant_reviews: <HairTransplantReviews />,
  our_quality_standards: <OurQualityStandards />,
  // virtual_tour: <VirtualTour />,
  in_the_media: <IntheMedia />,
  partner_institutions: <PartnerInstitutions />,
  dhi: <DHI />,
  sapphire: <Sapphire />,
  hairline_surgery: <HairlineSurgery />,
  oxycure: <Oxycure />,
  african: <African />,
  eyebrow: <Eyebrow />,
  facial_hair: <FacialHair />,
  womens: <Womens />,
  sideburn: <Sideburn />,
  fut: <FUT />,
  mustache: <Mustache />,
  follicle_calculator: <FollicleCalculator />,
  before_after: <Before_after />,
  post_care: <Post_care />,
  faqs: <FAQs />,
};
export let NavItems=(t:any)=> [
  {
    label: t("about_us"),
    label2: "about_us", // إزالة t والأقواس
    key: "/about-us",
    children: [
      { label: t("about_us"), label2: "about_us", key: "about-us-detail" },
      { label: t("hair_transplant_reviews"), label2: "hair_transplant_reviews", key: "reviews" },
      { label: t("our_quality_standards"), label2: "our_quality_standards", key: "quality-standards" },
      // { label: t("virtual_tour"), label2: "virtual_tour", key: "virtual-tour" },
      { label: t("in_the_media"), label2: "in_the_media", key: "media" },
      { label: t("partner_institutions"), label2: "partner_institutions", key: "partner-institutions" },
    ],
  },
  {
    label: t("hair_transplant"),
    label2: "hair_transplant", // إزالة t والأقواس
    key: "/hair-transplant",
    children: [
      { label: t("dhi"), label2: "dhi", key: "dhi" },
      { label: t("sapphire"), label2: "sapphire", key: "sapphire" },
      { label: t("hairline_surgery"), label2: "hairline_surgery", key: "hairline-surgery" },
      { label: t("oxycure"), label2: "oxycure", key: "oxycure" },
      { label: t("african"), label2: "african", key: "african" },
      { label: t("eyebrow"), label2: "eyebrow", key: "eyebrow" },
      { label: t("facial_hair"), label2: "facial_hair", key: "facial-hair" },
      { label: t("womens"), label2: "womens", key: "womens" },
      { label: t("sideburn"), label2: "sideburn", key: "sideburn" },
      { label: t("fut"), label2: "fut", key: "fut" },
      { label: t("mustache"), label2: "mustache", key: "mustache" },
      { label: t("follicle_calculator"), label2: "follicle_calculator", key: "follicle-calculator" },
      { label: t("before_after"), label2: "before_after", key: "before-after" },
      { label: t("post_care"), label2: "post_care", key: "post-care" },

      { label: t("faqs"), label2: "faqs", key: "faqs" },
    ],
  },
  {
    label: t("blog"),
    label2: "blog", // إزالة t والأقواس
    key: "/blog",
    children: [
      { label: t("blog"), label2: "blog", key: "blog" },
    ],
  },
];

export const dataCharacteristics = [
  {
    title: 'Doctors',
    value: '20',
    description: 'Experienced professionals in various specialties.',
    icon: <FaUserMd size={50} className="w-12 h-12 text-primary-500 mx-auto" />,
  },
  {
    title: 'Visitors',
    value: '1000',
    description: 'Satisfied patients who trust our services.',
    icon: <FaUsers size={50} className="w-12 h-12 text-primary-500 mx-auto" />,
  },
  {
    title: 'Years of Experience',
    value: '15',
    description: 'Providing top-notch healthcare services.',
    icon: <FaClock size={50} className="w-12 h-12 text-primary-500 mx-auto" />,
  },
  {
    title: 'Awards',
    value: '10',
    description: 'Recognized for excellence in medical care.',
    icon: <FaAward size={50} className="w-12 h-12 text-primary-500 mx-auto" />,
  },
];
