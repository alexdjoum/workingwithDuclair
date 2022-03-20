import React, { useState } from 'react'
import { createComment } from '../actions/createComment'
import './comment.css'

const Comment = ({ idPost }) => {
  const [comment, setComment] = useState('')
  const userID = JSON.parse(localStorage.getItem('user'))._id

  const handleSubmit = async (e) => {
    //toast.success('Alex Djoum Register successfull, please login');

    try {
      e.preventDefault()
      // console.table({ name, email, password });
      if (comment) {
        // let formData = new FormData()
        // formData.append('desc', desc)
        // formData.append('image', selectedFile)
        // console.log('enter ============>>>>>>', ...formData)
        const comments = {
          comment: comment,
        }
        console.log('comment ========>', comments)
        console.log('userId ========>', userID)
        console.log('postID ========>', idPost)

        await createComment(comments, userID, idPost)
        console.log('bonjour ===========>>>>>')
        // toast.success(`${desc} ${selectedFile} posted successfull`)
        setComment('')
        // setSelectedFile(null)
        // navigate('/')
      } else {
        //toast.error(`${desc} posted error`)
      }
    } catch (err) {
      console.log('errooooooeeeeeeeeeeeer')

      //if (err.response.status === 400)
      // toast.error('All fields are required')
    }
  }

  return (
    <>
      <div className='container mb-5 mt-1'>
        <div className='card comment-card'>
          <div className='row'>
            <div className='col-md-12'>
              {/* <h3 className='text-center mb-5'> Nested comment section </h3> */}
              <div className='row'>
                <div className='col-md-12'>
                  <div className='media'>
                    {' '}
                    <img
                      className='mr-3 rounded-circle'
                      alt='Bootstrap Media Preview'
                      src='https://i.imgur.com/stD0Q19.jpg'
                    />
                    <div className='media-body'>
                      <div className='row'>
                        <div className='col-8 d-flex'>
                          <h5>Maria Smantha</h5> <span>- 2 hours ago</span>
                        </div>
                        <div className='col-4'>
                          <div className='pull-right reply'>
                            {' '}
                            <a href='#'>
                              <span>
                                <i className='fa fa-reply'></i> reply
                              </span>
                            </a>{' '}
                          </div>
                        </div>
                      </div>{' '}
                      It is a long established fact that a reader will be
                      distracted by the readable content of a page.{' '}
                      <div className='media mt-4'>
                        {' '}
                        <a className='pr-3' href='#'>
                          <img
                            className='rounded-circle'
                            alt='Bootstrap Media Another Preview'
                            src='https://i.imgur.com/xELPaag.jpg'
                          />
                        </a>
                        <div className='media-body'>
                          <div className='row'>
                            <div className='col-12 d-flex'>
                              <h5>Simona Disa</h5> <span>- 3 hours ago</span>
                            </div>
                          </div>{' '}
                          letters, as opposed to using 'Content here, content
                          here', making it look like readable English.
                        </div>
                      </div>
                      <div className='media mt-3'>
                        {' '}
                        <a className='pr-3' href='#'>
                          <img
                            className='rounded-circle'
                            alt='Bootstrap Media Another Preview'
                            src='https://i.imgur.com/nAcoHRf.jpg'
                          />
                        </a>
                        <div className='media-body'>
                          <div className='row'>
                            <div className='col-12 d-flex'>
                              <h5>John Smith</h5> <span>- 4 hours ago</span>
                            </div>
                          </div>{' '}
                          the majority have suffered alteration in some form, by
                          injected humour, or randomised words.
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className='media mt-4'>
                    {' '}
                    <img
                      className='mr-3 rounded-circle'
                      alt='Bootstrap Media Preview'
                      src='https://i.imgur.com/xELPaag.jpg'
                    />
                    <div className='media-body'>
                      <div className='row'>
                        <div className='col-8 d-flex'>
                          <h5>Shad f</h5> <span>- 2 hours ago</span>
                        </div>
                        <div className='col-4'>
                          <div className='pull-right reply'>
                            {' '}
                            <a href='#'>
                              <span>
                                <i className='fa fa-reply'></i> reply
                              </span>
                            </a>{' '}
                          </div>
                        </div>
                      </div>{' '}
                      The standard chunk of Lorem Ipsum used since the 1500s is
                      reproduced below for those interested. Sections 1.10.32
                      and 1.10.33.{' '}
                      <div className='bg-light p-2'>
                        <div className='d-flex flex-row align-items-start'>
                          <img
                            className='rounded-circle'
                            src='https://i.imgur.com/RpzrMR2.jpg'
                            width='40'
                          />
                          <textarea
                            className='form-control ml-1 shadow-none textarea'
                            value={comment}
                            onChange={(e) => setComment(e.target.value)}
                          ></textarea>
                        </div>
                        <div className='mt-2 text-right'>
                          <button
                            className='btn btn-primary btn-sm shadow-none'
                            type='button'
                            onClick={handleSubmit}
                          >
                            Post comment
                          </button>
                          <button
                            class='btn btn-outline-primary btn-sm ml-1 shadow-none'
                            type='button'
                          >
                            Cancel
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Comment
