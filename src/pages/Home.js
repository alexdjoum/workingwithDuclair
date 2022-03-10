import React, { useState } from 'react'
import { login } from '../actions/auth'
import { useNavigate } from 'react-router-dom'
import { setAuthentication, isAuthenticated } from '../helpers/auth'
import { Link } from 'react-router-dom'
//import './Home.css'
import { toast } from 'react-toastify'
import Header from '../components/Header'
import Footer from '../components/Footer'

export default function Home() {
  let navigate = useNavigate()
  const [username, setUserName] = useState('')
  const [password, setPassword] = useState('')

  // const handleSubmit = async (e) => {
  // 	e.preventDefault();

  // }
  const validateForm = () => {
    return username.length > 0 && password.length > 0
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      console.log('REGISTER USER ====> ', username)
      const user = {
        username: username,
        password: password,
        // gender: gender,
        // status: status,
        //phoneNumber: phoneNumber,
        //email: email,
      }
      console.log('user =====>.>>>>', user)
      login(user)
        .then((response) => {
          console.log('demoooooooooooooo ----', response.data)
          setAuthentication(response.data.token, response.data.user)

          if (isAuthenticated()) {
            navigate('/events')
          }
        })
        .catch((err) => {
          console.log('Signin api function ', err)
        })
      // const res = await register(user);
      // console.log('res ======= ', res)

      toast.error('Wrong username or password')
      navigate('/')
    } catch (err) {
      console.log('hjkhhjgklhkjjkhgjgffhgj')

      //if (err.response.status === 400)
      toast.error('erooooooooooooororororor')
    }
  }

  return (
    <>
      <Header />
      {/*  <!-- Slider Area --> */}
      <section className='home-slider'>
        <div className='slider-active'>
          {/* <!-- Single Slider --> */}
          <div className='single-slider overlay'>
            <div
              className='slider-image'
              style={{
                backgroundImage: 'url(' + 'images/slider/slider-bg1.jpg' + ')',
              }}
            ></div>
            <div className='container'>
              <div className='row'>
                <div className='col-lg-7 col-md-10 col-12'>
                  {/* <!-- Slider Content --> */}
                  <div className='slider-content'>
                    <h1 className='slider-title'>
                      <span>
                        A Geeks Zone For The Geeks By The Geeks To The Geeks
                      </span>
                      &lt;TheGeeks /&gt;
                    </h1>
                    <p className='slider-text'>
                      We welcome you to the platform where we consistently
                      strive to offer the best of education.
                      <br />
                      <br /> This platform has been designed for every geek
                      wishing to expand and share their knowledge. We have
                      articles, online courses, thousands of tutorials and much
                      more just for the geek inside you.
                      <br />
                      <br />
                      Thank you for choosing and supporting us! ~ Demo FKD
                    </p>
                    {/* <!-- Button --> */}
                    <div className='button'>
                      <Link to='about.html' className='btn white'>
                        About TheGeeks
                      </Link>
                      <Link to='courses.html' className='btn white primary'>
                        Our Courses
                      </Link>
                    </div>
                    {/* <!--/ End Button --> */}
                  </div>
                  {/* <!--/ End Slider Content --> */}
                </div>
              </div>
            </div>
          </div>
          {/* <!--/ End Single Slider --> */}
        </div>
      </section>
      {/* <!--/ End Slider Area --> */}

      {/* <!-- Courses --> */}
      <section id='contact' className='contact section'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-6 offset-lg-3 col-12'>
              <div className='section-title bg'>
                <h2>Login to your account</h2>
                {/* <p>Able an hope of body. Any nay shyness article matters own removal nothing his forming. Gay own additions education satisfied the perpetual. If he cause manor happy</p>*/}
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
                        <i className='fa fa-phone'></i>
                        <input
                          name='phone'
                          type='text'
                          placeholder='Username'
                          onChange={(e) => setUserName(e.target.value)}
                        />
                      </div>
                    </div>
                    <div className='col-lg-6 col-md-6 col-12'>
                      <div className='form-group'>
                        <i className='fa fa-key'></i>
                        <input
                          name='password'
                          type='text'
                          placeholder='Password'
                          onChange={(e) => setPassword(e.target.value)}
                        />
                      </div>
                    </div>
                    {/* <div className="col-lg-6 col-md-6 col-12">
										<div className="form-group">
											<i className="fa fa-user"></i>
											<input name="first-name" type="text" placeholder="First name" />
										</div>
									</div> */}

                    {/* <div className="col-lg-6 col-md-6 col-12">
										<div className="form-group">
											<i className="fa fa-envelope"></i>
											<input name="url" type="url" placeholder="Website url" />
										</div>
									</div>
									 <div className="col-12">
										<div className="form-group message">
											<i className="fa fa-pencil"></i>
											<textarea name="message" placeholder="Type your message"></textarea>
										</div>
									</div> */}
                    <div className='col-12'>
                      <div className='form-group'>
                        <div className='button'>
                          <button
                            type='submit'
                            className='btn primary'
                            disabled={!validateForm()}
                          >
                            Login
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
                  <Link to='/register'>
                    <div className='icon'>
                      <i className='fa fa-plus'></i>
                    </div>
                    <h3>Don't Have An Account Yet</h3>
                    <p>Create Account</p>
                  </Link>
                </div>
                {/* <!-- Contact-Info --> */}
                {/* <div className="contact-info">
								<div className="icon"><i className="fa fa-envelope"></i></div>
								<h3>contact information</h3>
								<p><Link to="mailto:info@example.com">support@yourwebsite.com</Link></p>
								<p>+123 456-7890</p>
							</div> */}
                {/* <!-- Contact-Info --> */}
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!--/ End Courses --> */}

      {/* <!-- Features --> */}
      <div
        className='features overlay section'
        data-stellar-background-ratio='0.5'
      >
        <div className='container'>
          <div className='row'>
            <div className='col-lg-3 col-md-6 col-12'>
              {/* <!-- Single Feature --> */}
              <div className='single-feature'>
                <div className='icon-img'>
                  <img src='images/feature1.jpg' alt='#' />
                  <i className='fa fa-clone'></i>
                </div>
                <div className='feature-content'>
                  <h4 className='f-title'>Trending Course</h4>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Aperiam suscipit fugiat sint totam soluta assumenda
                  </p>
                </div>
              </div>
              {/* <!--/ End Single Feature --> */}
            </div>
            <div className='col-lg-3 col-md-6 col-12'>
              {/* <!-- Single Feature --> */}
              <div className='single-feature'>
                <div className='icon-img'>
                  <img src='images/feature2.jpg' alt='#' />
                  <i className='fa fa-book'></i>
                </div>
                <div className='feature-content'>
                  <h4 className='f-title'>Books & Library</h4>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Aperiam suscipit fugiat sint totam soluta assumenda
                  </p>
                </div>
              </div>
              {/* <!--/ End Single Feature --> */}
            </div>
            <div className='col-lg-3 col-md-6 col-12'>
              {/* <!-- Single Feature --> */}
              <div className='single-feature'>
                <div className='icon-img'>
                  <img src='images/feature1.jpg' alt='#' />
                  <i className='fa fa-institution'></i>
                </div>
                <div className='feature-content'>
                  <h4 className='f-title'>Best Facility</h4>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Aperiam suscipit fugiat sint totam soluta assumenda
                  </p>
                </div>
              </div>
              {/* <!--/ End Single Feature --> */}
            </div>
            <div className='col-lg-3 col-md-6 col-12'>
              {/* <!-- Single Feature --> */}
              <div className='single-feature'>
                <div className='icon-img'>
                  <img src='images/feature3.jpg' alt='#' />
                  <i className='fa fa-users'></i>
                </div>
                <div className='feature-content'>
                  <h4 className='f-title'>Certified Teachers</h4>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Aperiam suscipit fugiat sint totam soluta assumenda
                  </p>
                </div>
              </div>
              {/* <!--/ End Single Feature --> */}
            </div>
          </div>
        </div>
      </div>
      {/* <!--/ End Features --> */}

      {/* <!-- Events --> */}
      <section className='events section'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-6 offset-lg-3 col-12'>
              <div className='section-title bg'>
                <h2>
                  Upcoming <span>Events</span>
                </h2>
                <p>
                  Able an hope of body. Any nay shyness article matters own
                  removal nothing his forming. Gay own additions education
                  satisfied the perpetual. If he cause manor happy
                </p>
                <div className='icon'>
                  <i className='fa fa-paper-plane'></i>
                </div>
              </div>
            </div>
          </div>
          <div className='row'>
            <div className='col-lg-5 col-12'>
              <div className='event-img'>
                <img src='images/event-left.png' alt='#' />
              </div>
            </div>
            <div className='col-lg-7 col-12'>
              <div className='coming-event'>
                {/* <!-- Single Event --> */}
                <div className='single-event'>
                  <div className='event-date'>
                    <p>
                      23<span>March</span>
                    </p>
                  </div>
                  <div className='event-content'>
                    <h3 className='event-title'>
                      <Link to='event-single.html'>
                        Admission Fair Spring 2019
                      </Link>
                    </h3>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Suspendisse facilisis ultricies tortor, nec sollicitudin
                      lorem sagittis vitae. Curabitur rhoncus commodo
                    </p>
                    <span className='entry-date-time'>
                      <i className='fa fa-clock-o' aria-hidden='true'></i> 05:23
                      AM - 09:23 AM{' '}
                    </span>
                  </div>
                </div>
                {/* <!-- End Single Event -->
							<!-- Single Event --> */}
                <div className='single-event'>
                  <div className='event-date'>
                    <p>
                      25<span>April</span>
                    </p>
                  </div>
                  <div className='event-content'>
                    <h3 className='event-title'>
                      <Link to='event-single.html'>
                        Internation Web Developments Awards!
                      </Link>
                    </h3>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Suspendisse facilisis ultricies tortor, nec sollicitudin
                      lorem sagittis vitae. Curabitur rhoncus commodo
                    </p>
                    <span className='entry-date-time'>
                      <i className='fa fa-clock-o' aria-hidden='true'></i> 05:23
                      AM - 09:23 AM{' '}
                    </span>
                  </div>
                </div>
                {/* <!-- End Single Event -->
							<!-- Single Event --> */}
                <div className='single-event'>
                  <div className='event-date'>
                    <p>
                      05<span>Jun</span>
                    </p>
                  </div>
                  <div className='event-content'>
                    <h3 className='event-title'>
                      <Link to='event-single.html'>
                        Actualized Network Seminar
                      </Link>
                    </h3>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Suspendisse facilisis ultricies tortor, nec sollicitudin
                      lorem sagittis vitae. Curabitur rhoncus commodo
                    </p>
                    <span className='entry-date-time'>
                      <i className='fa fa-clock-o' aria-hidden='true'></i> 05:23
                      AM - 09:23 AM{' '}
                    </span>
                  </div>
                </div>
                {/* <!-- End Single Event --> */}
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!--/ End Events --> */}

      {/* <!-- Call To Action --> */}
      <section className='cta'>
        <div
          className='cta-inner overlay section'
          style={{ backgroundImage: 'url(' + 'images/cta-bg.jpg' + ')' }}
          data-stellar-background-ratio='0.5'
        >
          <div className='container'>
            <div className='row'>
              <div className='col-lg-8 col-md-8 col-12'>
                <div className='text-content'>
                  <h2>
                    We <span>Focus on</span> Brands, Products & Campaigns
                  </h2>
                  <p>
                    facilisis ultricies tortor, nec sollicitudin lorem sagittis
                    vitae. Curabitur rhoncus commodo rutrum. Pellentesque
                    habitant morbi tristique senectus et netus et malesuada
                    fames ac turpis egestas. Aliquam nec lacus pulvinar, laoreet
                    dolor quis, pellentesque ante. Cras nulla orci, pharetra at
                    dictum consequat, pretium pretium nulla
                  </p>
                  {/* <!-- CTA Button --> */}
                  <div className='button'>
                    <Link className='btn white' to='/contact'>
                      Join With Now
                    </Link>
                    <Link className='btn white primary' to='courses.html'>
                      View Courses
                    </Link>
                  </div>
                  {/* <!--/ End CTA Button --> */}
                </div>
              </div>
              <div className='col-lg-4 col-md-4 col-12'>
                {/* <!-- Cta Image --> */}
                <div className='cta-image'>
                  <img src='images/girl-1.png' alt='#' />
                </div>
                {/* <!--/ End Cta Image --> */}
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!--/ End Call To Action -->
	<!-- Faqs --> */}
      <section className='faqs section'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-6 offset-lg-3 col-12'>
              <div className='section-title bg'>
                <h2>
                  Frequently Asked <span>Questions</span>
                </h2>
                <p>
                  Able an hope of body. Any nay shyness article matters own
                  removal nothing his forming. Gay own additions education
                  satisfied the perpetual. If he cause manor happy
                </p>
                <div className='icon'>
                  <i className='fa fa-question'></i>
                </div>
              </div>
            </div>
          </div>
          <div className='row'>
            <div className='col-lg-5 col-12'>
              <div className='faq-image'>
                <img src='images/faq.png' alt='#' />
              </div>
            </div>
            <div className='col-lg-7 col-12'>
              <div className='faq-main'>
                <div className='faq-content'>
                  <div
                    className='panel-group'
                    id='accordion'
                    role='tablist'
                    aria-multiselectable='true'
                  >
                    {/* <!-- Single Faq --> */}
                    <div className='panel panel-default'>
                      <div className='faq-heading' id='FaqTitle1'>
                        <h4 className='faq-title'>
                          <a
                            className='collapsed'
                            data-toggle='collapse'
                            data-parent='#accordion'
                            href='#faq1'
                          >
                            <i className='fa fa-question'></i>We have launches a
                            new software house!
                          </a>
                        </h4>
                      </div>
                      <div
                        id='faq1'
                        className='panel-collapse collapse'
                        role='tabpanel'
                        aria-labelledby='FaqTitle1'
                      >
                        <div className='faq-body'>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Suspendisse facilisis ultricies tortor, nec
                          sollicitudin lorem sagittis vitae. Curabitur rhoncus
                          commodo rutrum. Pellentesque habitant morbi tristique
                          senectus et netus et malesuada fames ac turpis
                          egestas. Aliquam nec lacus pulvinar, laoreet dolor
                          quis, pellentesque ante. Cras nulla orci, pharetra at
                          dictum consequat
                        </div>
                      </div>
                    </div>
                    {/* <!--/ End Single Faq -->
									<!-- Single Faq --> */}
                    <div className='panel panel-default active'>
                      <div className='faq-heading' id='FaqTitle2'>
                        <h4 className='faq-title'>
                          <a
                            className='collapsed'
                            data-toggle='collapse'
                            data-parent='#accordion'
                            href='#faq2'
                          >
                            <i className='fa fa-question'></i>Curabitur rhoncus
                            commodo rutrum. Pellentesque
                          </a>
                        </h4>
                      </div>
                      <div
                        id='faq2'
                        className='panel-collapse collapse show'
                        role='tabpanel'
                        aria-labelledby='FaqTitle2'
                      >
                        <div className='faq-body'>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Suspendisse facilisis ultricies tortor, nec
                          sollicitudin lorem sagittis vitae. Curabitur rhoncus
                          commodo rutrum. Pellentesque habitant morbi tristique
                          senectus et netus et malesuada fames ac turpis
                          egestas. Aliquam nec lacus pulvinar, laoreet dolor
                          quis, pellentesque ante. Cras nulla orci, pharetra at
                          dictum consequat
                        </div>
                      </div>
                    </div>
                    {/* <!--/ End Single Faq -->
									<!-- Single Faq --> */}
                    <div className='panel panel-default'>
                      <div className='faq-heading' id='FaqTitle3'>
                        <h4 className='faq-title'>
                          <a
                            className='collapsed'
                            data-toggle='collapse'
                            data-parent='#accordion'
                            href='#faq3'
                          >
                            <i className='fa fa-question'></i>Suspendisse
                            facilisis ultricies tortor, nec sollicitudin
                          </a>
                        </h4>
                      </div>
                      <div
                        id='faq3'
                        className='panel-collapse collapse'
                        role='tabpanel'
                        aria-labelledby='FaqTitle3'
                      >
                        <div className='faq-body'>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Suspendisse facilisis ultricies tortor, nec
                          sollicitudin lorem sagittis vitae. Curabitur rhoncus
                          commodo rutrum. Pellentesque habitant morbi tristique
                          senectus et netus et malesuada fames ac turpis
                          egestas. Aliquam nec lacus pulvinar, laoreet dolor
                          quis, pellentesque ante. Cras nulla orci, pharetra at
                          dictum consequat
                        </div>
                      </div>
                    </div>
                    {/* <!--/ End Single Faq -->
									<!-- Single Faq --> */}
                    <div className='panel panel-default'>
                      <div className='faq-heading' id='FaqTitle4'>
                        <h4 className='faq-title'>
                          <a
                            className='collapsed'
                            data-toggle='collapse'
                            data-parent='#accordion'
                            href='#faq4'
                          >
                            <i className='fa fa-question'></i>Tristique senectus
                            et netus et malesuada fames ac turpis{' '}
                          </a>
                        </h4>
                      </div>
                      <div
                        id='faq4'
                        className='panel-collapse collapse'
                        role='tabpanel'
                        aria-labelledby='FaqTitle4'
                      >
                        <div className='faq-body'>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Suspendisse facilisis ultricies tortor, nec
                          sollicitudin lorem sagittis vitae. Curabitur rhoncus
                          commodo rutrum. Pellentesque habitant morbi tristique
                          senectus et netus et malesuada fames ac turpis
                          egestas. Aliquam nec lacus pulvinar, laoreet dolor
                          quis, pellentesque ante. Cras nulla orci, pharetra at
                          dictum consequat
                        </div>
                      </div>
                    </div>
                    {/* <!--/ End Single Faq -->
									<!-- Single Faq --> */}
                    <div className='panel panel-default'>
                      <div className='faq-heading' id='FaqTitle5'>
                        <h4 className='faq-title'>
                          <a
                            className='collapsed'
                            data-toggle='collapse'
                            data-parent='#accordion'
                            href='#faq5'
                          >
                            <i className='fa fa-question'></i>Cras nulla orci,
                            pharetra at dictum consequat
                          </a>
                        </h4>
                      </div>
                      <div
                        id='faq5'
                        className='panel-collapse collapse'
                        role='tabpanel'
                        aria-labelledby='FaqTitle5'
                      >
                        <div className='faq-body'>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Suspendisse facilisis ultricies tortor, nec
                          sollicitudin lorem sagittis vitae. Curabitur rhoncus
                          commodo rutrum. Pellentesque habitant morbi tristique
                          senectus et netus et malesuada fames ac turpis
                          egestas. Aliquam nec lacus pulvinar, laoreet dolor
                          quis, pellentesque ante. Cras nulla orci, pharetra at
                          dictum consequat
                        </div>
                      </div>
                    </div>
                    {/* <!--/ End Single Faq --> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!--/ End Blogs -->

		<!-- Clients CSS --> */}
      <div className='clients'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-4 col-md-4 col-12'>
              <div className='text-content'>
                <h4>Our Awesome Clients!</h4>
                <p>
                  Vivamus volutpat eros pulvinar velit laoreet, sit amet egestas
                  erat dignissim. Et harum quidem
                </p>
              </div>
            </div>
            <div className='col-lg-8 col-md-8 col-12'>
              <div className='client-slider'>
                <div className='single-slider'>
                  <a href='#'>
                    <img src='images/client1.png' alt='#' />
                  </a>
                </div>
                <div className='single-slider'>
                  <a href='#'>
                    <img src='images/client2.png' alt='#' />
                  </a>
                </div>
                <div className='single-slider'>
                  <a href='#'>
                    <img src='images/client3.png' alt='#' />
                  </a>
                </div>
                <div className='single-slider'>
                  <a href='#'>
                    <img src='images/client4.png' alt='#' />
                  </a>
                </div>
                <div className='single-slider'>
                  <a href='#'>
                    <img src='images/client5.png' alt='#' />
                  </a>
                </div>
                <div className='single-slider'>
                  <a href='#'>
                    <img src='images/client1.png' alt='#' />
                  </a>
                </div>
                <div className='single-slider'>
                  <a href='#'>
                    <img src='images/client2.png' alt='#' />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}
