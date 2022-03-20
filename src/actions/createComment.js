import axios from 'axios'

export const createComment = async (comments, userID, postID) =>
  await axios.post(
    `http://localhost:5000/comment/${userID}/${postID}`,
    comments
  )
