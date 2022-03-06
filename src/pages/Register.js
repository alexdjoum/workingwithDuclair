import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { register } from '../actions/auth'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { useNavigate } from 'react-router-dom'
import Select from 'react-select'
import Header from '../components/Header'
import './Home.css'

export default function Register() {
  let navigate = useNavigate()
  const [username, setUserName] = useState('')
  const [gender, setGender] = useState('')
  const [status, setStatus] = useState('')
  const [phoneNumber, setPhoneNumber] = useState()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  //console.log('history ====>', history)

  const handleSubmit = async (e) => {
    //toast.success('Alex Djoum Register successfull, please login');
    e.preventDefault()
    // console.table({ name, email, password });
    try {
      console.log('REGISTER USER ====> ', username)
      // let user = new FormData();
      // user.append('username', username);
      // user.append('sex', sex);
      // user.append('status', status);
      // user.append('phonenumber', phonenumber);
      // user.append('email', email);
      // user.append('password', password)
      const user = {
        username: username,
        // gender: gender,
        // status: status,
        phoneNumber: phoneNumber,
        email: email,
        password: password,
      }
      console.log('user =====>.>>>>', user)
      register(user)
      const res = await register(user)
      console.log('res ======= ', res)

      toast.success(`Alex Djoum Register successfull, please login`)
      navigate('/')
    } catch (err) {
      console.log('hjkhhjgklhkjjkhgjgffhgj')

      //if (err.response.status === 400)
      toast.error('All fields are required')
    }
  }

  return (
    <>
      <Header />
      {/* <!--/ End Header -->

		<!-- Breadcrumb --> */}
      <div
        className='breadcrumbs overlay'
        style={{ backgroundImage: 'url(' + 'images/breadcrumb-bg.jpg' + ')' }}
      >
        <div className='container'>
          <div className='row'>
            <div className='col-lg-6 col-md-6 col-12'>
              <h2>Contact us</h2>
            </div>
            <div className='col-lg-6 col-md-6 col-12'>
              <ul className='bread-list'>
                <li>
                  <Link to='/'>
                    Home<i className='fa fa-angle-right'></i>
                  </Link>
                </li>
                <li className='active'>
                  <Link to='/contact'>contact</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      {/* <!--/ End Breadcrumb -->

		<!-- Contact Us --> */}
      <section id='contact' className='contact section'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-6 offset-lg-3 col-12'>
              <div className='section-title bg'>
                <h2>Create an account</h2>
                {/* <p>orming. Gay own additions education satisfied the perpetual. If he cause manor happy</p> */}
                <div className='icon'>
                  <i className='fa fa-paper-plane'></i>
                </div>
              </div>
            </div>
          </div>
          <div className='row'>
            <div className='col-lg-8 col-md-8 col-12'>
              <div className='form-head'>
                {/* <!-- Contact Form --> */}
                <form className='form' onSubmit={handleSubmit}>
                  <div className='row'>
                    <div className='col-lg-6 col-md-6 col-12'>
                      <div className='form-group'>
                        <i className='fa fa-user'></i>
                        <input
                          name='username'
                          type='text'
                          placeholder='User name'
                          value={username}
                          onChange={(e) => setUserName(e.target.value)}
                        />
                      </div>
                    </div>
                    <div className='col-lg-6 col-md-6 col-12'>
                      <div className='form-group'>
                        <i className='fa fa-envelope'></i>
                        <input
                          name='phoneNumber'
                          type='number'
                          placeholder='Phone number'
                          value={phoneNumber}
                          onChange={(e) => setPhoneNumber(e.target.value)}
                        />
                      </div>
                    </div>
                    <div className='col-lg-6 col-md-6 col-12'>
                      <div className='form-group'>
                        <i className='fa fa-envelope'></i>
                        <input
                          name='email'
                          type='email'
                          placeholder='Email address'
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                        />
                      </div>
                    </div>
                    <div className='col-lg-6 col-md-6 col-12'>
                      <div className='form-group'>
                        <i className='fa fa-envelope'></i>
                        <input
                          name='password'
                          type='password'
                          placeholder='Enter password'
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                        />
                      </div>
                    </div>
                    <div className='col-lg-6 col-md-6 col-12'>
                      {/* <div className="form-group">
											
											<select
												name="status"
												value={status}
												onChange={(e) => setStatus(e.target.value)}
											>
												<option value="">Select status</option>
												<option value="single">Single</option>
												<option value="maried">Maried</option>
											</select>
										
										</div> */}
                    </div>
                    {/* <div className="col-lg-6 col-md-6 col-12">
										<div className="form-group">
											<i className="fa fa-envelope"></i>
											<input 
                                                name="gender" 
                                                type="text" 
                                                placeholder="Sex"
                                                value={gender}
                                                onChange={(e) => setGender(e.target.value)}
                                            />
										</div>
									</div> */}
                    {/* <div className="col-12">
										<div className="form-group message">
											<i className="fa fa-pencil"></i>
											<textarea name="message" placeholder="Type your message"></textarea>
										</div>
									</div> */}
                    <div className='col-12'>
                      <div className='form-group'>
                        <div className='button'>
                          <button type='submit' className='btn primary'>
                            Register
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </form>
                {/* <!--/ End Contact Form --> */}
              </div>
            </div>
            <div className='col-lg-4 col-md-4 col-12'>
              <div className='contact-right'>
                {/* <!-- Contact-Info --> */}
                <div className='contact-info'>
                  <div className='icon'>
                    <i className='fa fa-map'></i>
                  </div>
                  <h3>Our Collage Location</h3>
                  <p>
                    60 Grant ave. Central New Road 0708, United states of
                    America
                  </p>
                </div>
                {/* <!-- Contact-Info --> */}
                <div className='contact-info'>
                  <div className='icon'>
                    <i className='fa fa-envelope'></i>
                  </div>
                  <h3>contact information</h3>
                  <p>
                    <Link to='mailto:info@example.com'>
                      support@yourwebsite.com
                    </Link>
                  </p>
                  <p>+123 456-7890</p>
                </div>
                {/* <!-- Contact-Info --> */}
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!--/ End Contact Us --> */}

      {/* <!-- Clients CSS --> */}
      <div className='clients overlay'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-4 col-12'>
              <div className='text-content'>
                <h4>Our Clients!</h4>
                <p>
                  Vivamus volutpat eros pulvinar velit laoreet, sit amet egestas
                  erat dignissim. Et harum quidem
                </p>
              </div>
            </div>
            <div className='col-lg-8 col-12'>
              <div className='client-slider'>
                <div className='single-slider'>
                  <img src='images/client1.png' alt='#' />
                </div>
                <div className='single-slider'>
                  <img src='images/client2.png' alt='#' />
                </div>
                <div className='single-slider'>
                  <img src='images/client3.png' alt='#' />
                </div>
                <div className='single-slider'>
                  <img src='images/client4.png' alt='#' />
                </div>
                <div className='single-slider'>
                  <img src='images/client5.png' alt='#' />
                </div>
                <div className='single-slider'>
                  <img src='images/client1.png' alt='#' />
                </div>
                <div className='single-slider'>
                  <img src='images/client2.png' alt='#' />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
