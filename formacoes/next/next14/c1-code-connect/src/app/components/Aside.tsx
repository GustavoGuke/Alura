import Image from "next/image"
import logo from '../public/imagens/Logo.png'

export const Aside = () => {
    return (
        <aside className="max-w-96 bg-slate-900 h-full py-10 px-4">
            <Image src={logo} alt="LOGO" />
        </aside>
    )
}