"use client"
import { useFormStatus } from "react-dom"
import { IconButton } from "../IconButton"
import { ThumbsUp } from "../icons/ThumbsUp"
import { Spinner } from "../spinner"

export const ThumbsUpButton = () => {
    const {pending} = useFormStatus()
    return (
        <IconButton disabled={pending}>
            {
                pending 
                ? <Spinner />
                : <ThumbsUp />
            }
        </IconButton>
    )
}