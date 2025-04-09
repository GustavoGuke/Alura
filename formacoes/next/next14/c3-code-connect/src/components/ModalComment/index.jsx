// código omitido

import { IconButton } from "../IconButton"
import {MessageSquare} from ""
import { Modal } from "../Modal"
import { Chat } from "../icons/Chat"

export const ModalComment = () => {
    const modalRef = useRef(null)
    return (
        <>
            <Modal ref={modalRef}>
                <h1>Olá mundo!</h1>
            </Modal>
            <IconButton
                onClick={() => modalRef.current.openModal()}
            >
                <Chat />
            </IconButton>
        </>
    )
}