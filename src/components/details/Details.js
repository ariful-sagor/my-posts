import React,{useEffect,useState} from 'react';
import { useParams } from 'react-router-dom';
import Comments from '../comment/Comments';
import './Details.css'

const Details = (props) => {
    
    const {postId} = useParams();
    const [comment,setComment]=useState([]);

    useEffect(()=>{
        fetch(`https://jsonplaceholder.typicode.com/comments?postId=${postId}`)
        .then(res=> res.json())
        .then(data=>{
            setComment(data); 
        })
    },[])
    const [detailsPost,setDetailsPost]=useState([]);

    useEffect(()=>{
        fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
        .then(res=> res.json())
        .then(data=>{
            setDetailsPost(data); 
        })
    },[])
    
        
    return (
        <div>
            <h1>Details of Post-{postId}</h1> 
            <br />
            <div className="post">
                <h3>Title: {detailsPost.title}</h3>
                <p>=> <br/>{detailsPost.body}</p>
                <br/><br/>
            </div>
            <h1>Comments on Post-{postId}</h1> 

            {
                comment.map(comment=> <Comments post={comment}></Comments>)
            }
        </div>
        );
};



export default Details;