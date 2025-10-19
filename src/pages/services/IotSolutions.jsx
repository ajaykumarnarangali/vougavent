import Banner from '../../components/common/Banner'
import Banner_image from '../../assets/services/IoT/IoT.jpg'
import IoT from '../../components/services/IoTsolutions/IoT'
import TableData from '../../components/services/IoTsolutions/TableData'

function IotSolutions() {
  return (
    <div>
      <Banner
        image_url={Banner_image}
        title={'IOT solutions'}
        content={`Redefining Connectivity and Radar Sensing
           Developing World class Electronics products 
           with latest RF and Wireless technologies`}
        bg={true}
      />
      <IoT />
      <TableData />
    </div>
  )
}

export default IotSolutions