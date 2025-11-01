import Banner from '../../../components/common/Banner'
import Banner_image from '../../../assets/about/banner_image.jpg'
import Hero from '../../../components/products/IoTsolutions/IoTDK/Hero'
import Tables from '../../../components/products/IoTsolutions/IoTDK/Tables'

function IoTDK() {
    return (
        <div>
            <Banner
                image_url={Banner_image}
                title={'LoRa based IoT'}
                content={'Development kit for faster turn around'}
            />
            <Hero/>
            <Tables/>
        </div>
    )
}

export default IoTDK