import ProbeImage from "../../../../assets/products/EmiEmc/fied_prob/EMINear-Field-Probe.jpg";

export default function EMIProbeCard() {
  return (
    <div className="bg-gray-50 lg:py-6 mt-10 px-4">
      <div className="max-w-7xl mx-auto border bg-white rounded-lg shadow-md p-6 lg:p-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
          
          {/* Left Section */}
          <div>
            <div className="space-y-2 mb-6">
              <div className="bg-primary text-white text-center py-3 px-4 rounded-md font-medium">
                Frequency coverage from 100 kHz to 3 GHz
              </div>
              <div className="bg-primary text-white text-center py-3 px-4 rounded-md font-medium">
                LNA for sensitive measurements
              </div>
              <div className="bg-primary text-white text-center py-3 px-4 rounded-md font-medium">
                Specially designed probe tips for various use cases
              </div>
            </div>

            <div className="flex justify-center">
              <img
                src={ProbeImage}
                alt="EMI Near Field Probe"
                className="w-full max-w-md object-contain"
              />
            </div>
          </div>

          {/* Right Section */}
          <div className="text-gray-700 leading-relaxed space-y-4">
            <p>
              <strong>EMI (Electromagnetic Interference)</strong> near field probes are used to
              detect and measure high frequency electromagnetic fields in the
              near field region of a device or system.
            </p>
            <p>
              Vougavent has designed them to capture and measure the
              electromagnetic radiations effectively with a broadband frequency
              response.
            </p>
            <p>
              The EMI near field probe can be used in a variety of applications,
              including in the testing and development of electronic devices, in
              the diagnosis of EMI problems, and in the design of EMI shielding.
            </p>
            <p>
              The EMI near field probe is an essential tool for anyone working
              in the field of electromagnetic compatibility, as it allows for
              the detection and measurement of high frequency electromagnetic
              fields in the near field region, and can be used to identify and
              locate sources of EMI which enable cost-effective EMC
              troubleshooting.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
