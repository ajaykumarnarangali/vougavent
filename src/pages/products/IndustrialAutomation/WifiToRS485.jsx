import Banner from "../../../components/common/Banner"
import Banner_image from "../../../assets/about/banner_image.jpg"
import WifiModule from "../../../components/products/IndustrialAutomation/wifimodule/WifiModule"
function WifiToRs485() {
    return (
        <div>
            <Banner
                image_url={Banner_image}
                title={'MODBUS to Wi-Fi'}
                content={`Adding IoT Touch to legacy machines`
                }
            />
            <WifiModule />
        </div>
    )
}

export default WifiToRs485