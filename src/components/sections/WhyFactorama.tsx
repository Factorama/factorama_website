import { useTranslations } from "next-intl"
import SimpleButton from '@/components/ui/button'
import { useState } from "react"

const WhyFactorama = () => {
  const t = useTranslations('Section3')

  const [limit, setLimit] = useState("")
  const options = [30, 60, 90]

  return (
    <section className="w-full py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Contenido principal */}
      <div className="w-full flex flex-col items-center gap-8 py-3 relative z-10 px-4 sm:px-6 lg:px-8">
        <p className="title-color text-gray-700 font-semibold text-4xl sm:text-5xl text-center max-w-4xl my-8">
          {t('title')}
        </p>
        <div className="w-full flex items-center gap-8">
          {/* Sección izquierda */}
          <div className="w-3/5">
            <p className="text-gray-700 font-semibold text-lg mb-20">
              {t('description')}
            </p>
            <p className="text-gray-600 text-lg">
              {t('requirements')}
            </p>
          </div>
          {/* Sección derecha */}
          <div className="w-2/5">

            <div className="max-w-sm mx-auto p-6 bg-white rounded-xl shadow-md border border-gray-200">
              <h2 className="font-bold text-center text-gray-700 mb-6">{t('calculator')}</h2>

              <input
                type="text"
                placeholder="Ingresa un monto"
                className="w-full p-3 rounded-full border border-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-400 text-center mb-6"
              />

              <div className="mb-1 font-bold text-gray-900">{t('termTochose')}</div>
              <select
                value={limit}
                onChange={(e) => setLimit(e.target.value)}
                className="w-full p-3 rounded-full border border-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-700 mb-6"
              >
                <option disabled value="">{t('choseTerm')}</option>
                {options.map((days) => (
                  <option key={days} value={days}>
                    {days} {t('selectDays')}
                  </option>
                ))}
              </select>
              <div className="bg-emerald-400 text-white text-center p-6 rounded-2xl mb-6">
                <p>{t('resultForm')}:</p>
                <p className="text-2xl font-bold mt-2">$200.00</p>
              </div>
              <SimpleButton 
                height="sm:h-auto md:h-9 lg:h-11" 
                fontWeight="font-semibold" 
                fontColor="text-white" 
                color="button-main-lp" 
                borderRadius="rounded-2xl" 
                margin="mx-auto my-5" 
                fontSize="text-lg" 
                width="w-full" 
              >{t('buttonTitle')}</SimpleButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default WhyFactorama