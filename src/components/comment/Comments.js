import React,{useEffect, useState} from 'react';
import './Comments.css'
import { Avatar } from '@material-ui/core';

const Comments = (props) => {
    const {name,id,email, body} = props.post;
    const [pic,setPic]=useState([]);

    useEffect(()=>{
        fetch(`https://jsonplaceholder.typicode.com/photos/${id}`)
        .then(res=> res.json())
        .then(data=>{
            setPic(data); 
        })
    },[])
    return (
        
        <div className="comments">
            <Avatar alt="Remy Sharp" src={pic.url} />
            <h4>Name: {name}</h4>
            <h5>Email: {email}</h5>
            <p>Comment: <br />{body}</p> 
        </div>
       
    );
};
    


export default Comments;