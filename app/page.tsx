import Features from "@/app/components/Features";
import Header from "@/app/components/Header";
import Hero from "@/app/components/Hero";

export default function Home() {
  return (
    <div className="bg-[#0A192F] text-white">
      <Header />
      <Hero />
      <Features />
    </div>
  );
}
