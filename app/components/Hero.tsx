import Link from "next/link";
import Image from "next/image";
import Container from "./Container";

export default function Hero() {
  return (
    <section className="relative bg-gradient-to-r from-[#0A192F] to-[#172A45] py-24 px-6 overflow-hidden">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-12">
          {/* Left Content */}
          <div className="text-center md:text-left animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-extrabold text-white leading-tight">
              AI-Powered <span className="text-blue-400">Architecture</span> Insights
            </h1>
            <p className="text-lg md:text-xl text-blue-300 max-w-2xl opacity-90 mt-4">
              Discover cutting-edge AI-driven solutions for architects and designers.
            </p>

            {/* CTA Buttons */}
            <div className="mt-8 flex justify-center md:justify-start gap-4">
              <Link
                href="/features"
                className="bg-blue-500 hover:bg-blue-600 text-white text-lg font-semibold py-4 px-8 rounded-lg transition transform hover:scale-105 shadow-md hover:shadow-blue-400/50"
              >
                Explore Features
              </Link>
              <Link
                href="/learn-more"
                className="border border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white text-lg font-semibold py-4 px-8 rounded-lg transition transform hover:scale-105"
              >
                Learn More
              </Link>
            </div>
          </div>

          {/* Right Side: 3D Illustration */}
          <div className="flex justify-center md:justify-end animate-fade-in delay-200">
            <Image
              src="/images/archvision-3d.png" // Replace with actual 3D illustration
              alt="ArchVision 3D"
              width={500}
              height={500}
              className="drop-shadow-xl"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
