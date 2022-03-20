import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Post from './Post'

const Feeds = () => {
  const [posts, setPosts] = useState([])

  const getAllPosts = async () => {
    const res = await axios.get('http://localhost:5000/post')
    console.log(res.data)
    setPosts(
      res.data.sort((p1, p2) => {
        return new Date(p2.createAt) - new Date(p1.createAt)
      })
    )
  }

  useEffect(() => {
    getAllPosts()
  }, [])

  return (
    <>
      {posts.map((post) => {
        return <Post key={post._id} {...post} />
      })}
    </>
  )
}

export default Feeds
