import FormHeader from "@/components/kaam-karwayein/FormHeader";
import KaamKarwayeinForm from "@/components/kaam-karwayein/KaamKarwayeinForm";

export const metadata = {
  title: "Kaam Karwayein — Kaam Karwa Do",
};

export default function KaamKarwayeinPage() {
  return (
    <main className="min-h-screen bg-paper">
      <FormHeader
        titleKey="formHeader.title"
        subtitleKey="formHeader.subtitle"
      />
      <KaamKarwayeinForm />
    </main>
  );
}
