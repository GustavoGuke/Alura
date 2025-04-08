"use server"

import { revalidatePath } from "next/cache";
import db from "../../prisma/db";

export async function incrementThumbsUp(postId) {

    //await new Promise((resolve) => setTimeout(resolve, 1000))
    try { 
        await db.post.update({
            where: {
                id: postId.id
            },
            data: {
                likes: {
                    increment: 1
                }
            }
        })

    } catch (error) {
        console.log(error)
    }
    revalidatePath('/')
    revalidatePath(`/${db.post.slug}`)
}