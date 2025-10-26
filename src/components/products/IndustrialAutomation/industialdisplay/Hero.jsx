import image_url from "../../../../assets/products/IndustrialAutomation/Display-for-charging-station.webp";

function Hero() {
  return (
    <div className="bg-gray-50 flex items-center justify-center p-6 sm:p-10">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 w-full max-w-7xl">
        {/* LEFT SECTION */}
        <div className="space-y-8 lg:col-span-2">
          <p className="text-gray-700 text-base leading-relaxed">
            <strong className="text-primary">Vougavent ID-HD001 </strong>
            An Industrial display platform developed for quick customization of
            customer requirements. Running on Linux, the platform includes
            multiple features to suit various applications.
          </p>
          <p className="text-gray-700 text-base leading-relaxed">
            High-bright, sunlight-readable and low-power consumption display
            technologies offer the highest quality LCDs for specific industrial
            applications. Our embedded LCDs can be manufactured in open-frame,
            VESA-mount, or fully enclosed housings for demanding environments.
          </p>

          <h4 className="text-xl font-bold text-primary mt-5">
            APPLICATIONS
          </h4>

          {/* Applications Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-4">
            {[
              "Electric Charging Stations",
              "HMI Display",
              "KIOSK",
              "Vending Machine",
              "Industrial Automation",
            ].map((app, i) => (
              <div
                key={i}
                className="p-2 bg-white border text-sm font-semibold border-gray-200 rounded-lg text-primary text-center cursor-pointer shadow-sm hover:shadow-md transition"
              >
                {app}
              </div>
            ))}
          </div>

          {/* Feature Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-12">
            {["IP65 Rated", "Easy Integration", "High Surge Immunity"].map(
              (item, i) => (
                <div
                  key={i}
                  className="p-4 bg-primary text-white rounded-xl shadow-md hover:shadow-lg transition text-center"
                >
                  <h5 className="font-bold text-base">{item}</h5>
                </div>
              )
            )}
          </div>
        </div>

        {/* RIGHT SIDE CARD */}
        <div className="flex justify-center lg:justify-end items-start">
          <div className="bg-white shadow-xl rounded-2xl overflow-hidden w-full lg:max-w-md">
            <div className="relative">
              <img
                src={image_url}
                alt="Industrial Display"
                className="w-full h-72 object-cover rounded-t-2xl cursor-pointer transition-transform duration-300 hover:scale-105"
              />
              {/* <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent rounded-t-2xl"></div> */}
            </div>
            <div className="p-6 space-y-3">
              <h3 className="text-xl font-semibold text-primary">
                Best suited for exterior installation like Charging Stations
              </h3>
              <p className="text-gray-600 text-base leading-relaxed">
                Our displays are specially designed to perform in harsh
                environments. The device meets IP65 standards and offers
                excellent surge immunity for long-lasting reliability.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
