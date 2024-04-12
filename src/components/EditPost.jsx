import React, { useContext, useEffect } from 'react'
import { Link,useParams } from 'react-router-dom'
import DataContext from '../context/DataContext';

export const EditPost = () => {
  const {posts,handleEdit,editTitle,setEditTitle,editBody,setEditBody} = useContext(DataContext);
  const {id} = useParams();
  const post =posts.find(post => (post.id).toString() === id);
  useEffect(() => {
    if(post){
        setEditTitle(post.title);
        setEditBody(post.body);
    }
  }, [post,setEditTitle,setEditBody])
  
  return (
    <>
    <main className='NewPost'>
        {editTitle &&
            <>            
            <h2>Edit post</h2>
            <form className="newPostForm" onSubmit={(e)=> e.preventDefault()} >
                <label htmlFor="postTitle">Title :</label>
                <input type="text" id='postTitle'  value={editTitle} onChange={(e)=>setEditTitle(e.target.value)} />
                <label htmlFor="postBody">Post : </label>
                <textarea type="text" id='postBody' required style={{height:'150px'}} value={editBody} onChange={(e)=>setEditBody(e.target.value)} />      
                <button type='submit' onClick={()=> handleEdit(post.id)}>Submit</button>
            </form>      
            </>
        }
        {!editTitle && 
          <>
            <h2>Page Not Found</h2>
            <p>Well, that's dissappointing</p>
            <p><Link to='/' >visit Our Homepage</Link></p>
          </>
        }
    </main>
    </>
  )
}
