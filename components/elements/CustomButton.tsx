import clsx from "clsx";

export interface ButtonProps {
    children: React.ReactNode;
    onClick?: () => void
    type?: "button" | "submit"
    buttonClassName?: string;
}

export const CustomButton = ({ children, onClick, type, buttonClassName } : ButtonProps) => {
    return (
        <button className={clsx(`cursor-pointer w-full bg-[#0d6efd] hover:bg-[#0b5ed7] text-white border-none p-[7px] font-[500] rounded-[8px] mt-[10px] transition-all duration-300 ease-in-out shadow-[0_4px_12px_rgba(94,53,177,0.2)] hover:`, buttonClassName)} type={type} onClick={onClick}>
            {children}
        </button>
    )
}