import React from 'react';
import { Link, useParams } from 'react-router-dom'

 const Post = ({post}) => {
    const {id} = useParams()
  return (
        
      <article className='post'>
        <h1>post</h1>
        <Link to={`post/${post.id}`} >
          <h2>{post.title}</h2>
         <p className="postDate">{post.datetime}</p>
        </Link>
        <p className="postBody">
          {(post.body).length <= 25 ? post.body : `${post.body.slice(0,25)} `}
        </p>
        post {id}
      </article>
  )
}


export default Post;