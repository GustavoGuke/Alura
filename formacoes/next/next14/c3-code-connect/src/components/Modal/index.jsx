"use client"

import { forwardRef, useImperativeHandle, useRef } from "react"
import styles from './modal.module.css'

export const Modal = forwardRef(({ children }, ref) => {
    const dialologRef = useRef(null)

    const closeModal = () => {
        dialologRef.current.close()
    }
    const openModal = () => {
        dialologRef.current.showModal()
    }


    useImperativeHandle(ref, () => {
        return {
            closeModal,
            openModal
        }
    })

    return (
        <dialog className={styles.dialog} ref={dialologRef}>
            <header className={styles.header}>
                <button onClick={closeModal}>
                    X
                </button>
            </header>
            {children}
        </dialog>
    )
})