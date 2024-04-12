import React, { useContext } from 'react'
import { Link,useParams } from 'react-router-dom'
import DataContext from '../context/DataContext';

export const PostPage = () => {
  const {posts,handleDelete} = useContext(DataContext);
  const {id} = useParams();
  const post =posts.find(post => (post.id).toString() === id);
  return (
    <main className='PostPage'>
      <article className="post">
        {post && 
          <>
            <h2>{post.title}</h2>
            <p className="postDate">{post.postdate}</p>
            <p className="postBody">{post.postbody}</p>            
            <Link to={`/edit/${post.id}`}><button className='editButton' >Edit Post</button></Link>
            <button className='deleteButton' onClick={()=>handleDelete(post.id)}>Delete Post</button>
          </>
        }
        {!post && 
          <>
            <h2>Page Not Found</h2>
            <p>Well, that's dissappointing</p>
            <p><Link to='/' >visit Our Homepage</Link></p>
          </>
        }
      </article>
    </main>
  )
}
