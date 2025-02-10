import { Button } from "@/components/ui/button";
import FeatureCard from "@/app/components/FeatureCard";

export default function Home() {
  return (
    <div className="bg-primary text-white">
      <header className="text-center py-20 px-6 max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold">ArchVision: AI-Powered Insights</h1>
        <p className="text-lg text-secondary mt-4">
          AI-driven analytics for architecture and construction projects.
        </p>
        <Button className="mt-6">Get Started</Button>
      </header>

      <section className="bg-secondary py-16 px-6 grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        <FeatureCard title="Real-time Insights" description="AI-powered data analysis for architectural projects." />
        <FeatureCard title="3D Visualizations" description="AI-generated 3D models to enhance project planning." />
        <FeatureCard title="Step-by-step Insights" description="Data-driven recommendations for architects." />
      </section>
    </div>
  );
}
