import axios from 'axios'
import React, { useState } from 'react'
import { format } from 'timeago.js'
import Comment from './Comment'

const Post = ({ _id, img, desc, createdAt, likes }) => {
  const [like, setLike] = useState(likes.length)
  const [isLiked, setIsLiked] = useState(false)
  const [isShow, setIsShow] = useState(false)

  const userID = JSON.parse(window.localStorage.getItem('user'))._id

  const handleLike = () => {
    try {
      axios.patch(`https://localhost:5000/post/${_id}`, { id: userID })
    } catch (error) {
      console.log(error)
    }
    setLike(isLiked ? like - 1 : like + 1)
    setIsLiked(!isLiked)
  }

  return (
    <>
      <div className='card social-timeline-card'>
        <div className='card-header'>
          <div className='d-flex justify-content-between align-items-center'>
            <div className='d-flex justify-content-between align-items-center'>
              <div className='mr-2'>
                <img
                  className='rounded-circle'
                  width='45'
                  src='https://bootdey.com/img/Content/avatar/avatar2.png'
                  alt=''
                />
              </div>
              <div className='ml-2'>
                <div className='h5 m-0 text-blue'>@JaneSmith</div>
                <div className='h7 text-muted'>Miracles Lee Cross</div>
              </div>
            </div>
            <div>
              <div className='dropdown'>
                <button
                  className='btn btn-link dropdown-toggle'
                  type='button'
                  id='gedf-drop1'
                  data-toggle='dropdown'
                  aria-haspopup='true'
                  aria-expanded='false'
                >
                  <i className='fa fa-ellipsis-h'></i>
                </button>
                <div
                  className='dropdown-menu dropdown-menu-right'
                  aria-labelledby='gedf-drop1'
                >
                  <div className='h6 dropdown-header'>Configuration</div>
                  <a className='dropdown-item' href='#'>
                    Save
                  </a>
                  <a className='dropdown-item' href='#'>
                    Hide
                  </a>
                  <a className='dropdown-item' href='#'>
                    Report
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='card-body'>
          <div className='text-muted h7 mb-2'>
            {' '}
            <i className='fa fa-clock-o'></i> {format(createdAt)}
          </div>
          <a className='card-link' href='#'>
            <h5 className='card-title'>
              {' '}
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit
              consectetur deserunt illo esse distinctio.
            </h5>
          </a>
          <p className='card-text'>{desc}</p>
          {img && (
            <img
              src={'http://localhost:5000/' + img}
              alt=''
              style={{ width: '100%' }}
            />
          )}
          {/* <div>
            <span className='badge badge-primary'>JavaScript</span>
            <span className='badge badge-primary'>Android</span>
            <span className='badge badge-primary'>PHP</span>
            <span className='badge badge-primary'>Node.js</span>
            <span className='badge badge-primary'>Ruby</span>
            <span className='badge badge-primary'>Paython</span>
          </div> */}
        </div>
        <div className='card-footer'>
          <a onClick={handleLike} className='card-link'>
            <i className='fa fa-thumbs-up'></i> {like} Like
          </a>
          <a onClick={() => setIsShow(!isShow)} className='card-link'>
            <i className='fa fa-comment'></i> Comment
          </a>
          <a href='#' className='card-link'>
            <i className='fa fa-mail-forward'></i> Share
          </a>
        </div>
        {isShow && <Comment idPost={_id} />}
      </div>
    </>
  )
}

export default Post
