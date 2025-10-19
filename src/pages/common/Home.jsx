import Banner from '../../components/home/Banner'
import ServiceCard from '../../components/home/Services'
import PartnerSection from '../../components/home/PartnerSection'
import Products from '../../components/home/Products'
import RedefineSection from '../../components/home/RedefineSection'
import Contact from '../../components/home/Contact'
function Home() {
  return (
    <div>
      <Banner />
      <ServiceCard />
      <PartnerSection />
      <Products />
      <RedefineSection />
      <Contact />
    </div>
  )
}

export default Home