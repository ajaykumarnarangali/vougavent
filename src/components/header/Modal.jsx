import { Link } from "react-router-dom"
import { X } from "lucide-react"

function Modal({ modalData, handleModalClose }) {
    return (
        <div className={`
             fixed lg:absolute z-50
             top-0 left-0 lg:top-full lg:left-0
             w-full h-screen lg:h-fit 
             bg-white shadow-lg border border-gray-200 overflow-y-scroll md:overflow-y-hidden
             p-6 lg:p-4 transition-all duration-300 text-primary`}
        >
            <div className="flex justify-end lg:hidden">
                <X onClick={handleModalClose} />
            </div>
            {modalData && modalData?.data.length > 0 && (
                <div className="grid grid-cols-1 gap-2 md:grid-cols-3 lg:grid-cols-4">
                    {modalData.data.map((section) => (
                        <div key={section.id} className="mb-4">
                            <h3 className="text-base font-bold mb-2">{section.title}</h3>
                            <div className="space-y-1">
                                {section[modalData?.type].map((item) => (
                                    <div key={item.key}>
                                        <Link to={item?.path} className="text-sm font-normal cursor-pointer hover:text-blue-700">
                                            {item?.label}
                                        </Link>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div >
    )
}

export default Modal 