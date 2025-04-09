"use client"

import { forwardRef, useImperativeHandle, useRef } from "react"
import styles from './modal.module.css'

export const Modal = forwardRef(({ children }, ref) => {
    const dialologRef = useRef(null)

    const closeModal = () => {
        dialologRef.current.close()
    }
    const openMOdal = () => {
        dialologRef.current.showModal()
    }


    useImperativeHandle(ref, () => {
        return {
            closeModal,
            openMOdal
        }
    })

    return (
        <dialog className={styles.dialog} ref={dialologRef}>
            <header className={styles.header}>
                <button>
                    X
                </button>
            </header>
        </dialog>
    )
})