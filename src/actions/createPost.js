import axios from 'axios'

export const createPost = async (formData, userID, token) => {
  const config = {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  }

  console.log('token lio======> ', token)
  console.log(userID)
  //console.log('post ======> ', post)
  const res = await axios.post(`http://localhost:5000/post/${userID}`, formData)
  console.log('res------------>', res.data)
}
