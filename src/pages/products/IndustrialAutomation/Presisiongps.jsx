import Banner from '../../../components/common/Banner'
import Banner_image from '../../../assets/about/banner_image.jpg'
import Table from '../../../components/products/IndustrialAutomation/gpsreciever/Table'
import Hero from '../../../components/products/IndustrialAutomation/gpsreciever/Hero'


function Presisiongps() {
    return (
        <div>
            <Banner
                image_url={Banner_image}
                title={'Precision GPS receiver'}
                content={'Power of precision with Ublox Nina B3 with BLE'}
            />
            <Hero/>
            <Table/>
        </div>
    )
}

export default Presisiongps