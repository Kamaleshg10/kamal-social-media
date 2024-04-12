import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import DataContext from '../context/DataContext';

export const Navbar = () => {  
  const {search,setSearch} = useContext(DataContext);
  return (
    <nav className='nav'>
      <form className="searchform" onSubmit={(e)=>e.preventDefault()}>
        <label htmlFor="search">Search post</label>
        <input type="text" id='search' placeholder='Search Posts' value={search} onChange={(e)=>setSearch(e.target.value)} />
      </form>
        <ul>
            <li><Link to='/' >Home</Link></li>
            <li><Link to='about' >About</Link></li>
            <li><Link to='post' >Post</Link></li>
        </ul>
    </nav>
  )
}
