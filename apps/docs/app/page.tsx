// apps/docs/app/page.tsx
"use client";
import Link from 'next/link';
import { GellyButton, GellyCard, GellyHeroBanner, GellyBadge } from "@gelly-ui/core";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-purple-900 to-gray-900">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 backdrop-blur-md bg-black/20 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-400 to-purple-500 flex items-center justify-center">
                <span className="text-white font-bold text-sm">G</span>
              </div>
              <span className="text-2xl font-bold text-white">Gelly UI</span>
              <GellyBadge className="bg-gradient-to-r from-blue-500 to-purple-500">v1.0.0</GellyBadge>
            </div>
            
            <div className="flex items-center space-x-6">
              <Link 
                href="/example" 
                className="text-white/70 hover:text-white transition-all duration-300 px-4 py-2 rounded-lg hover:backdrop-blur-md hover:bg-white/10 hover:border hover:border-white/20"
              >
                Components
              </Link>
              <Link href="https://github.com/yourusername/gelly-ui" target="_blank">
                <GellyButton className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 border-0">
                  GitHub
                </GellyButton>
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 animate-pulse"></div>
        <div className="relative max-w-7xl mx-auto px-6 pt-20 pb-32">
          <div className="text-center">
            <div className="inline-flex items-center px-4 py-2 rounded-full backdrop-blur-md bg-white/10 border border-white/20 mb-8">
              <span className="text-sm text-white/80">✨ Now Available</span>
            </div>
            
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold text-white mb-6 tracking-tight">
              <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                Gelly UI
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-white/80 mb-12 max-w-3xl mx-auto leading-relaxed">
              Beautiful glassmorphic React components with smooth animations, 
              built for modern web applications
            </p>

            <div className="flex gap-6 justify-center flex-wrap">
              <Link href="/example">
                <GellyButton className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 border-0 text-lg px-8 py-4 transform hover:scale-105 transition-all duration-300">
                  View Components
                </GellyButton>
              </Link>
              <Link href="https://github.com/yourusername/gelly-ui" target="_blank">
                <GellyButton className="backdrop-blur-md bg-white/10 border border-white/30 hover:bg-white/20 text-lg px-8 py-4 transform hover:scale-105 transition-all duration-300">
                  GitHub
                </GellyButton>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-6">
        {/* Features Section */}
        <section className="py-20">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Why Choose Gelly UI?
            </h2>
            <p className="text-xl text-white/70 max-w-2xl mx-auto">
              Built with modern technologies for exceptional developer experience
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <GellyCard className="group p-8 hover:scale-105 transition-all duration-500 cursor-pointer border-0 bg-gradient-to-br from-white/10 to-white/5">
              <div className="text-4xl mb-6 group-hover:scale-110 transition-transform duration-300">🎨</div>
              <h3 className="text-2xl font-bold text-white mb-4">Glassmorphic Design</h3>
              <p className="text-white/80 leading-relaxed">
                Beautiful frosted glass effects with backdrop blur and transparency. 
                Perfect for modern, elegant user interfaces.
              </p>
            </GellyCard>

            <GellyCard className="group p-8 hover:scale-105 transition-all duration-500 cursor-pointer border-0 bg-gradient-to-br from-white/10 to-white/5">
              <div className="text-4xl mb-6 group-hover:scale-110 transition-transform duration-300">⚡</div>
              <h3 className="text-2xl font-bold text-white mb-4">Smooth Animations</h3>
              <p className="text-white/80 leading-relaxed">
                Fluid transitions and micro-interactions that delight users. 
                Carefully crafted to enhance user experience.
              </p>
            </GellyCard>

            <GellyCard className="group p-8 hover:scale-105 transition-all duration-500 cursor-pointer border-0 bg-gradient-to-br from-white/10 to-white/5">
              <div className="text-4xl mb-6 group-hover:scale-110 transition-transform duration-300">🔧</div>
              <h3 className="text-2xl font-bold text-white mb-4">TypeScript Ready</h3>
              <p className="text-white/80 leading-relaxed">
                Fully typed components with excellent IntelliSense support. 
                Built for modern development workflows.
              </p>
            </GellyCard>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-20">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center p-6 backdrop-blur-md bg-gradient-to-br from-blue-500/20 to-purple-500/20 border border-white/20 rounded-2xl">
              <div className="text-3xl font-bold text-white mb-2">35+</div>
              <div className="text-white/70">Components</div>
            </div>
            <div className="text-center p-6 backdrop-blur-md bg-gradient-to-br from-purple-500/20 to-pink-500/20 border border-white/20 rounded-2xl">
              <div className="text-3xl font-bold text-white mb-2">100%</div>
              <div className="text-white/70">TypeScript</div>
            </div>
            <div className="text-center p-6 backdrop-blur-md bg-gradient-to-br from-pink-500/20 to-red-500/20 border border-white/20 rounded-2xl">
              <div className="text-3xl font-bold text-white mb-2">∞</div>
              <div className="text-white/70">Responsive</div>
            </div>
            <div className="text-center p-6 backdrop-blur-md bg-gradient-to-br from-green-500/20 to-blue-500/20 border border-white/20 rounded-2xl">
              <div className="text-3xl font-bold text-white mb-2">A11y</div>
              <div className="text-white/70">Accessible</div>
            </div>
          </div>
        </section>

        {/* Installation Section */}
        <section className="py-20">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Get Started in Seconds
            </h2>
            <p className="text-xl text-white/70">
              Install and start building beautiful interfaces immediately
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="backdrop-blur-md bg-white/10 border border-white/20 rounded-2xl p-8 mb-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-bold text-white mb-4">📦 Installation</h3>
                  <div className="bg-black/40 rounded-lg p-4 font-mono text-sm">
                    <div className="text-green-400 mb-2"># npm</div>
                    <div className="text-white/80 mb-3">npm install @gelly-ui/core</div>
                    <div className="text-green-400 mb-2"># yarn</div>
                    <div className="text-white/80 mb-3">yarn add @gelly-ui/core</div>
                    <div className="text-green-400 mb-2"># pnpm</div>
                    <div className="text-white/80">pnpm add @gelly-ui/core</div>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-white mb-4">🚀 Usage</h3>
                  <div className="bg-black/40 rounded-lg p-4 font-mono text-sm">
                    <span className="text-blue-400">import</span>
                    <span className="text-white/80"> &#123; </span>
                    <span className="text-purple-400">GellyButton</span>
                    <span className="text-white/80">, </span>
                    <span className="text-purple-400">GellyCard</span>
                    <span className="text-white/80"> &#125;</span>
                    <span className="text-blue-400"> from</span>
                    <span className="text-green-400"> "@gelly-ui/core";</span>
                    <br /><br />
                    <span className="text-blue-400">export default function</span>
                    <span className="text-yellow-400"> App</span>
                    <span className="text-white/80">() &#123;</span>
                    <br />
                    <span className="text-blue-400 ml-2">  return</span>
                    <span className="text-white/80"> (</span>
                    <br />
                    <span className="text-red-400 ml-4">    &lt;GellyCard&gt;</span>
                    <br />
                    <span className="text-red-400 ml-6">      &lt;GellyButton&gt;</span>
                    <br />
                    <span className="text-white/80 ml-8">        Hello Gelly!</span>
                    <br />
                    <span className="text-red-400 ml-6">      &lt;/GellyButton&gt;</span>
                    <br />
                    <span className="text-red-400 ml-4">    &lt;/GellyCard&gt;</span>
                    <br />
                    <span className="text-white/80 ml-2">  );</span>
                    <br />
                    <span className="text-white/80">&#125;</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="text-center">
              <div className="flex gap-6 justify-center flex-wrap">
                <Link href="/example">
                  <GellyButton className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 border-0 text-lg px-8 py-4">
                    Explore All Components →
                  </GellyButton>
                </Link>
                <Link href="https://github.com/yourusername/gelly-ui" target="_blank">
                  <GellyButton className="backdrop-blur-md bg-white/10 border border-white/30 hover:bg-white/20 text-lg px-8 py-4">
                    View Documentation
                  </GellyButton>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-16 border-t border-white/10">
          <div className="text-center">
            <div className="flex justify-center items-center space-x-3 mb-4">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-400 to-purple-500 flex items-center justify-center">
                <span className="text-white font-bold text-sm">G</span>
              </div>
              <span className="text-xl font-bold text-white">Gelly UI</span>
            </div>
            <p className="text-white/60 mb-6">
              Built with ❤️ for the React community
            </p>
            <div className="flex justify-center space-x-6">
              <Link href="/example" className="text-white/60 hover:text-white transition-colors">
                Components
              </Link>
              <Link href="https://github.com/yourusername/gelly-ui" className="text-white/60 hover:text-white transition-colors">
                GitHub
              </Link>
              <Link href="#" className="text-white/60 hover:text-white transition-colors">
                Documentation
              </Link>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
