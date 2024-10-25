// IMPORT COMPONENTS
import ButtonGreenBackground from "@/app/components/buttons/green-background"
import InputField from "@/app/components/input"

// IMPORT REACT ICONS
import { FaBriefcase, FaLocationDot } from "react-icons/fa6"

// HARDCODED DATA
const input_feild_data = [

    {

        name: "services",
        placeholder: "Search your required service here",
        icon: <FaBriefcase />,

    },
    {

        name: "location",
        placeholder: "Search your desired location here",
        icon: <FaLocationDot />,

    },

]

export default function SearchComponent(){

    return (

        <div className="flex flex-col md:flex-row items-center justify-center gap-2">
            {

                input_feild_data.map( ( data, index ) => (

                    <InputField
                        key={ index }
                        name={ data.name }
                        placeholder={ data.placeholder }
                        icon={ data.icon }
                    />

                ))

            }
            <ButtonGreenBackground>Submit</ButtonGreenBackground>
        </div>

    )

}
