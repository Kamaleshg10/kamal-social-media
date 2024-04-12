// import { useEffect, useState } from 'react';
import { About } from './components/About';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { Home } from './components/Home';
import { Missing } from './components/Missing';
import { Navbar } from './components/Navbar';
import { NewPost } from './components/NewPost';
import { EditPost } from './components/EditPost';
import { PostPage } from './components/PostPage';
import DataProvider from './context/DataContext';
import { Route,Routes } from 'react-router-dom';

// import { Post } from './components/Post';
// import { PostLayout } from './components/PostLayout';

function App() {
  return (
    <div className="App"> 
    <DataProvider>
      <Header title={'kamal social app'} />     
      <Navbar />      
      <Routes >
      <Route path='/' element={<Home />} />
      <Route path='/post' >
        <Route index element={<NewPost/> } />     
        <Route path=':id' element={<PostPage />} />      
       </Route>       
       <Route path='/edit/:id' element={<EditPost />} /> 
       <Route path='/about' element={<About />} />      
       <Route path='*' element={<Missing />} />
      </Routes>
      <Footer /> 
      </DataProvider>
    </div>
  );
}

export default App;




     