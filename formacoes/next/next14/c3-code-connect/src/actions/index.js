"use server"

import db from "../../prisma/db";
export async function incrementThumbsUp(postId) {
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
}