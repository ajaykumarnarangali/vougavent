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

import WifiToRs485 from "./pages/products/IndustrialAutomation/WifiToRs485";
import IndustrialDisplay from "./pages/products/IndustrialAutomation/IndustrialDisplay";

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <MainLayout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/services">
            <Route path="electronic-product-design" element={<ProductDesign />} />
            <Route path="emi-emc-consulting" element={<EmiEmcConsulting />} />
            <Route path="antenna-rf-design" element={<AntennaRfDesign />} />
            <Route path="iot-solutions" element={<IotSolutions />} />
            <Route path="safety-compliance" element={<SafetyCompliance />} />
          </Route>
          <Route path="/products">
            <Route path="wifi-module" element={<WifiToRs485 />} />
            <Route path="precision-gps" element={<SafetyCompliance />} />
            <Route path="imx-8m-som" element={<SafetyCompliance />} />
            <Route path="industrial-display" element={<IndustrialDisplay />} />
          </Route>
        </Routes>
      </MainLayout>
    </BrowserRouter>
  );
}

export default App;
