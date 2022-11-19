import React from 'react'
import "./Widgets.css"
import { HiSearch } from "react-icons/hi";
import {
  TwitterTimelineEmbed,
  TwitterShareButton,
  TwitterTweetEmbed
} from 'react-twitter-embed'
function Widgets() {
  return (
    <div className='widgets'>
      <div className='widgets_input' >
        <HiSearch className='widget_searchIcon'/>
        <input placeholder='Search Twitter' type="text"/>
      </div>
      <div className='widgets_widgetContainer'>
        <h2>Whats's happening</h2>
        <TwitterTweetEmbed tweet id={"1593650246223073282"}/>
        <TwitterTimelineEmbed 
        sourceType='profile'
        screenName='PrimeVideoIN'
        options={{height:580}}/>
         <TwitterShareButton
          url={"https://www.facebook.com/PrimeVideoIN/"}
          options={{ text: "#mirzapur kb aaega", via: "PrimeVideoIN" }}
        />
      </div>
    </div>
  )
}

export default Widgets