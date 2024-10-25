// IMPUT COMPONENT
export default function InputField({ name, placeholder, icon }) {

    return (

        <div className="flex rounded-md overflow-hidden w-full">
            <div className="flex items-center px-4 justify-center bg-white">
                <span className="text-orange-500">{ icon }</span>
            </div>
            <input 
                type="text"
                name={ name }
                placeholder={ placeholder }
                className="py-3 w-full focus:outline-none text-sm"
            />
        </div>

    )

}
