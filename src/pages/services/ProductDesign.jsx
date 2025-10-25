import Banner from '../../components/common/Banner'
import Banner_image from '../../assets/services/productDesign/productDesign.jpg';
import Pdesign from '../../components/services/productDesign/Pdesign';
import Hero from '../../components/services/productDesign/Hero';

function ProductDesign() {
    return (
        <div>
            <Banner
                image_url={Banner_image}
                title={'Electronic design services'}
                content={`Bring your product to Life with state of the art technology`
                }
            />
            <Hero/>
            <Pdesign/>
        </div>
    )
}

export default ProductDesign