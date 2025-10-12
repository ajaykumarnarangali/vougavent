import Header from "../components/header/Header"
import Footer from "../components/common/Footer"
import { Outlet } from "react-router-dom"
function MainLayout({children}) {
  return (
    <div className="w-full">
      <div className="h-16 md:h-[70px] lg:h-20 bg-red-200">
        <Header />
      </div>
      <main className="w-full min-h-screen">
        {children}
      </main>
      <Footer />
    </div>
  )
}

export default MainLayout