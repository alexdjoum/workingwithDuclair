import axios from 'axios'

export const createPost = async (post, userID) => {
  console.log('post ======> ', userID)
  console.log('post ======> ', post)
  await axios.post(`http://localhost:5000/post/${userID}`, post)
}
