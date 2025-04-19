import Image from 'next/image'
import SimpleButton from '@/components/ui/button'
import { useTranslations } from "next-intl";

const HeroSection = () => {
  const handleStart = () => {
    
  };
  const t = useTranslations('Section1');

  return (
    <div className="w-full min-h-screen flex flex-col items-center justify-between py-16">
      {/* Contenido principal */}
      <div className="w-full flex flex-col items-center gap-8 py-8 relative z-10 px-4 sm:px-6 lg:px-8">
        <p className="title-color text-gray-700 font-semibold text-4xl sm:text-5xl text-center max-w-4xl">
        {t('title')}
        </p>
        <div className="flex flex-col md:flex-col lg:flex-row items-center gap-6">
          <SimpleButton 
            height="sm:h-auto md:h-9 lg:h-11" 
            fontWeight="font-semibold" 
            fontColor="text-white" 
            onClick={handleStart}
            color="button-main-lp" 
            borderRadius="rounded-2xl" 
            margin="mx-auto" 
            fontSize="text-lg" 
            width="w-full sm:w-[300px]" 
          >{t('button')}</SimpleButton>
        </div>
      </div>
      {/* Imagen */}
      <div className="w-full h-[50vh] relative px-4 sm:px-6 lg:px-8">
        <Image
          src="/images/features/persons.png"
          alt="Personas"
          fill
          className="object-contain"
          priority
        />
      </div>
    </div>
  )
} 

export default HeroSection