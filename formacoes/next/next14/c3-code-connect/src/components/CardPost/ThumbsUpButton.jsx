"use client"
import { useFormStatus } from "react-dom"
import { IconButton } from "../IconButton"
import { ThumbsUp } from "../icons/ThumbsUp"
import Spinners from "../Spinners"

export const ThumbsUpButton = () => {
    const {pending } = useFormStatus()
    return (
        <IconButton disabled={pending}>
            {pending ? <Spinners /> : <ThumbsUp />}
        </IconButton>
    )
}