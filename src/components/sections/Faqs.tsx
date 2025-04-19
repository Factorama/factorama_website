import React from 'react';
import { useTranslations } from "next-intl";

const Faqs = () => {
  const t = useTranslations('Section5');

  return (
    <section className="w-full py-24">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
          <h2 className="title-color text-gray-700 font-semibold text-4xl sm:text-5xl text-center mb-12">
            {t('title')}
          </h2>
        </div>
        <div className='my-[30px]'>
          <p className="title-color text-gray-700 font-semibold">¿Cómo puedo acceder a los fondos rápidamente?</p>
          <p>Una vez que tus facturas son aprobadas, el proceso de liberación de fondos es 
            ágil y sin complicaciones. Puedes contar con la liquidez que necesitas en poco tiempo</p>
        </div>
        <div className='my-[30px]'>
          <p className="title-color text-gray-700 font-semibold">¿Hay algún costo oculto o cargos adicionales?</p>
          <p>Aceptamos facturas verificables de cualquier sector. Solo necesitas que tus facturas estén respaldadas por empresas confiables y con plazos de pago claros.</p>
        </div>
        <div className='my-[30px]'>
          <p className="title-color text-gray-700 font-semibold">¿Cómo puedo asegurarme de que mi inversión es segura?</p>
          <p>Trabajamos con un proceso de verificación rigurosa de las facturas, garantizando que las empresas que reciban financiamiento sean confiables y transparentes.</p>
        </div>
      </div>
    </section>
  );
};

export default Faqs