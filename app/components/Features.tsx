import FeatureCard from "@/app/components/FeatureCard";
import Container from "./Container"

export default function Features() {
  return (
      <section className="py-16">
        <Container>
          <h2 className="text-3xl md:text-4xl font-bold text-center text-blue-300 mb-8">
            Why Choose ArchVision?
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <FeatureCard
              title="Real-time Insights"
              description="AI-powered data analysis for architectural projects."
            />
            <FeatureCard
              title="3D Visualizations"
              description="AI-generated 3D models to enhance project planning."
            />
            <FeatureCard
              title="Step-by-step Insights"
              description="Data-driven recommendations for architects."
            />
          </div>
        </Container>
      </section>
  );
}
