import React from 'react';
import { Button } from '@material-ui/core';
import './Post.css';
import { Link } from 'react-router-dom';

const Post = (props) => {
  const {title, id} = props.post;
    return (
        <div className='post'>
            <h2>Post- {id}: </h2>
            <h4>Title: {title}</h4>
            <Button variant="contained" href="/details" >
                <Link to={`/details/${id}`}>
                    See More...
                    </Link>
                </Button>
        </div>
    );
};

export default Post;