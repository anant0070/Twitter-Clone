import React,{forwardRef} from 'react'
import './Post.css'
import {Avatar} from "@mui/material"
import { MdVerifiedUser } from "react-icons/md";
import { MdChatBubbleOutline } from "react-icons/md";
import {IoMdRepeat} from "react-icons/io";
import { AiOutlineHeart } from "react-icons/ai";
import {MdPublish} from "react-icons/md";

const Post=forwardRef(({
    displayName,
    userName,
    verified,
    text,
    image,
    avatar},ref)=> {
  return (
    <div className="post" ref={ref}>
        <div className='post_avatar'>
        <Avatar src={avatar}/>
        </div>
        <div className='post_body'>
            <div className='post_header'>
                <div className='post_headerText'>
                    <h3>
                        {displayName} {" "}
                    <span className='post_headerSpecial'>
                    {verified && <MdVerifiedUser className='post_badge inline-block'/>}@{userName}
                    </span>
                    </h3>
                </div>
                <div className='post_headerDescription'>
                    <p>{text}</p>

                </div>
            </div>
            <img src={image} alt=" " />
            <div className='post_footer'>
                <MdChatBubbleOutline className='text-sm'/>
                <IoMdRepeat className='text-sm'/>
                <AiOutlineHeart className='text-sm'/>
                <MdPublish className='text-sm'/>






            </div>
        </div>
    </div>
  );
});

export default Post