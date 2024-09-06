import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const LandingPage: React.FC = () => {
  let path=usePathname()
let prePath=path.slice(0,3)
  return (
    <section
      className="h-screen bg-no-repeat bg-cover bg-center"
      style={{
        backgroundImage: `url('/images/landing page.png')`,
      }}>
      <div className="overlay-background-image">
        <div className="flex h-full w-full items-center justify-center container mx-auto px-8 py-44 text-black font-extrabold">
          <div className="max-w-2xl text-center h-full w-full">
            {/* <h1
              className="text-3xl sm:text-5xl lg:text-7xl text-black font-extrabold"
              data-aos="fade-up-left">
              Welcome To 5amila
            </h1> */}
            {/* <p className="mt-6 lg:text-3xl text-white" data-aos="fade-up-left">
            معنا تجد الحلول العقارية التي تناسب احتياجاتك

            </p> */}
            {/* <p className="mt-6 lg:text-3xl text-black font-extrabold" data-aos="fade-up-left">
            نحن دليلك لتحقيق حلمك  المثالي

            </p> */}
            <div
              className="mt-8 flex flex-col space-y-3 sm:-mx-2 sm:flex-row sm:justify-center sm:space-y-0"
              data-aos="fade-up-right">
              <Link href={`${prePath}/about_us`}>
                <p className="btn-blue p-5" style={{
        backgroundColor: 'white',
        borderColor: '#64c1e8',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: '8px',
      }}>About Us</p>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LandingPage;