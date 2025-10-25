import Banner from '../../components/common/Banner'
import Banner_image from '../../assets/services/antenaDesign/antenaDesign.jpg';
import Accordion from '../../components/common/Accordion'
import { EmiEmcfaqData } from '../../data/services/EmiEmc'
import ConsultTable from '../../components/services/consulting/ConsultTable';
import Hero from '../../components/services/consulting/Hero';
import Services from '../../components/services/consulting/Services';
import Subsection from '../../components/services/consulting/Subsection';

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
      <Hero />
      <Services />
      <Subsection />
      <div class="bg-gray-50 py-8">
        <div class="max-w-7xl mx-auto px-6 text-center space-y-4">
          <p class="text-gray-700 text-base leading-relaxed">
            At VougaVent, we are committed to providing our customers with the highest quality EMI-EMC consulting services.
            Our team of experienced experts and state-of-the-art testing equipment ensure that your electronic devices and systems meet EMI and EMC compliance requirements.
          </p>
        </div>
      </div>
      <div class="bg-gray-50 py-4 sm:py-6 md:py-8">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-start space-y-4">
          <h2 class="text-2xl sm:text-3xl md:text-4xl font-semibold text-primary">
            Standards and Specifications
          </h2>
        </div>
      </div>
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