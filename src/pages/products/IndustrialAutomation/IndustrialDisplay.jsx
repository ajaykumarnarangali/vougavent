import Banner from '../../../components/common/Banner'
import Banner_image from '../../../assets/about/banner_image.jpg'

import Hero from '../../../components/products/IndustrialAutomation/industialdisplay/Hero'
import DisplayTable from '../../../components/products/IndustrialAutomation/industialdisplay/DisplayTable'

function IndustrialDisplay() {
  return (
    <div className='bg-gray-50'>
      <Banner
        image_url={Banner_image}
        title={'Industrial Display'}
        content={'Reliable HMI Interfaces from Vougavent'}
      />
      <Hero />
      <DisplayTable />
    </div>
  )
}

export default IndustrialDisplay