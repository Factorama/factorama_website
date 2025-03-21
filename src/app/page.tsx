import Image from "next/image";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <Image
          className="dark:invert"
          src="/next.svg"
          alt="Next.js logo"
          width={180}
          height={38}
          priority
        />
        <ol className="list-inside list-decimal text-sm/6 text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
          <li className="mb-2 tracking-[-.01em]">
            Get started by editing{" "}
            <code className="bg-black/[.05] dark:bg-white/[.06] px-1 py-0.5 rounded font-[family-name:var(--font-geist-mono)] font-semibold">
              src/app/page.tsx
            </code>
            .
          </li>
          <li className="tracking-[-.01em]">
            Save and see your changes instantly.
          </li>
        </ol>

        <div className="flex gap-4 items-center flex-col sm:flex-row">
          <a
            className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:w-auto"
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              className="dark:invert"
              src="/vercel.svg"
              alt="Vercel logomark"
              width={20}
              height={20}
            />
            Deploy now
          </a>
          <a
            className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 w-full sm:w-auto md:w-[158px]"
            href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Read our docs
          </a>
        </div>
      </main>
      <footer className="row-start-3 flex flex-col w-full bg-gray-200 py-8">
        <div className="container mx-auto">
          <table className="mx-auto mb-8">
            <tr className="text-gray-700">
              <td className="px-8">
                <h3 className="font-bold mb-4">Información de contacto</h3>
                <ul className="space-y-2">
                  <li>
                    <a href="mailto:info@example.com" className="hover:text-gray-900">info@example.com</a>
                  </li>
                  <li>
                    <a href="tel:+1234567890" className="hover:text-gray-900">+1234567890</a>
                  </li>
                </ul>
              </td>
              <td className="px-8">
                <h3 className="font-bold mb-4">Síguenos en redes sociales</h3>
                <ul className="space-y-2">
                  <li>
                    <a href="https://www.facebook.com/example" className="hover:text-gray-900">Facebook</a>
                  </li>
                  <li>
                    <a href="https://www.instagram.com/example" className="hover:text-gray-900">Instagram</a>
                  </li>
                  <li>
                    <a href="https://www.twitter.com/example" className="hover:text-gray-900">Twitter</a>
                  </li>
                </ul>
              </td>
              <td className="px-8">
                <h3 className="font-bold mb-4">Legales</h3>
                <ul className="space-y-2">
                  <li>
                    <a href="/privacidad" className="hover:text-gray-900">Aviso de privacidad</a>
                  </li>
                  <li>
                    <a href="/terminos" className="hover:text-gray-900">Términos y condiciones</a>
                  </li>
                </ul>
              </td>
            </tr>
          </table>
        </div>
        
        <div className="border-t border-gray-300 pt-4 mt-4">
          <p className="text-center text-gray-600">
            &copy; {new Date().getFullYear()} Todos los derechos reservados.
          </p>
        </div>
      </footer>
    </div>
  );
}
