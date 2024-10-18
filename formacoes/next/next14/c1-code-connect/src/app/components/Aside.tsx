import Image from "next/image"
import logo from '../public/imagens/Logo.png'

export const Aside = () => {
    return (
        <aside className=" bg-slate-900 py-10 px-4">
            <Image src={logo} alt="LOGO"/>
            test
        </aside>
    )
}