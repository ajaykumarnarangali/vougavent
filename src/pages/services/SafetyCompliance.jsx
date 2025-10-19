import Banner from '../../components/common/Banner'
import Banner_image from '../../assets/services/safetyAnalysis/safetyAnalysis.jpg'
import Design from '../../components/services/antenaDesign/Design'

function SafetyCompliance() {
  return (
    <div>
      <Banner
        image_url={Banner_image}
        title={'Safety and Reliability Analysis'}
        content={'SIL Rated electronics devices'}
      />
      <Design />
    </div>
  )
}

export default SafetyCompliance