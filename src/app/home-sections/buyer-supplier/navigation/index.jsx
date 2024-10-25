"use client"

// IMPORT REACT HOOKS
import { useState } from "react"

// IMPORT REACT ICONS
import { FaCheckCircle } from "react-icons/fa"

// HARDCODED DATA
const data = {

    button_one: "Buyer",
    button_two: "Supplier",

}

// BUYER SUPPLIER NAV SECTION
export default function BuyerSupplierNav({ buyer_list, supplier_list }) {

    const [activeTab, setActiveTab] = useState("buyer")

    return (

        <div className="space-y-8">
            {/* Navigation Tabs */}
            <div className="flex items-center justify-center gap-4">
                <button
                    onClick={() => setActiveTab("buyer")}
                    className={`px-4 py-2 text-3xl font-semibold w-full ${
                        activeTab === "buyer" ? "text-orange-500 border-b-4 border-orange-500" : "text-white"
                    }`}
                >
                    { data.button_one }
                </button>
                <button
                    onClick={() => setActiveTab("supplier")}
                    className={`px-4 py-2 text-3xl font-semibold w-full ${
                        activeTab === "supplier" ? "text-orange-500 border-b-4 border-orange-500" : "text-white"
                    }`}
                >
                    { data.button_two }
                </button>
            </div>

            {/* Content for the Active Tab */}
            <ul className="space-y-2">
                {
                
                    ( activeTab === "buyer" ? buyer_list : supplier_list ).map( ( item, index ) => (

                        <li key={ index } className="text-white flex items-center">
                            <FaCheckCircle className="text-sm text-green-500 mr-2" />
                            { item }
                        </li>

                    ))
                
                }
            </ul>
        </div>

    )

}
