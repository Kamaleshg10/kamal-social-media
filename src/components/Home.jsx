import React, { useContext } from 'react'
import { Feed } from './Feed'
import DataContext from '../context/DataContext';

export const Home = () => {
  const { searchResult,fetchError,isLoading} = useContext(DataContext);
  return (
    <main className='Home'>
      <h2>Home</h2>
      {isLoading && <p className='statusMsg'>Loading Posts...</p>}
      {!isLoading && fetchError && <p className='statusMsg' style={{color:'red'}}>{fetchError}</p>}
      {!isLoading && !fetchError && (searchResult.length ? <Feed posts={searchResult} /> : <p className='statusMsg'>No posts to display.</p>)}
    </main>
  )
}
