import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import LessonsSection from '@/components/LessonsSection';
import FAQ from '@/components/FAQ';
import Footer from '@/components/Footer';

export default function Page() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <LessonsSection />
      <FAQ />
      <Footer />
    </main>
  );
}
