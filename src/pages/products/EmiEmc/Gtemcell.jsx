import Banner from '../../../components/common/Banner'
import Banner_image from '../../../assets/products/EmiEmc/gtem.webp'
import Hero from '../../../components/products/EmiEmc/GtemCell/Hero'

function Gtemcell() {
  return (
    <div className='bg-gray-50'>
      <Banner
        image_url={Banner_image}
        title={'GTEM Cell'}
        content={`GTEM (Giga Hertz Transverse Electromagnetic Cell) enables shield EMI-EMC measurement for Emission and Immunity.
        Vougavent designs and Manufactures custom GTEM cells which enable you for in-house validation and failure analysis.`}
      />
      <Hero/>
    </div>
  )
}

export default Gtemcell