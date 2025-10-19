import Banner from '../../components/common/Banner'
import Banner_image from '../../assets/services/safetyAnalysis/safetyAnalysis.jpg'
import Safety from '../../components/services/safetyComplience/Safety'

function SafetyCompliance() {
  return (
    <div>
      <Banner
        image_url={Banner_image}
        title={'Safety and Reliability Analysis'}
        content={'SIL Rated electronics devices'}
      />
      <Safety />
    </div>
  )
}

export default SafetyCompliance