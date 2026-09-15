import { AISection } from './components/AISection'
import { ComingSoonCTA } from './components/ComingSoonCTA'
import { FeaturePreview } from './components/FeaturePreview'
import { Footer } from './components/Footer'
import { Hero } from './components/Hero'
import { IntroSection } from './components/IntroSection'
import { Navbar } from './components/Navbar'
import { TrustSection } from './components/TrustSection'

function App() {
  return (
    <>
      <a
        href="#top"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[60] focus:rounded-full focus:bg-[var(--color-ink)] focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-white"
      >
        İçeriğe atla
      </a>
      <Navbar />
      <main>
        <Hero />
        <IntroSection />
        <AISection />
        <FeaturePreview />
        <TrustSection />
        <ComingSoonCTA />
      </main>
      <Footer />
    </>
  )
}

export default App
