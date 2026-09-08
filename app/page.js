import Header from "@/components/Header";
import Hero from "@/components/Hero";
import TaskCategories from "@/components/TaskCategories";
import TrustSection from "@/components/TrustSection";
import HowItWorks from "@/components/HowItWorks";
import ClosingMessage from "@/components/ClosingMessage";
import Footer from "@/components/Footer";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-paper">
      <Header />
      <Hero />
      <TaskCategories />
      <TrustSection />
      <HowItWorks />
      <ClosingMessage />
      <Footer />
    </main>
  );
}
