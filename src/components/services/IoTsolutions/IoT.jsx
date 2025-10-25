import cloud from '../../../assets/services/IoT/cloud.jpg'
import gateway from '../../../assets/services/IoT/gateway.png'
import Card from './Card'

const IoT = () => {
  return (
    <section className="md:py-12 px-6 md:px-20 bg-gray-50">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12">

        {/* Left Column */}
        <div>
          <div className="space-y-4 mb-6">
            <div className="bg-primary text-white px-4 py-2  text-center font-semibold">
              Off the shelves modules
            </div>
            <div className="bg-primary text-white px-4 py-2  text-center font-semibold">
              Flexible RF Protocol and operating frequencies
            </div>
            <div className="bg-primary text-white px-4 py-2  text-center font-semibold">
              Ultra low power nodes with longer battery life
            </div>
          </div>

          <p className="text-gray-700 mb-4">
            VougaVent has developed powerful IoT modules which enable implementing turnkey solutions based on the customer requirements.
          </p>
          <p className="text-gray-700 mb-4">
            To meet the expectations of ever-growing requirement of market. Out of the shelf IoT platforms act as a backbone for solutions from us. This significantly reduces the time to market of our IoT solutions.
          </p>
          <p className="text-gray-700 mb-4">
            Our IoT platforms are highly agile solution with support of various RF protocol and Internet protocol (MQTT, HTTP) based on the customer requirement.
          </p>

          <img
            src={cloud}
            alt="IoT Architecture"
            className="mt-8 w-full rounded shadow"
          />
        </div>

        {/* Right Column */}
        <div>
          <img
            src={gateway}
            alt="IoT Architecture"
            className="w-full mb-4 rounded shadow"
          />
          <Card />
        </div>
      </div>
    </section>
  );
};

export default IoT;
