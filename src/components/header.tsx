import { ChartLine, Menu } from "lucide-react";
import SimpleButton from "./button";
import { useState } from "react";

export default function Header() {
const [isMenuOpen, setIsMenuOpen] = useState(false);
    return (
        <header className="fixed top-0 left-0 right-0 z-50 w-[80%] bg-header-background py-4 mx-auto">
            <div className="container mx-auto">
            <div className="flex flex-row justify-between items-center mb-8">
                    <div className="flex items-center">
                        <a href="#" className="flex items-center gap-2">
                            <ChartLine color="#2648f0" absoluteStrokeWidth />
                            <span className="font-semibold text-xl">Factorama</span>
                        </a>
                    </div>

                    {/* Menú para pantallas grandes */}
                    <nav className="hidden lg:flex items-center py-4">
                        <ul className="flex gap-8">
                            <li><a href="#" className="hover:text-gray-600">¿Cómo Funciona?</a></li>
                            <li><a href="#" className="hover:text-gray-600">Beneficios</a></li>
                            <li><a href="#" className="hover:text-gray-600">Preguntas Frecuentes</a></li>
                        </ul>
                    </nav>

                    <div className="flex items-center gap-4">
                        {/* Botón de inicio de sesión - solo visible en desktop */}
                        <div className="hidden lg:block">
                            <SimpleButton 
                                height="h-9"
                                fontWeight="font-semibold"
                                fontColor="text-white"
                                textMessage="Iniciar Sesión"
                                color="button-main-lp"
                                borderRadius="rounded-2xl"
                                padding="px-6 py-2"
                                fontSize="text-sm"
                                width="w-auto"
                            />
                        </div>
                        
                        {/* Botón de menú para móvil/tablet */}
                        <button 
                            className="lg:hidden"
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                        >
                            <Menu size={24} color="#2648f0" />
                        </button>
                    </div>
                </div>

                {/* Menú móvil desplegable */}
                {isMenuOpen && (
                    <div className="lg:hidden absolute top-full left-0 right-0 w-full bg-white shadow-lg py-4 z-50">
                        <nav className="flex flex-col">
                            <ul className="flex flex-col gap-4 px-6">
                                <li><a href="#" className="hover:text-gray-600">¿Cómo Funciona?</a></li>
                                <li><a href="#" className="hover:text-gray-600">Beneficios</a></li>
                                <li><a href="#" className="hover:text-gray-600">Preguntas Frecuentes</a></li>
                                <li><SimpleButton height="h-9" fontWeight="font-semibold" fontColor="text-white" textMessage="Iniciar Sesión" color="button-main-lp" borderRadius="rounded-2xl" padding="px-6 py-2" fontSize="text-sm" width="w-full" /></li>
                            </ul>
                        </nav>
                    </div>
                )}
                
                {/* Contenido principal - siempre visible */}
                <div className="flex flex-col items-center gap-4">
                    <p className="text-gray-700 font-semibold text-3xl text-center my-2">
                        Convierte tus facturas en liquidez inmediata
                    </p>
                    <div className="flex flex-col md:flex-col lg:flex-row items-center gap-4">
                        <SimpleButton 
                            height="sm:h-auto md:h-9 lg:h-11" 
                            fontWeight="font-semibold" 
                            fontColor="text-white" 
                            textMessage="Vende tu factura" 
                            onClick="" 
                            color="button-main-lp" 
                            borderRadius="rounded-2xl" 
                            padding="px-4 py-2" 
                            margin="mx-auto" 
                            fontSize="text-md" 
                            width="w-full lg:w-50" 
                        />

                        <SimpleButton 
                            height="sm:h-auto md:h-9 lg:h-11" 
                            fontWeight="font-semibold" 
                            fontColor="text-white" 
                            textMessage="Invierte ahora" 
                            onClick="" 
                            color="button-main-lp" 
                            borderRadius="rounded-2xl" 
                            padding="px-4 py-2" 
                            margin="mx-auto" 
                            fontSize="text-md" 
                            width="w-full lg:w-50" 
                        />
                    </div>
                </div>
            </div>
        </header>
    )
}
