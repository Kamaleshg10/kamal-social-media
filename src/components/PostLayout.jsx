import React from 'react'
import { Link } from 'react-router-dom'

export const PostLayout = () => {
  return (
    <>
        <h1>post layout</h1>
        <Link to='/postpage/1' >Post1</Link>
        <Link to='/postpage/2' >Post2</Link>
        <Link to='/postpage/3' >Post3</Link>
        <Link to='/postpage/newpost' >NewPost</Link>
    </>
  )
}
