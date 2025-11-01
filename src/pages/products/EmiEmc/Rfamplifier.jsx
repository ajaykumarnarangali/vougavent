import Banner from '../../../components/common/Banner'
import Banner_image from '../../../assets/products/EmiEmc/Rf_amplifier.webp'
import Hero from '../../../components/products/EmiEmc/RFAmplifier/Hero'
import Table from '../../../components/products/EmiEmc/RFAmplifier/Table'

function Rfamplifier() {
  return (
    <div className='bg-gray-50'>
      <Banner
        image_url={Banner_image}
        title={'RF Power amplifier'}
        content={'Vougavent RF Power amplifier is designed to use for EMC testing with wideband operating frequencies'}
      />
      <Hero />
      <Table />
    </div>
  )
}

export default Rfamplifier