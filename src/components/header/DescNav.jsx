import React from "react"
import { Link } from "react-router-dom"
import { ChevronDown, Menu } from "lucide-react"
import navLinks from "../../data/header/Navlinks"

function DescNav({ mobileOpen, setMobileOpen, handleModal }) {
    return (
        <>
            {/* navbar item for larger screens */}
            <nav className="hidden lg:flex text-primary space-x-8 font-bold">
                {navLinks.map((link) =>
                    link.isLink ? (
                        <Link
                            key={link.key}
                            to={link.path}
                            className="relative text-base cursor-pointer nav-item"
                        >
                            {link.label}
                        </Link>

                    ) : (
                        <div key={link.key}
                            className="flex items-center group cursor-pointer relative"
                            onClick={() => { handleModal(link.key) }}
                        >
                            <span
                                className="relative text-base nav-item"
                            >
                                {link.label}
                            </span>
                            <ChevronDown className="ml-1 h-4 w-4 transform group-hover:rotate-180 transition-transform duration-200" />
                        </div>
                    )
                )}
            </nav>
            {/* Hamburger menu for small screens */}
            {!mobileOpen && <div className="lg:hidden cursor-pointer">
                <Menu className="h-6 w-6 text-primary"
                    onClick={() => { setMobileOpen(prev => !prev) }} />
            </div>}
        </>
    )
}

export default React.memo(DescNav);