import Image from "next/image"
import logo from '../public/imagens/Logo.png'

export const Aside = () => {
    return (
        <aside>
            <Image src={logo} alt="LOGO"/>
        </aside>
    )
}