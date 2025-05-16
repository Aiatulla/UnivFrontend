
import clsx from "clsx"
interface InputProps {
    label?: string
    text?: string
    placeholder?: string
    type: "text" | "password"
    isRequired?: boolean
    inputClassName?: string;
    labelClassName?: string;
}

export const CustomInput = ({ label, text, placeholder, type, isRequired , inputClassName}: InputProps) => {
    return (
        <div className="flex flex-col items-start">
            <label className="block mb-2 text-sm text-gray-800 font-medium">{label}</label>
            <input className={clsx(`w-full px-4 py-3 text-base border border-[#e0e0e0] rounded-lg bg-[rgba(245, 245, 245, 0.5)`, inputClassName)} type={type} placeholder={placeholder} required={isRequired}/>
        </div>
    )
}