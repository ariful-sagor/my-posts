import React ,{useEffect, useState}from 'react';
import Post from '../Posts/Post';
import './Home.css';
import Details from '../details/Details';
import Time from '../time/Time';


const Home = () => {
    
  const [posts,setPost]=useState([]);

  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res=> res.json())
    .then(data=>{
      setPost(data); 
    })
  },[])
    
  return (
    <div>
      <Time></Time>
      <h1>Welcome to JSON Postzone</h1>
      <br />
      {
        posts.map(post=> <Post post={post}></Post>)
      }
      
      <Details posts={posts}></Details>
      

    </div>
    );
};

export 
default Home;