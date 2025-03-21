export default function Header() {
    return (
        <header className="fixed top-0 left-0 right-0 z-50 w-full bg-header-background py-4 shadow-md">
            <div className="container mx-auto">
                <nav className="flex justify-between items-center px-8">
                    <div className="flex items-center space-x-4">
                        <p className="text-gray-700 font-bold text-xl">Convierte tus facturas en liquidez inmediata</p>
                    </div>
                </nav>
            </div>
        </header>
    )
}
