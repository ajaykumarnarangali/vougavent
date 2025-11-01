import Banner from '../../../components/common/Banner'
import Banner_image from '../../../assets/products/EmiEmc/field_prob.webp'
import Hero from '../../../components/products/EmiEmc/Prob/Hero'
import Table from '../../../components/products/EmiEmc/Prob/Table'

import { H_Fied_Probes, Low_Noise_Pre_amp, E_Fied_Probes } from '../../../data/products/EmiEmc/field_prob'

function FieldProbe() {
  return (
    <div className='bg-gray-50'>
      <Banner
        image_url={Banner_image}
        title={'Simplifying EMI EMC Trouble shooting'}
        content={'With Vougavent E Field and H Field probes'}
      />
      <Hero />
      <Table title={'E Field EMI Near field Probes'} data={E_Fied_Probes} />
      <Table title={'H Field EMI Near field Probes'} data={H_Fied_Probes} />
      <Table title={'Low noise pre amplifier'} data={Low_Noise_Pre_amp} />
    </div>
  )
}

export default FieldProbe