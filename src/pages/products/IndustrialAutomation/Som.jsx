import Banner from '../../../components/common/Banner';
import Banner_image from '../../../assets/home/carousel/emi_banner_1.webp'
import Hero from '../../../components/products/IndustrialAutomation/imxsom/Hero';
import SomTable from '../../../components/products/IndustrialAutomation/imxsom/SomTable';
import Subsection from '../../../components/products/IndustrialAutomation/imxsom/Subsection';

function Som() {
    return (
        <div className='bg-gray-50'>
            <Banner
                image_url={Banner_image}
                title={ 'iMX Based SOM' }
                content={'High-performance embedded system for modern applications'}
            />
            <Hero />
            <SomTable />
            <Subsection/>
        </div>
    )
}

export default Som