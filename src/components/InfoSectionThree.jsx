
import AnimatedBackground from "./AnimatedBackground";

export default function InfoSectionThree() {
  return (
    <section className="min-h-screen bg-gray-900 py-12 bg-img relative">
      {/* Sfondo Animato */}
        <AnimatedBackground numBalls={10} />

    </section>
  );
}
