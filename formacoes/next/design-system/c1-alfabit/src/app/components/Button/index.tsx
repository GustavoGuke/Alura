type ButtonProps = {
    children: React.ReactNode,
} & React.ButtonHTMLAttributes<HTMLButtonElement>

export default function Button({ children, className }: ButtonProps) {
    return (
        <button className={`
    bg-[#2d5bff] rounded-[8px] px-[32px] py-[12px] text-white font-bold ${className}`}>
            {children}
        </button>
    )
}
