import React from 'react'
import './Sidebar.css'
import { HiHome } from "react-icons/hi";
import { HiSearch } from "react-icons/hi";
import { IoIosNotificationsOutline } from "react-icons/io";
import { MdEmail } from "react-icons/md";
import { BsBookmark } from "react-icons/bs";
import { FaRegListAlt } from "react-icons/fa";
import { MdPermIdentity } from "react-icons/md";
import { MdOutlineMoreHoriz } from "react-icons/md";
import { BsTwitter } from "react-icons/bs";
import {Button} from "@mui/material"
import SidebarOption from './SidebarOption';
function Sidebar() {
  return (
    <div className=''>
      <BsTwitter className='sidebar_twitterIcon' />
      <SidebarOption active Icon={<HiHome className='text-[20px] ml-[20px]' />} text="Home" />
      <SidebarOption Icon={<HiSearch className='text-[20px] ml-[20px]' />} text="Explore" />
      <SidebarOption Icon={<IoIosNotificationsOutline className='text-[20px] ml-[20px]' />} text="Notifications" />
      <SidebarOption Icon={<MdEmail className='text-[20px] ml-[20px]' />} text="Messages" />
      <SidebarOption Icon={<BsBookmark className='text-[20px] ml-[20px]' />} text="Bookmarks" />
      <SidebarOption Icon={<FaRegListAlt className='text-[20px] ml-[20px]' />} text="Lists" />
      <SidebarOption Icon={<MdPermIdentity className='text-[20px] ml-[20px]' />} text="Profile" />
      <SidebarOption Icon={<MdOutlineMoreHoriz className='text-[20px] ml-[20px]' />} text="More" />
      {/*Button tweet*/}
      <Button variant="outlined" className='sidebar_tweet' fullWidth>Tweet</Button>


    </div>
  )
}

export default Sidebar