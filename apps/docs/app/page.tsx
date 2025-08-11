// apps/docs/app/page.tsx
import { GellyCard } from "@gelly-ui/core";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-900/80 to-black/80 text-white p-10 flex flex-col gap-16 items-center">
      {/* Hero Section */}
      <GellyCard className="text-center p-10 max-w-2xl">
        <h1 className="text-4xl font-bold mb-4">Welcome to <span className="text-blue-400">Gelly UI</span></h1>
        <p className="text-lg text-gray-300">
          A modern and elegant React component library with beautiful glassmorphism design.
        </p>
      </GellyCard>

      {/* Features Section */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl w-full">
        {[
          {
            title: "Reusable Components",
            desc: "Modular and composable UI components ready to drop into any project."
          },
          {
            title: "Modern Design",
            desc: "Built with sleek glassmorphism styles and Tailwind CSS."
          },
          {
            title: "Developer Friendly",
            desc: "TypeScript support, zero config, and well-documented."
          },
        ].map((feature, idx) => (
          <GellyCard key={idx} className="p-6">
            <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
            <p className="text-gray-300 text-sm">{feature.desc}</p>
          </GellyCard>
        ))}
      </section>

      {/* Footer */}
      <GellyCard className="text-sm text-center text-gray-400 py-4 px-6">
        Made with ❤️ using Gelly UI – © {new Date().getFullYear()}
      </GellyCard>
    </main>
  );
}
