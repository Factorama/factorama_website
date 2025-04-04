'use client'
import Footer from "@/components/footer";
import Header from "@/components/header";
import Body from "@/components/body";

export default function Home() {
  return (

    //<h1>{t('title')}</h1>
    <div className="flex flex-col items-center justify-items-center min-h-screen font-[family-name:var(--font-geist-sans)]">
      <main className="w-full flex flex-col gap-8">
        <Header />
        <Body />
      </main>
      <Footer />
    </div>
  );
}
