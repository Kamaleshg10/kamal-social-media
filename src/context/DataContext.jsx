import React, { Children,createContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { format } from "date-fns";
import api from '../api/posts'
import UseWindowSize from '../hooks/UseWindowSize';
import UseAxiosFetch from '../hooks/UseAxiosFetch';


const DataContext = createContext({})

export const DataProvider = () => {
    const [posts, setPosts] = useState([]);    
  const [search, setSearch] = useState('');
  const [searchResult, setSearchResult] = useState([]);
  const [postTitle, setPostTitle] = useState('');
  const [postBody, setPostBody] = useState('');
  const [editTitle, setEditTitle] = useState('');
  const [editBody, setEditBody] = useState('');
  const navigate = useNavigate();
  const {width} = UseWindowSize()
  const {data,fetchError,isLoading } = UseAxiosFetch("http://localhost:3500/posts");

  useEffect(()=>{
    setPosts(data);
  },[data]);  

  useEffect(() => {
    const filteredResults = posts.filter((post)=>
      ((post.body).toLowerCase()).includes(search.toLowerCase()) ||
      ((post.title).toLowerCase()).includes(search.toLowerCase()));
      setSearchResult(filteredResults.reverse());
  }, [posts,search]);  

  const handleSubmit = async (e) => {
    e.preventDefault();
    const id  = posts.length ? posts[posts.length - 1].id + 1 : 1;
    const datetime = format(new Date(), 'MMMM dd, yyyy pp');
    const newPost = {id, title: postTitle,datetime,body:postBody};
    try{
    const response = await api.post('/posts',newPost)
    const allPosts = [...posts,response.data];
    setPosts(allPosts);
    setPostTitle('');
    setPostBody('');
    navigate('/');
    } catch (err) {
      if(err.response) {
        // Not in the 200 response range
        console.log(err.response.data);
        console.log(err.response.status);
        console.log(err.response.headers);
      } else {
        console.log(`Error : ${err.message}`);
      }
    }
  }

  const handleDelete = async (id) => {
    try{
      await api.delete(`/posts/${id}`)
      const postList = posts.filter(post => post.id !== id) ;
      setPosts(postList);    
      navigate('/');
    }catch (err) {
      if(err.response) {
        // Not in the 200 response range
        console.log(err.response.data);
        console.log(err.response.status);
        console.log(err.response.headers);
      } else {
        console.log(`Error : ${err.message}`);
      }
    }
  }

  const handleEdit = async (id) => {
    const datetime = format(new Date(), 'MMMM dd, yyyy pp');
    const updatePost = {id, title: editTitle,datetime,body:editBody};
    try{
    const response = await api.put(`/posts/${id}`,updatePost)
    // const allPosts = [...posts,response.data];
    setPosts(posts.map(post => post.id === id ? {...response.data} : post));
    setEditTitle('');
    setEditBody('');
    navigate('/');
    } catch (err) {
      if(err.response) {
        // Not in the 200 response range
        console.log(err.response.data);
        console.log(err.response.status);
        console.log(err.response.headers);
      } else {
        console.log(`Error : ${err.message}`);
      }
    }
  }

  return (
    <DataContext.Provider value={{
        width,
        search,setSearch,
        fetchError,isLoading,searchResult,
        handleSubmit,postTitle,setPostTitle,postBody,setPostBody,
        posts,handleDelete,
        handleEdit,editTitle,setEditTitle,editBody,setEditBody }} >
        {Children}
    </DataContext.Provider>
  )
}

export default DataContext;