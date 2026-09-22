import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Products from './components/Products'
import WhyIndexia from './components/WhyIndexia'
import FeatureBanners from './components/FeatureBanners'
import HowItWorks from './components/HowItWorks'
import Footer from './components/Footer'
import BackToTop from './components/BackToTop'
import { useScrollReveal } from './hooks/useScrollReveal'

function App() {
  useScrollReveal()

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Products />
        <WhyIndexia />
        <FeatureBanners />
        <HowItWorks />
      </main>
      <Footer />
      <BackToTop />
    </>
  )
}

export default App
