import React from 'react';
import { FaHandHoldingUsd, FaFileInvoiceDollar } from 'react-icons/fa';

const WhatsIs = () => {
  return (
    <section className="w-full py-24 bg-white">
      <div className="w-full">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
          <h2 className="text-gray-700 font-semibold text-4xl sm:text-5xl text-center mb-12">
            ¿Qué es Factorama?
          </h2>
          
          <p className="text-xl sm:text-2xl text-gray-600 text-center max-w-4xl mx-auto leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.
          </p>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Sección Inversionista */}
            <div className="flex flex-col items-center text-center p-8 bg-gray-50 rounded-2xl">
              <FaHandHoldingUsd className="text-blue-600 text-6xl mb-6" />
              <h3 className="text-2xl font-semibold text-gray-800 mb-6">Inversionista</h3>
              <p className="text-gray-600 text-lg">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
              </p>
            </div>

            {/* Sección Vendedor de Facturas */}
            <div className="flex flex-col items-center text-center p-8 bg-gray-50 rounded-2xl">
              <FaFileInvoiceDollar className="text-blue-600 text-6xl mb-6" />
              <h3 className="text-2xl font-semibold text-gray-800 mb-6">Vendedor de Facturas</h3>
              <p className="text-gray-600 text-lg">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatsIs;
