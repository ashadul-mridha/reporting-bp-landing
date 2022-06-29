import Footer from '../components/Footer/Footer'
import FreeTrail from '../components/FreeTrail/FreeTrail'
import Header from '../components/Header/Header'
import HeroSection from '../components/HomePage/HeroSection'
import VideoFeature from '../components/HomePage/VideoFeature'
import PartnerSlider from '../components/Partner/PartnerSlider'

export default function Home() {
  return (
    <>
      <HeroSection />
      <PartnerSlider />
      <VideoFeature />
      <FreeTrail />
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
