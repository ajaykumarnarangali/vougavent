import { FileText, ChevronRight } from "lucide-react";
import qesd_img from "../../../../assets/products/EmiEmc/qsed/qesd_img.png";
import ground_cabl from "../../../../assets/products/EmiEmc/qsed/ground_cabl.jpg";
import air_discharge_imglat from "../../../../assets/products/EmiEmc/qsed/air_discharge_imglat.jpg";
import contact_discharge_imglat_new from "../../../../assets/products/EmiEmc/qsed/contact_discharge_imglat_new.jpg";

export default function ProductShowcase() {
  const products = [
    { image: qesd_img, title: "QESD-15A ESD simulator" },
    { image: ground_cabl, title: "Grounding cable" },
    { image: air_discharge_imglat, title: "Air discharge Tip" },
    { image: contact_discharge_imglat_new, title: "Contact discharge Tip" },
  ];

  const features = [
    "Micro USB charger cable",
    "Operating instruction manual",
    "6 Months warranty",
    "Optional: Horizontal Coupling Plane (Custom size)",
    "Optional: Rugged Plastic carry case",
    "Optional: Online Training via MS Teams or Zoom",
  ];

  const downloads = [
    { name: "Product Overview", link: "/files/QSED-15A.pdf" },
    { name: "IEC 61000-4-2 Setup drawing", link: "/files/SetupDrawing.pdf" },
  ];

  return (
    <div className="bg-gray-50 py-10 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Product Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {products.map((item, index) => (
            <div
              key={index}
              className="bg-white shadow-md p-4 rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300 flex flex-col items-center"
            >
              <div className="w-full flex justify-center items-center">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full max-h-[260px] object-contain cursor-pointer hover:scale-105 transition ease-in-out"
                />
              </div>
              <div className="p-4 text-center">
                <h2 className="text-black font-medium text-lg">{item.title}</h2>
              </div>
            </div>
          ))}
        </div>

        {/* Features and Downloads */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Features List */}
          <div>
            <ul className="space-y-2">
              {features.map((point, i) => (
                <li key={i} className="flex items-start gap-2">
                  <ChevronRight className="text-primary mt-1 w-5 h-5" />
                  <span className="text-gray-800">{point}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Downloads */}
          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-4">
              Downloads
            </h3>
            <div className="space-y-3">
              {downloads.map((file, i) => (
                <a
                  key={i}
                  href={file.link}
                  download={true}
                  className="flex items-center gap-3 bg-gray-200 hover:bg-gray-300 text-gray-900 px-4 py-2 rounded-md transition-colors duration-200"
                >
                  <FileText className="text-red-500 w-5 h-5" />
                  {file.name}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
