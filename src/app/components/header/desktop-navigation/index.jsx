"use client"

// IMPORT REACT HOOKS
import { useState } from "react"

// IMPORT NEXT COMPONENTS
import Link from "next/link"

// IMPORT REACT ICONS
import { IoIosArrowDown } from "react-icons/io"
import ButtonGreenOutline from "../../buttons/green-outline"

// DESKTOP NAVITGATION COMPONENT
export default function DesktopNavigation({ nav_links, button_data }) {

    // DROPDOWN USESTATE
    const [dropdownOpen, setDropdownOpen] = useState(null)

    // DROPDOWN FUNCTION
    const handleDropdown = (index) => {

        setDropdownOpen(dropdownOpen === index ? null : index)

    }

    return (

        <ul className="hidden md:flex items-center gap-6">
            {

                nav_links.map( ( links, index ) => (

                    <li key={ index } className="relative text-sm text-neutral-700">
                        <Link href={ links.link } onClick={() => links.sub_links.length > 0 && handleDropdown(index)}>
                            <div className="flex items-center gap-1">
                                { links.link_name }
                                {
                                
                                    links.sub_links.length > 0 && (

                                        <span className="text-sm text-neutral-700 pt-1">
                                            <IoIosArrowDown />
                                        </span>
                                        
                                    )
                                
                                }
                            </div>
                        </Link>

                        {/* DROPDOWN */}
                        {
                        
                            dropdownOpen === index && links.sub_links.length > 0 && (

                                <div className="absolute z-10 top-full right-0 mt-2 w-48 bg-white shadow-lg rounded-md">
                                    {
                                    
                                        links.sub_links.map( ( subLink, subIndex ) => (

                                            <Link
                                                key={ subIndex }
                                                href={ subLink.link }
                                                className="block px-4 py-2 hover:bg-gray-100"
                                            >
                                                { subLink.link_name }
                                            </Link>

                                        ))
                                    
                                    }
                                </div>

                            )
                        
                        }
                    </li>

                ))

            }
            {/* LOGIN SIGN UP BUTTON */}
            <Link href={ button_data.button_link }>
                <ButtonGreenOutline>{ button_data.button_text }</ButtonGreenOutline>
            </Link> 
        </ul>

    )

}
