import som_image from '../../../../assets/products/IndustrialAutomation/Imx8MSOM.webp'

function Hero() {
  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 lg:px-0">
        <div
          className="bg-white border-2 border-gray-200 rounded-3xl shadow-lg overflow-hidden flex flex-col lg:flex-row items-center"
        >
          {/* --- Text Section --- */}
          <div className="flex-1 p-8 sm:p-10 space-y-6">
            <h1 className="text-2xl font-extrabold tracking-tight text-primary">
              NSM3200 iMX8M SOM
            </h1>

            <p className="text-gray-700 leading-relaxed text-base">
              The <strong>i.MX8</strong> is a series of application processors from
              <strong> NXP Semiconductors</strong> designed for use in a wide range of embedded systems.
              These processors are built on a <strong>64-bit ARM Cortex-A53 and Cortex-A72 architecture</strong>,
              providing high-performance computing with excellent power efficiency.
              <br /><br />
              <strong>Vougavent NSM3200 SOM</strong> is based on the i.MX8M and offers a compact yet powerful design.
              It’s built to be easily integrated into larger systems, enabling developers to
              <strong> quickly prototype and deploy</strong> their applications.
              <br /><br />
              This module features the <strong>i.MX8M</strong> processor, optimized for
              <strong> video analytics applications</strong>, and includes up to
              <strong> 4GB LPDDR4 RAM</strong> and <strong>64GB eMMC flash memory</strong>.
            </p>
          </div>

          {/* --- Image Section --- */}
          <div className="sm:w-1/2 w-full flex justify-center items-center bg-gray-50 p-6">
            <img
              src={som_image}
              alt="iMX8M SOM"
              className="max-w-full h-auto object-contain rounded-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
