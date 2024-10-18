import Image from "next/image"

type Props = {
    name?: string
    imageSrc: string
}

export const Avatar = ({name, imageSrc}: Props) => {
    return (
    <ul className="m-0 p-0 flex justify-center gap-2 font-bold " >
        <li>
            <Image src={imageSrc} alt="" width={32} height={32}/>
        </li>
        <li>
            @{name}
        </li>
    </ul>)
}