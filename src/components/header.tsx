import { ChartLine, Menu, X } from "lucide-react";
import SimpleButton from "./button";
import { useState, useEffect } from "react";
import { useTranslations } from "next-intl";

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const t = useTranslations('Header');
    // Cerrar menú al hacer clic fuera
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            const menu = document.getElementById('mobile-menu');
            const menuButton = document.getElementById('menu-button');
            if (menu && menuButton && !menu.contains(event.target as Node) && !menuButton.contains(event.target as Node)) {
                setIsMenuOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    return (
        <header className="fixed top-0 left-0 right-0 z-50 w-full bg-header-background/80 backdrop-blur-md py-4">
            <div className="container mx-auto">
                <div className="flex flex-row justify-between items-center">
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
                            id="menu-button"
                            className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            aria-label={isMenuOpen ? "Cerrar menú" : "Abrir menú"}
                        >
                            {isMenuOpen ? <X size={24} color="#2648f0" /> : <Menu size={24} color="#2648f0" />}
                        </button>
                    </div>
                </div>

                {/* Overlay para el menú móvil */}
                <div 
                    className={`fixed inset-0 bg-gradient-to-b from-black/20 to-black/40 backdrop-blur-[2px] transition-all duration-300 lg:hidden z-40 ${
                        isMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
                    }`}
                    onClick={() => setIsMenuOpen(false)}
                />

                {/* Menú móvil desplegable */}
                <div 
                    id="mobile-menu"
                    className={`lg:hidden fixed top-0 right-0 w-[80%] bg-white/95 backdrop-blur-md shadow-lg py-4 z-50 transform transition-all duration-300 ease-in-out ${
                        isMenuOpen ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'
                    }`}
                >
                    <nav className="flex flex-col">
                        <ul className="flex flex-col gap-4 px-6">
                            <li>
                                <a href="#" className="block py-2 hover:text-gray-600 transition-colors">¿Cómo Funciona?</a>
                            </li>
                            <li>
                                <a href="#" className="block py-2 hover:text-gray-600 transition-colors">Beneficios</a>
                            </li>
                            <li>
                                <a href="#" className="block py-2 hover:text-gray-600 transition-colors">Preguntas Frecuentes</a>
                            </li>
                            <li className="mt-4">
                                <SimpleButton 
                                    height="h-9" 
                                    fontWeight="font-semibold" 
                                    fontColor="text-white" 
                                    textMessage="Iniciar Sesión" 
                                    color="button-main-lp" 
                                    borderRadius="rounded-2xl" 
                                    padding="px-6 py-2" 
                                    fontSize="text-sm" 
                                    width="w-[200px]" 
                                    margin="mx-auto"
                                />
                            </li>
                        </ul>
                    </nav>
                </div>
                
            
            </div>
        </header>
    )
}
