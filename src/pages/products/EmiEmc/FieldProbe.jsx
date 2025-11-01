import Banner from '../../../components/common/Banner'
import Banner_image from '../../../assets/products/EmiEmc/field_prob.webp'

function FieldProbe() {
  return (
    <div className='bg-gray-50'>
      <Banner
        image_url={Banner_image}
        title={'Simplifying EMI EMC Trouble shooting'}
        content={'With Vougavent E Field and H Field probes'}
      />
    
    </div>
  )
}

export default FieldProbe