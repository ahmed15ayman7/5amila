'use client'
import LandingPage from '@/components/pages/LandingPage';
import BlogPage from '@/components/shared/BlogPosts';
import Characteristics from '@/components/shared/Characteristics';
import FeedbackComponent from '@/components/shared/Feedbacks';
import HairTransplantProcedure from '@/components/shared/HairTransplantProcedure';
import OurTeam from '@/components/shared/OurTeam';
import { useTranslations } from 'next-intl';

export default function Home() {
  const t = useTranslations('navbar');

  return (
    <div>
      <LandingPage />
      <HairTransplantProcedure/>
      <Characteristics/>
      <OurTeam/>
      <FeedbackComponent/>
      <BlogPage/>
     
    </div>
  );
}