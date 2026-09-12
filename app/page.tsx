import AtrayaScene from "@/components/AtrayaScene";
import HomeSections from "@/components/HomeSections";
import "@fontsource-variable/manrope";

export default function Home() {
  return (
    <main lang="pt-BR" style={{ fontFamily: '"Manrope Variable", sans-serif' }} className="min-w-0 flex-1 bg-[#050c14] text-[#e7eae6]">
      <AtrayaScene />
      <HomeSections />
    </main>
  );
}
