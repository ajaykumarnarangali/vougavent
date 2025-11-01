import Banner from '../../../components/common/Banner'
import Banner_image from '../../../assets/products/EmiEmc/qesd.webp'
import Products from '../../../components/products/EmiEmc/Qesd/Products'
import Hero from '../../../components/products/EmiEmc/Qesd/Hero'

function Qesd() {
  return (
    <div className='bg-gray-50'>
      <Banner
        image_url={Banner_image}
        title={'ESD Simulator'}
        content={'Smart way to analyze ESD performance of your product'}
      />
      <Hero/>
      <Products/>
    </div>
  )
}

export default Qesd