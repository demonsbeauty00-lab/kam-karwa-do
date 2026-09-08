import { Suspense } from "react";
import ConfirmationContent from "@/components/kaam-karwayein/ConfirmationContent";

export const metadata = {
  title: "Kaam Mil Gaya — Kaam Karwa Do",
};

export default function ConfirmationPage() {
  return (
    <main className="min-h-screen bg-paper">
      <Suspense fallback={null}>
        <ConfirmationContent />
      </Suspense>
    </main>
  );
}
