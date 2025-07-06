import { Facebook, Instagram, Twitter, Linkedin } from "lucide-react"
import { useTranslations } from "next-intl"


export default function Footer() {
    const t = useTranslations('Footer')
    return (
        <footer className="w-full bg-footer-background py-2">
            <div className="container mx-auto">
                <div className="mx-auto">
                    <div className="text-gray-700 flex flex-col md:flex-row md:justify-between gap-2">
                        <div className="px-2 align-top">
                            <h3 className="font-bold mb-1 text-xs">{t('contact')}</h3>
                            <ul className="space-y-0.5 block text-xs">
                                <li>
                                    <a href="mailto:info@example.com" className="hover:text-gray-900">info@example.com</a>
                                </li>
                                <li>
                                    <a href="tel:+1234567890" className="hover:text-gray-900">+1234567890</a>
                                </li>
                            </ul>
                        </div>
                        <div className="px-2 align-top">
                            <h3 className="font-bold mb-1 text-xs text-center">{t('social')}</h3>
                            <ul className="flex gap-5 flex-wrap">
                                <li>
                                    <a href="https://www.facebook.com/example" className="hover:text-gray-900 text-blue-600"><Facebook className="w-4 h-4" /></a>
                                </li>
                                <li>
                                    <a href="https://www.instagram.com/example" className="hover:text-gray-900 text-blue-600"><Instagram className="w-4 h-4" /></a>
                                </li>
                                <li>
                                    <a href="https://www.twitter.com/example" className="hover:text-gray-900 text-blue-600"><Twitter className="w-4 h-4" /></a>
                                </li>
                                <li>
                                    <a href="https://www.youtube.com/example" className="hover:text-gray-900 text-blue-600"><Linkedin className="w-4 h-4" /></a>
                                </li>
                            </ul>
                        </div>
                        <div className="px-2 align-top">
                            <h3 className="font-bold mb-1 text-xs">{t('legal')}</h3>
                            <ul className="space-y-0.5 block text-xs">
                                <li>
                                    <a href="/privacidad" className="hover:text-gray-900">{t('privacy')}</a>
                                </li>
                                <li>
                                    <a href="/terminos" className="hover:text-gray-900">{t('terms')}</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <div className="pt-1">
                <p className="text-center text-gray-600 text-[10px]">
                   Factorama SAPI de C.V. &copy; {new Date().getFullYear()}
                </p>
            </div>
        </footer>
    )
}