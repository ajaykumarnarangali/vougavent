import Banner from '../../components/common/Banner'
import Banner_image from '../../assets/common/career-banner.jpg'

function Careers() {
    return (
        <div className='bg-gray-50'>
            <Banner
                image_url={Banner_image}
                title={'Career'}
            />
            <div className="dark:bg-gray-900 py-12 px-6 rounded-xl shadow-md text-center">
                <h1 className="text-xl sm:text-3xl font-semibold text-primary dark:text-blue-400 mb-4">
                    Current Openings
                </h1>
                <p className="text-base  text-gray-700 dark:text-gray-300">
                    There are currently <span className="font-semibold text-primary dark:text-blue-400">no openings</span>.
                    Please check back later for new opportunities.
                </p>
            </div>

        </div>
    )
}

export default Careers