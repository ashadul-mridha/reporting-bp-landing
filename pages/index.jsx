import Footer from '../components/Footer/Footer'
import Header from '../components/Header/Header'
import HeroSection from '../components/HomePage/HeroSection'

export default function Home() {
  return (
    <>
      <HeroSection />
    </>
  )
}

Home.getLayout = function getLayout(page) {
  return (
    <>
      <Header />
      {page}
      <Footer />
    </>
  )
}
