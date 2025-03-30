import Image from 'next/image'
import SimpleButton from '../button'

export default function HeroSection() {
  const handleStart = () => {
    // Aquí puedes agregar la lógica para vender factura
    console.log('Empieza ya');
  };


  return (
    <div className="w-full min-h-screen flex flex-col items-center justify-between py-16">
      {/* Contenido principal */}
      <div className="w-full flex flex-col items-center gap-8 py-8 relative z-10 px-4 sm:px-6 lg:px-8">
        <p className="text-gray-700 font-semibold text-4xl sm:text-5xl text-center max-w-4xl">
          Convierte tus facturas en liquidez inmediata
        </p>
        <div className="flex flex-col md:flex-col lg:flex-row items-center gap-6">
          <SimpleButton 
            height="sm:h-auto md:h-9 lg:h-11" 
            fontWeight="font-semibold" 
            fontColor="text-white" 
            textMessage="Empieza ya" 
            onClick={handleStart}
            color="button-main-lp" 
            borderRadius="rounded-2xl" 
            padding="px-8 py-3" 
            margin="mx-auto" 
            fontSize="text-lg" 
            width="w-full sm:w-[300px]" 
          />
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