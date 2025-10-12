import Logo from '../../assets/common/Logo.webp'
import { useCallback, useState } from "react";
import MobileNav from "./MobileNav";
import DescNav from "./DescNav";
import Modal from './Modal';
import productLinks from '../../data/header/ProductLinks'
import serviceLinks from '../../data/header/ServiceLinks'
import { Link } from 'react-router-dom';

function Header() {

  const [mobileOpen, setMobileOpen] = useState(false);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalData, setModalData] = useState(null);


  const handleModal = useCallback((key) => {
    if (modalData) {
      if (modalData?.type === key) {
        setModalData({});
        setIsModalOpen(false);
        return;
      }
    }
    if (key === 'services') {
      setModalData({ type: 'services', data: serviceLinks });
      setIsModalOpen(true);
    } else {
      setModalData({ type: 'products', data: productLinks });
      setIsModalOpen(true);
    }
  }, [modalData]);

  const handleModalClose = () => {
    setModalData({});
    setIsModalOpen(false);
  }

  return (
    <header className="bg-white w-full shadow-sm border-b z-50 border-gray-100 text-primary fixed font-helvetica">
      <div className="max-w-5xl xl:max-w-7xl flex justify-between mx-auto py-4 pe-4 items-center">
        {/* Logo */}
        <Link to={'/'}>
          <div className="flex-shrink-0">
            <img
              src={Logo}
              alt="Company Logo"
              className="h-8 md:h-10 lg:h-12 w-auto"
            />
          </div>
        </Link>
        <DescNav
          mobileOpen={mobileOpen}
          setMobileOpen={setMobileOpen}
          handleModal={handleModal}
        />
      </div>
      <MobileNav
        mobileOpen={mobileOpen}
        setMobileOpen={setMobileOpen}
        handleModal={handleModal}
      />
      {isModalOpen &&
        <Modal modalData={modalData} handleModalClose={handleModalClose} />
      }
    </header>
  )
}

export default Header