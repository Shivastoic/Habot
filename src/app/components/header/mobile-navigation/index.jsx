"use client"

// REACT HOOKS IMPORT
import { useState } from "react"

// IMPORT NEXT COMPONENTS
import Link from "next/link"

// IMPORT REACT ICONS
import { IoIosArrowDown, IoIosMenu, IoIosClose } from "react-icons/io"
import ButtonGreenOutline from "../../buttons/green-outline"

// MOBILE NAVIGATION COMPONENT
export default function MobileNavigation({ nav_links, button_data }) {

    // STATES FOR MENU AND DROPDOWN
    const [menuOpen, setMenuOpen] = useState(false)
    const [dropdownOpen, setDropdownOpen] = useState(null)

    // TOGGLE MENU FUNCTION
    const toggleMenu = () => {

        setMenuOpen(!menuOpen)
        setDropdownOpen(null)

    }

    // TOGGLE DROPDOWN FUNCTION
    const handleDropdown = (index) => {

        setDropdownOpen(dropdownOpen === index ? null : index)

    }

    return (

        <div className="md:hidden z-30">
            {/* HAMBURGER ICON */}
            <button onClick={ toggleMenu } className="text-3xl">
                <IoIosMenu />
            </button>

            {/* SLIDE-IN MENU */}
            <div className={`fixed top-0 right-0 max-w-64 w-full px-4 pt-16 h-full bg-white shadow-lg transition-transform transform ${menuOpen ? "translate-x-0" : "translate-x-full"}`}>
                {/* HAMBURGER ICON */}
                <button onClick={ toggleMenu } className="absolute top-4 right-4 text-3xl">
                    <IoIosClose />
                </button>
                <ul className="flex flex-col items-start gap-6">
                    {
                    
                        nav_links.map( ( links, index ) => (

                            <li key={ index } className="relative w-full text-sm text-neutral-700">
                                <div
                                    onClick={() => links.sub_links.length > 0 && handleDropdown(index)}
                                    className="flex items-center gap-2 w-full"
                                >
                                    <Link href={ links.link }>
                                        { links.link_name }
                                    </Link>
                                    {
                                    
                                    links.sub_links.length > 0 && (

                                        <IoIosArrowDown className={`transition-transform ${dropdownOpen === index ? "rotate-180" : "rotate-0"}`} />

                                    )
                                    
                                    }
                                </div>

                                {/* DROPDOWN LINKS */}
                                {
                                
                                    dropdownOpen === index && links.sub_links.length > 0 && (

                                        <div className="flex flex-col gap-3 px-2 mt-3">
                                            {
                                            
                                                links.sub_links.map( ( subLink, subIndex ) => (

                                                    <Link
                                                        key={ subIndex }
                                                        href={ subLink.link }
                                                        className="text-neutral-600 hover:text-neutral-800"
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
            </div>
        </div>

    )

}
