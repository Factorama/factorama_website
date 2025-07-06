import React from 'react';
import { useTranslations } from "next-intl";

const Faqs = () => {
  const t = useTranslations('Section5');
  const questionKeys = Object.keys(t.raw('questions')) as Array<string>;
  const questions = questionKeys.map((key) => {
    const q = t.raw(`questions.${key}`) as { question: string; answer: string };
    return {
      question: q.question,
      answer: q.answer
    };
  });

  return (
    <section className="w-full py-24">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
          <h2 className="title-color text-gray-700 font-semibold text-4xl sm:text-5xl text-center mb-12">
            {t('title')}
          </h2>
        </div>
        {questions.map((item, index) => (
          <div className='my-[30px]' key={index}>
            <p className="title-color text-gray-700 font-semibold">{item.question}</p>
            <p>{item.answer}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Faqs
