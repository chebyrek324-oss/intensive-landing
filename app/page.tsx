'use client';
import { useEffect, useState } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import CompletionModal from '@/components/CompletionModal';
import AboutCourse from '@/components/AboutCourse';
import LessonsSection from '@/components/LessonsSection';
import BonusesSection from '@/components/BonusesSection';
import FinalCTA from '@/components/FinalCTA';
import FAQ from '@/components/FAQ';
import Footer from '@/components/Footer';
import {
  defaultProgress,
  loadProgress,
  saveProgress,
  type Progress,
} from '@/lib/progress';

export default function Page() {
  const [progress, setProgress] = useState<Progress>(defaultProgress);
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    setProgress(loadProgress());
    setHydrated(true);
  }, []);

  const update = (patch: Partial<Progress>) => {
    setProgress((prev) => {
      const next = { ...prev, ...patch };
      saveProgress(next);
      return next;
    });
  };

  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <AboutCourse />
      <LessonsSection
        progress={progress}
        update={update}
        hydrated={hydrated}
      />
      <BonusesSection unlocked={progress.bonusesUnlocked} />
      <FinalCTA />
      <FAQ />
      <Footer />
      <CompletionModal />
    </main>
  );
}
