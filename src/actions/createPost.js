import axios from 'axios'

export const createPost = async (formData, userID, token) => {
  const config = {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  }

  console.log('token ======> ', token)
  //console.log('post ======> ', post)
  await axios.post(`http://localhost:5000/post/${userID}`, formData)
}
