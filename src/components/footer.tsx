import { Facebook, Instagram, Twitter, Linkedin } from "lucide-react"
export default function Footer() {
    return (
        <footer className="row-start-3 flex fixed bottom-0 flex-col w-[80%] bg-footer-background py-8">
            <div className="container mx-auto">
                <div className="mx-auto mb-4">
                    <div className="text-gray-700 flex flex-col gap-8">
                        <div className="px-8 align-top">
                            <h3 className="font-bold mb-4">Información de contacto</h3>
                            <ul className="space-y-2 block">
                                <li>
                                    <a href="mailto:info@example.com" className="hover:text-gray-900">info@example.com</a>
                                </li>
                                <li>
                                    <a href="tel:+1234567890" className="hover:text-gray-900">+1234567890</a>
                                </li>
                            </ul>
                        </div>
                        <div className="px-8 align-top">
                            <h3 className="font-bold mb-4">Síguenos en redes</h3>
                            <ul className="flex gap-4 flex-wrap">
                                <li>
                                    <a href="https://www.facebook.com/example" className="hover:text-gray-900"><Facebook /></a>
                                </li>
                                <li>
                                    <a href="https://www.instagram.com/example" className="hover:text-gray-900"><Instagram /></a>
                                </li>
                                <li>
                                    <a href="https://www.twitter.com/example" className="hover:text-gray-900"><Twitter /></a>
                                </li>
                                <li>
                                    <a href="https://www.youtube.com/example" className="hover:text-gray-900"><Linkedin /></a>
                                </li>
                            </ul>
                        </div>
                        <div className="px-8 align-top">
                            <h3 className="font-bold mb-4">Legales</h3>
                            <ul className="space-y-2 block">
                                <li>
                                    <a href="/privacidad" className="hover:text-gray-900">Aviso de privacidad</a>
                                </li>
                                <li>
                                    <a href="/terminos" className="hover:text-gray-900">Términos y condiciones</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <div className="pt-4">
                <p className="text-center text-gray-600">
                   Factorama SAPI de C.V. &copy; {new Date().getFullYear()} Todos los derechos reservados.
                </p>
            </div>
        </footer>
    )
}