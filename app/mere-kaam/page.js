import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MereKaamList from "@/components/kaam-karwayein/MereKaamList";
import MereKaamTitle from "@/components/kaam-karwayein/MereKaamTitle";

export const metadata = {
  title: "Mere Kaam — Kaam Karwa Do",
};

export default function MereKaamPage() {
  return (
    <main className="min-h-screen bg-paper flex flex-col">
      <Header />
      <div className="flex-1">
        <MereKaamTitle />
        <MereKaamList />
      </div>
      <Footer />
    </main>
  );
}
