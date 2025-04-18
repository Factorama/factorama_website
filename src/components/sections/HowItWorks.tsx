import React from 'react'
import { useTranslations } from "next-intl"

const HowItWorks = () => {
  const t = useTranslations('Section4')

  return (
    <section className="w-full py-24 bg-white">
      <div className="w-full bg-white max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
          <h2 className="title-color text-gray-700 font-semibold text-4xl sm:text-5xl text-center mb-12">
            {t('title')}
          </h2>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks
