"use server"

import { revalidatePath } from "next/cache";
import db from "../../prisma/db";
export async function incrementThumbsUp(postId) {
    try { 
         await new Promise(resolve => setTimeout(resolve, 1000))
        await db.post.update({
            where: {
                id: post.id
            },
            data: {
                likes: {
                    increment: 1
                }
            }
        })

        revalidatePath('/')
        revalidatePath(`/${post.slug}`)

    } catch (error) {
        console.log(error)
    }
}