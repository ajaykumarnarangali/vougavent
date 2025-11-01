import Banner from '../../../components/common/Banner'
import Banner_image from '../../../assets/home/carousel/emi_banner_2.webp'
import Accordion from '../../../components/common/Accordion'
import { IoTgatewayfaq } from '../../../data/products/IoTsolutions/IoTGateway'
import Table from '../../../components/products/IoTsolutions/IoTGateway/Table'
import ImageCard from '../../../components/products/IoTsolutions/IoTGateway/ImageCard'
import Hero from '../../../components/products/IoTsolutions/IoTGateway/Hero'
import Subsection from '../../../components/products/IoTsolutions/IoTGateway/Subsection'

function IoTGateway() {
  return (
    <div className='bg-gray-50'>
      <Banner
        image_url={Banner_image}
        title={'IoT Gateway (GW1000)'}
        content={`To meet the expectations of ever-growing requirement of market Vougavent has developed an IOT gateway GW1000 
        as the back bone of IOT solutions from us. This significantly reduces the time to market of our IOT solutions.`}
      />
      <Hero/>
      <ImageCard/>
      <Subsection/>
      <Table/>
      <div className="flex justify-center px-5 bg-gray-50">
        <div className='py-4 w-full max-w-7xl'>
          <Accordion faqData={IoTgatewayfaq} />
        </div>
      </div>
    </div >
  )
}

export default IoTGateway