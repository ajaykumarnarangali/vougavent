import { BrowserRouter, Routes, Route } from "react-router-dom";

import ScrollToTop from "./components/common/ScrollToTop";
import MainLayout from "./layout/MainLayout";
import Home from "./pages/common/Home";
import About from "./pages/common/About";
import Contact from "./pages/common/Contact";

import ProductDesign from './pages/services/ProductDesign'
import EmiEmcConsulting from './pages/services/EmiEmcConsulting'
import AntennaRfDesign from './pages/services/AntennaRfDesign'
import IotSolutions from './pages/services/IotSolutions'
import SafetyCompliance from './pages/services/SafetyCompliance'

import WifiToRs485 from "./pages/products/IndustrialAutomation/WifiToRS485";
import IndustrialDisplay from "./pages/products/IndustrialAutomation/IndustrialDisplay";

import Som from "./pages/products/IndustrialAutomation/Som";
import Presisiongps from "./pages/products/IndustrialAutomation/Presisiongps";
import IoTGateway from "./pages/products/IoTsolutions/IoTGateway";
import IoTDK from "./pages/products/IoTsolutions/IoTDK";

import Rfamplifier from "./pages/products/EmiEmc/Rfamplifier";
import Gtemcell from "./pages/products/EmiEmc/Gtemcell";
import FiedProbe from "./pages/products/EmiEmc/FieldProbe";
import Qesd from "./pages/products/EmiEmc/Qesd";
import Careers from "./pages/common/Careers";



function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <MainLayout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/career" element={<Careers />} />
          <Route path="/services">
            <Route path="electronic-product-design" element={<ProductDesign />} />
            <Route path="emi-emc-consulting" element={<EmiEmcConsulting />} />
            <Route path="antenna-rf-design" element={<AntennaRfDesign />} />
            <Route path="iot-solutions" element={<IotSolutions />} />
            <Route path="safety-compliance" element={<SafetyCompliance />} />
          </Route>
          <Route path="/products">
            <Route path="wifi-module" element={<WifiToRs485 />} />
            <Route path="precision-gps" element={<Presisiongps />} />
            <Route path="imx-8m-som" element={<Som />} />
            <Route path="industrial-display" element={<IndustrialDisplay />} />

            <Route path="IoT-gateway" element={<IoTGateway />} />
            <Route path="Lora-based-iot-multi-sensor-development" element={<IoTDK />} />

            <Route path="esd-simulator" element={<Qesd />} />
            <Route path="emi-emc-pre_compliance_near_field_probe" element={<FiedProbe />} />
            <Route path="gtem-cell" element={<Gtemcell />} />
            <Route path="Radio_frequency_amplifier" element={<Rfamplifier />} />
          </Route>
        </Routes>
      </MainLayout>
    </BrowserRouter>
  );
}

export default App;
