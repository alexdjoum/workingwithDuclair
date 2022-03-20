import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Footer from '../components/Footer'
import Header from '../components/Header'
import './Profile.css'
import { toast } from 'react-toastify'
import { useParams } from 'react-router'
import axios from 'axios'
import { createPost } from '../actions/createPost'
import BreadCrumb from '../components/BreadCrumb'
import { getLocalStorage } from '../helpers/localStorage'
import { getCookie } from '../helpers/cookies'
import Feeds from '../components/Feeds'

function Profile() {
  const [user, setUser] = useState({})
  const token = getCookie('token')
  const [selectedFile, setSelectedFile] = useState(null)
  const [isFilePicked, setIsFilePicked] = useState(false)
  const [desc, setDesc] = useState('')

  // const changeHandler = (e) => {
  //   setSelectedFile(e.target.files[0]);
  //   setIsSelected(true)
  // }

  let navigate = useNavigate()

  //const userID = JSON.parse(localStorage.getItem('user'))._id
  const userID = JSON.parse(localStorage.getItem('user'))._id

  console.log('UserID========', userID)

  // const handlePostImage = (event) => {
  //   setPostData({
  //     ...postData,
  //     [event.target.name]: event.target.files[0],
  //   })
  // }

  const handleSubmit = async (e) => {
    //toast.success('Alex Djoum Register successfull, please login');

    try {
      e.preventDefault()
      // console.table({ name, email, password });

      if (desc || selectedFile) {
        let formData = new FormData()
        formData.append('desc', desc)
        formData.append('image', selectedFile)
        console.log('enter ============>>>>>>', ...formData)
        await createPost(formData, userID, token)

        // toast.success(`${desc} ${selectedFile} posted successfull`)
        // setDesc('')
        // setSelectedFile(null)
        // navigate('/')
      } else {
        toast.error(`${desc} posted error`)
      }
    } catch (err) {
      console.log('errooooooeeeeeeeeeeeer')

      //if (err.response.status === 400)
      toast.error('All fields are required')
    }
  }

  useEffect(() => {
    const fetchUser = async () => {
      const res = await axios.get(`http://localhost:5000/profile/${userID}`)
      setUser(res.data)
      console.log('User========', user)
    }
    fetchUser()
  }, [])

  return (
    <div>
      {/* <!-- Header --> */}

      <Header />
      {/* <!--/ End Header --> */}

      {/* <!-- Breadcrumb --> */}
      <BreadCrumb />
      {/* <!--/ End Breadcrumb -->

		<!-- Teachers --> */}
      <main>
        <div className='container'>
          <div
            className='img'
            style={
              user.coverPicture
                ? {
                    backgroundImage: `linear-gradient(150deg, rgba(63, 174, 255, .3)15%, rgba(63, 174, 255, .3)70%, rgba(63, 174, 255, .3)94%), url( "images2/person/noCover.png" )`,
                    height: '350px',
                    backgroundSize: 'cover',
                  }
                : {
                    backgroundImage: `linear-gradient(150deg, rgba(63, 174, 255, .3)15%, rgba(63, 174, 255, .3)70%, rgba(63, 174, 255, .3)94%), url( "images2/person/noCover.png" )`,
                    height: '350px',
                    backgroundSize: 'cover',
                  }
            }
          ></div>
          <div className='card social-prof'>
            <div className='card-body'>
              <div
                className='wrapper'
                type='file'
                name='file'
                //onChange={changeHandler}
              >
                <img
                  src={
                    user.profilePicture
                      ? 'images2/person/10.png'
                      : 'images2/person/noAvatar.png'
                  }
                  alt=''
                  className='user-profile'
                />
                <h3>{user.username}</h3>
                <p>Web Developer</p>
              </div>
              <div className='row '>
                <div className='col-lg-12'>
                  <ul className=' nav nav-tabs justify-content-center s-nav'>
                    <li>
                      <a className='active' href='#'>
                        Timeline
                      </a>
                    </li>
                    <li>
                      <a href='#'>About</a>
                    </li>
                    <li>
                      <a href='#'>Friends</a>
                    </li>
                    <li>
                      <a href='#'>Photos</a>
                    </li>
                    <li>
                      <a href='#'>Videos</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className='row'>
            <div className='col-lg-3'>
              <div className='card'>
                <div className='card-body'>
                  <div className='h5 text-blue'>@JaneSmith</div>
                  <div className='h7 '>
                    <strong>Name : </strong> {user.username}
                  </div>
                  {/* <div className='h7 '>
                      <strong>Email :</strong> {this.state.user.email}
                    </div> */}
                  <div className='h7 '>
                    <strong>Phone Number :</strong> {user.phoneNumber}
                  </div>
                  <div className='h7'>
                    <strong>About :</strong> Developer of web applications,
                    JavaScript, PHP, Java, Python, Ruby, Java, Node.js, etc.
                  </div>
                </div>
                <ul className='list-group list-group-flush'>
                  <li className='list-group-item'>
                    <div className='h6 text-muted'>Followers</div>
                    <div className='h5'>5.2342</div>
                  </li>
                  <li className='list-group-item'>
                    <div className='h6 text-muted'>Following</div>
                    <div className='h5'>6758</div>
                  </li>
                  <li className='list-group-item'>
                    <div className='h6 text-muted'>Themes</div>
                    <div className='h5'>6758</div>
                  </li>
                </ul>
              </div>
              <div className='card'>
                <div className='card-body'>
                  <h3 className='card-title'>Latest Photos</h3>
                  <div
                    id='carouselExampleIndicators'
                    className='carousel slide'
                    data-ride='carousel'
                  >
                    <ol className='carousel-indicators'>
                      <li
                        data-target='#carouselExampleIndicators'
                        data-slide-to='0'
                        className=''
                      ></li>
                      <li
                        data-target='#carouselExampleIndicators'
                        data-slide-to='1'
                        className=''
                      ></li>
                      <li
                        data-target='#carouselExampleIndicators'
                        data-slide-to='2'
                        className='active'
                      ></li>
                    </ol>
                    <div className='carousel-inner'>
                      <div className='carousel-item'>
                        <img
                          src='https://bootdey.com/img/Content/avatar/avatar2.png'
                          className='d-block w-100'
                          alt='...'
                        />
                      </div>
                      <div className='carousel-item'>
                        <img
                          src='https://bootdey.com/img/Content/avatar/avatar2.png'
                          className='d-block w-100'
                          alt='...'
                        />
                      </div>
                      <div className='carousel-item active'>
                        <img
                          src='https://bootdey.com/img/Content/avatar/avatar2.png'
                          className='d-block w-100'
                          alt='...'
                        />
                      </div>
                    </div>
                    <a
                      className='carousel-control-prev'
                      href='#carouselExampleIndicators'
                      role='button'
                      data-slide='prev'
                    >
                      <span
                        className='carousel-control-prev-icon'
                        aria-hidden='true'
                      ></span>
                      <span className='sr-only'>Previous</span>
                    </a>
                    <a
                      className='carousel-control-next'
                      href='#carouselExampleIndicators'
                      role='button'
                      data-slide='next'
                    >
                      <span
                        className='carousel-control-next-icon'
                        aria-hidden='true'
                      ></span>
                      <span className='sr-only'>Next</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-lg-6 gedf-main'>
              {/* <!--- \\\\\\\Post--> */}
              <div className='card social-timeline-card'>
                <div className='card-header'>
                  <ul
                    className='nav nav-tabs card-header-tabs'
                    id='myTab'
                    role='tablist'
                  >
                    <li className='nav-item'>
                      <a
                        className='nav-link active'
                        id='posts-tab'
                        data-toggle='tab'
                        href='#posts'
                        role='tab'
                        aria-controls='posts'
                        aria-selected='true'
                      >
                        Share your insights
                      </a>
                    </li>
                    <li className='nav-item'>
                      <a
                        className='nav-link'
                        id='images-tab'
                        data-toggle='tab'
                        role='tab'
                        aria-controls='images'
                        aria-selected='false'
                        href='#images'
                      >
                        Share Images
                      </a>
                    </li>
                  </ul>
                </div>
                <div className='card-body'>
                  <div className='tab-content' id='myTabContent'>
                    <div
                      className='tab-pane fade active show'
                      id='posts'
                      role='tabpanel'
                      aria-labelledby='posts-tab'
                    >
                      <div className='form-group'>
                        <label className='sr-only' for='message'>
                          post
                        </label>
                        <textarea
                          className='form-control'
                          value={desc}
                          name='desc'
                          onChange={(e) => setDesc(e.target.value)}
                          rows='3'
                          placeholder='What are you thinking?'
                        ></textarea>
                      </div>
                    </div>
                    <div
                      className='tab-pane fade'
                      id='images'
                      role='tabpanel'
                      aria-labelledby='images-tab'
                    >
                      <div className='form-group'>
                        <div className='custom-file'>
                          <input
                            type='file'
                            //name='selectedFile'
                            className='custom-file-input'
                            // value={selectedFile}
                            onChange={(e) => {
                              console.log(e.target.files)
                              setSelectedFile(e.target.files[0])
                            }}
                          />
                          <label className='custom-file-label' for='customFile'>
                            Upload image
                          </label>
                        </div>
                      </div>
                      <div className='py-4'></div>
                    </div>
                  </div>
                  <div className='btn-toolbar justify-content-between'>
                    <div className='btn-group'>
                      <button
                        type='submit'
                        onClick={handleSubmit}
                        className='btn btn-theme-primary'
                      >
                        share
                      </button>
                    </div>
                    <div className='btn-group'>
                      <button
                        id='btnGroupDrop1'
                        type='button'
                        className='btn btn-link dropdown-toggle'
                        data-toggle='dropdown'
                        aria-haspopup='true'
                        aria-expanded='false'
                      >
                        <i className='fa fa-globe'></i>
                      </button>
                      <div
                        className='dropdown-menu '
                        aria-labelledby='btnGroupDrop1'
                      >
                        <a className='dropdown-item' href='#'>
                          <i className='fa fa-globe'></i> Public
                        </a>
                        <a className='dropdown-item' href='#'>
                          <i className='fa fa-users'></i> Friends
                        </a>
                        <a className='dropdown-item' href='#'>
                          <i className='fa fa-user'></i> Just me
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <Feeds />
            </div>
            <div className='col-lg-3'>
              <div className='card social-timeline-card'>
                <div className='card-body'>
                  <h5 className='card-title'>People you may know</h5>
                  <ul className='friend-list'>
                    <li>
                      <div className='left'>
                        <img
                          src='https://bootdey.com/img/Content/avatar/avatar1.png'
                          alt=''
                        />
                      </div>
                      <div className='right'>
                        <h3>John Doe</h3>
                        <p>10 Friends</p>
                      </div>
                    </li>
                    <li>
                      <div className='left'>
                        <img
                          src='https://bootdey.com/img/Content/avatar/avatar2.png'
                          alt=''
                        />
                      </div>
                      <div className='right'>
                        <h3>John Doe</h3>
                        <p>10 Friends</p>
                      </div>
                    </li>
                    <li>
                      <div className='left'>
                        <img
                          src='https://bootdey.com/img/Content/avatar/avatar3.png'
                          alt=''
                        />
                      </div>
                      <div className='right'>
                        <h3>John Doe</h3>
                        <p>10 Friends</p>
                      </div>
                    </li>
                    <li>
                      <div className='left'>
                        <img
                          src='https://bootdey.com/img/Content/avatar/avatar4.png'
                          alt=''
                        />
                      </div>
                      <div className='right'>
                        <h3>John Doe</h3>
                        <p>10 Friends</p>
                      </div>
                    </li>
                    <li>
                      <div className='left'>
                        <img
                          src='https://bootdey.com/img/Content/avatar/avatar5.png'
                          alt=''
                        />
                      </div>
                      <div className='right'>
                        <h3>John Doe</h3>
                        <p>10 Friends</p>
                      </div>
                    </li>
                    <li>
                      <div className='left'>
                        <img
                          src='https://bootdey.com/img/Content/avatar/avatar2.png'
                          alt=''
                        />
                      </div>
                      <div className='right'>
                        <h3>John Doe</h3>
                        <p>10 Friends</p>
                      </div>
                    </li>
                    <li>
                      <div className='left'>
                        <img
                          src='https://bootdey.com/img/Content/avatar/avatar3.png'
                          alt=''
                        />
                      </div>
                      <div className='right'>
                        <h3>John Doe</h3>
                        <p>10 Friends</p>
                      </div>
                    </li>
                    <li>
                      <div className='left'>
                        <img
                          src='https://bootdey.com/img/Content/avatar/avatar4.png'
                          alt=''
                        />
                      </div>
                      <div className='right'>
                        <h3>John Doe</h3>
                        <p>10 Friends</p>
                      </div>
                    </li>
                    <li>
                      <div className='left'>
                        <img
                          src='https://bootdey.com/img/Content/avatar/avatar6.png'
                          alt=''
                        />
                      </div>
                      <div className='right'>
                        <h3>John Doe</h3>
                        <p>10 Friends</p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default Profile
