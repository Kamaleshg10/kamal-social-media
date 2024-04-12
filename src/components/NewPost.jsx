import React, { useContext } from 'react'
import DataContext from '../context/DataContext';

export const NewPost = () => {  
  const {handleSubmit,postTitle,setPostTitle,postBody,setPostBody} = useContext(DataContext);
  return (
    <main className='NewPost'>
      <h1>new post</h1>
      <form className="newPostForm" onSubmit={handleSubmit}>
        <label htmlFor="postTitle">Title :</label>
        <input type="text" id='postTitle' value={postTitle} onChange={(e)=>setPostTitle(e.target.value)} />
        <label htmlFor="postBody">Message </label>
        <textarea type="text" id='postBody' required style={{height:'150px'}} value={postBody} onChange={(e)=>setPostBody(e.target.value)} ></textarea>      
        <button className='submitButton' type='submit'>Submit</button>
      </form>      
    </main>
  )
}
