import { Mail, Navigation } from 'lucide-react';
import Footer_Logo from '../../assets/common/Footer_Logo.webp'

function Footer() {
  return (
    <footer className='bg-primary flex flex-col gap-5 text-white py-10 md:py-14 px-14'>
      <div className='grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-0'>
        <div>
          <img
            src={Footer_Logo}
            alt="Footer Logo"
            className="w-24 sm:w-32 md:w-40 lg:w-36 h-auto"
          />
        </div>
        <div className='flex gap-4'>
          <div>
            <Navigation className='w-4' />
          </div>
          <div className="space-y-3">
            <h3 className="text-base font-bold">Our Address</h3>
            <div className='text-sm font-normal'>
              <p>Vougavent Technologies LLP,</p>
              <p>1489, 5th Cross, 29th Main Rd,</p>
              <p>Stage 2, BTM Layout,</p>
              <p>Bengaluru, Karnataka 560076</p>
            </div>
          </div>
        </div>
        <div className='flex gap-4'>
          <div>
            <Mail className='w-4' />
          </div>
          <div className="space-y-3">
            <h3 className="text-base font-bold">Contact Us</h3>
            <div className='text-sm font-normal'>
              <p>+91 80 56 637 776</p>
              <p>+91 88 48 024 289</p>
              <p>info@vougavent.com</p>
            </div>
          </div>
        </div>
      </div>
      <div className="text-center py-2">
        <p className={`text-sm text-gray-400`}>
          © 2025 Vougavent Technologies LLP. All Rights Reserved.
        </p>
      </div>
    </footer>
  )
}

export default Footer