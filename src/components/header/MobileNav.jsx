import React from "react"
import { Link } from "react-router-dom"
import navLinks from "../../data/header/Navlinks"
import { ChevronDown, X } from "lucide-react"


function MobileNav({ mobileOpen, setMobileOpen, handleModal }) {
    return (
        <>
            <div
                className={`lg:hidden fixed top-0 left-0 h-full w-64 bg-white shadow-lg border-r border-gray-200 transform transition-transform duration-300 z-40 ${mobileOpen ? "translate-x-0" : "-translate-x-full"
                    }`}
            >
                {/* Close button inside drawer */}
                <div className="flex justify-end p-4">
                    <X
                        className="h-6 w-6 text-primary cursor-pointer"
                        onClick={() => setMobileOpen(false)}
                    />
                </div>

                <nav className="flex flex-col space-y-4 px-6 py-4 font-semibold">
                    {navLinks.map((link) =>
                        link.isLink ? (
                            <Link
                                key={link.key}
                                to={link.path}
                                className="text-base nav-item"
                                onClick={() => setMobileOpen(false)}
                            >
                                {link.label}
                            </Link>
                        ) : (
                            <div
                                key={link.key}
                                className="flex items-center justify-between cursor-pointer"
                                onClick={() => { handleModal(link.key) }}
                            >
                                <span className="text-base">{link.label}</span>
                                <ChevronDown className="ml-1 h-4 w-4 transform group-hover:rotate-180 transition-transform duration-200" />
                            </div>
                        )
                    )}
                </nav>
            </div>
            {mobileOpen && <div className="fixed inset-0 bg-black/50 z-30"></div>}
        </>
    )
}

export default React.memo(MobileNav);