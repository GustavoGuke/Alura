'use client'
 
 import { useState } from 'react'
 import styles from './replies.module.css'
import { Comment } from '../Comment'
import { ReplyModal } from '../ModalReply'
 
 export const Replies = ({comment}) => {
    console.log(comment.children)
     const [showReplies, setShowReplies] = useState(false)
 
     return (<div className={styles.container}>
 
         <div className={styles.replies}>
             <button 
                 className={styles.btn} 
                 onClick={() => setShowReplies(!showReplies)}
             >
                 {showReplies ? 'Ocultar' : 'Ver'} respostas
             </button>
             {
                showReplies && <ul>
                    {
                        comment.children.map(reply => {
                        return <li>
                            <Comment comment={reply} />
                            <ReplyModal comment={reply}/>
                        </li>})
                    }
                </ul>
             }
         </div>
     </div>)
 }