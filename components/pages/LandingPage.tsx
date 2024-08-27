'use client';

import Image from 'next/image';

const LandingPage = () => {
  return (
    <div className="relative bg-gradient-to-b from-blue-900 via-blue-800 to-blue-600 min-h-screen flex flex-col items-center justify-center px-4 py-8">
      <div 
        className="absolute inset-0 -z-10"
        style={{ backgroundImage: "url('/images/test-5.png')", backgroundSize: 'cover', backgroundPosition: 'center' }}
      />
      <div className="bg-white bg-opacity-90 p-8 rounded-lg shadow-lg max-w-2xl text-center mb-12">
        <figure className="mb-8">
          <Image
            src="/images/test-5.png"
            alt="Medical Professional"
            width={120}
            height={168}
            className="object-contain mx-auto"
          />
        </figure>
        <h1 className="text-4xl font-extrabold text-green-800 mb-4">
          المركز الرائد في زراعة الشعر بتركيا
        </h1>
        <p className="text-lg text-gray-800 mb-8 leading-relaxed">
          زراعة الشعر بتركيا – تعد عيادة فيرا من أرقى العيادات المتخصصة في زراعة الشعر بتركيا.
          وقد سطرنا نجاحًا استثنائيًا خلال العقد الأخير، حيث أتممنا أكثر من 30,000 عملية
          زراعة شعر ناجحة لمرضى من جميع أرجاء العالم. نضمن لكم التزامًا دائمًا بأعلى معايير
          الجودة في منتجاتنا وخدماتنا.
        </p>
        <a
          href="#bookconsultation"
          className="bg-[#1677ff] text-white py-3 px-8 rounded-lg shadow-lg hover:bg-[#0f5bb5] transition duration-300"
        >
          احجز استشارة مجانية
        </a>
      </div>
    </div>
  );
};

export default LandingPage;
