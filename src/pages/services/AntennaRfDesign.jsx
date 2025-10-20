import Banner from '../../components/common/Banner'
import Banner_image from '../../assets/services/antenaDesign/antenaDesign.jpg';
import Accordion from '../../components/common/Accordion'
import { AntenafaqData } from '../../data/services/Antena'
import Design from '../../components/services/antenaDesign/Design';
import Hero from '../../components/services/antenaDesign/Hero';

function AntennaRfDesign() {
  return (
    <div>
      <Banner
        image_url={Banner_image}
        title={'Antenna and RF Design/consulting'}
        content={`Redefining Connectivity and Radar Sensing
                 Developing World class Electronics products with latest
                RF and Wireless technologies`
        }
        bg={false}
      />
      <Hero/>
      <Design />
      <div className="flex justify-center px-5">
        <div className='py-4 w-full max-w-7xl'>
          <Accordion faqData={AntenafaqData} />
        </div>
      </div>
    </div>
  )
}

export default AntennaRfDesign