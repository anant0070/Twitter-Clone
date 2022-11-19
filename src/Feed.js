import React,{useEffect, useState} from 'react'
import './Feed.css'
import TweetBox from './TweetBox'
import Post from './Post'
import {db} from './firebase'
import {collection,getDocs} from "firebase/firestore"
import FlipMove from 'react-flip-move'


function Feed() {
  const[posts,setPosts]=useState([]);
  const usersCollectionRef=collection(db,"posts");
  useEffect(()=>{
    const getPosts=async()=>{
      const data=await getDocs(usersCollectionRef);
      setPosts(data.docs.map((doc)=>({...doc.data(),id: doc.id})))
    }
    getPosts();
  },[posts])
  return (
    <div className='feed'>
        {/*Header*/}
        <div className='feed_header'>
            <h2>Home</h2>
        </div>
        {/*TWEET BOX*/}
        <TweetBox/>
        <FlipMove>
        {posts.map((post)=>(
            <Post
            key={post.text}
            displayName={post.displayName}
            userName={post.userName}
            verified={post.verified}
            text={post.text}
            avatar={post.avatar}
            image={post.image}
            />
        ))}
        </FlipMove>
    </div>
  )
}

export default Feed