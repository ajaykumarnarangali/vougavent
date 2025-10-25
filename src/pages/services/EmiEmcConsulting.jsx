import Banner from '../../components/common/Banner'
import Banner_image from '../../assets/services/antenaDesign/antenaDesign.jpg';
import Accordion from '../../components/common/Accordion'
import { EmiEmcfaqData } from '../../data/services/EmiEmc'
import ConsultTable from '../../components/services/consulting/ConsultTable';

function EmiEmcConsulting() {
  return (
    <div>
      <Banner
        image_url={Banner_image}
        title={'EMI-EMC Consulting'}
        content={`One stop destination for EMI-EMC Consulting and pre compliance solutions`
        }
        bg={false}
      />
        <ConsultTable />
      <div className="flex justify-center px-5 bg-gray-50">
        <div className='pb-4 w-full max-w-7xl'>
          <Accordion faqData={EmiEmcfaqData} />
        </div>
      </div>
    </div>
  )
}

export default EmiEmcConsulting