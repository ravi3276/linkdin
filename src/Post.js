import { Avatar } from '@material-ui/core'
import React, { forwardRef } from 'react'
import './Post.css';
import ThumbUpAltOutlinedIcon from '@material-ui/icons/ThumbUpAltOutlined';
import InputOption from './InputOption';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
import SendOutlinedIcon from '@material-ui/icons/SendOutlined';
import ShareOutlinedIcon from '@material-ui/icons/ShareOutlined';
const Post=forwardRef(({name,description,photoUrl,msg,timestamp},ref)=> {
    return (
        <div className="post" ref={ref}>
            <div className="post__header">
                <Avatar src={photoUrl}/>
                <div className="post__headerifo">
                    <h3>{name}
                    <span className="post__timestamp">{timestamp}</span>
                    </h3>
                    <p>{description}</p>
                </div>
            </div>

            <div className="post__body">
                <p>{msg}</p>
            </div>

            <div className="post__buttons">
                <InputOption Icon={ThumbUpAltOutlinedIcon} title="Like" color="gray"/>
                <InputOption Icon={ChatBubbleOutlineIcon} title="Comment" color="gray"/>
                <InputOption Icon={ShareOutlinedIcon} title="Share" color="gray"/>
                <InputOption Icon={SendOutlinedIcon} title="Send" color="gray"/>
            </div>
        </div>
    )
})

export default Post
