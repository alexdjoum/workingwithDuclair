import React from 'react'
import { Link } from 'react-router-dom'
import Footer from '../components/Footer'
import Header from '../components/Header'

function Teacher() {
  return (
    <div>
      {/* <!-- Header --> */}

      <Header />
      {/* <!--/ End Header --> */}

      {/* <!-- Breadcrumb --> */}
      <div
        className='breadcrumbs overlay'
        style={{ backgroundImage: 'url(' + 'images/breadcrumb-bg.jpg' + ')' }}
      >
        <div className='container'>
          <div className='row'>
            <div className='col-lg-6 col-md-6 col-12'>
              <h2>Our Teachers</h2>
            </div>
            <div className='col-lg-6 col-md-6 col-12'>
              <ul className='bread-list'>
                <li>
                  <Link to='/'>
                    Home<i className='fa fa-angle-right'></i>
                  </Link>
                </li>
                <li>
                  <a href='#'>
                    Pages<i className='fa fa-angle-right'></i>
                  </a>
                </li>
                <li className='active'>
                  <Link to='about.html'>About</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      {/* <!--/ End Breadcrumb -->

		<!-- Teachers --> */}
      <section className='teachers archive section'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-6 offset-lg-3 col-12'>
              <div className='section-title bg'>
                <h2>
                  Our <span>Instructors</span>
                </h2>
                {/* <p>
                  Able an hope of body. Any nay shyness article matters own
                  removal nothing his forming. Gay own additions education
                  satisfied the perpetual. If he cause manor happy
                </p> */}
                <div className='icon'>
                  <i className='fa fa-users'></i>
                </div>
              </div>
            </div>
          </div>
          <div className='row'>
            <div className='col-lg-4 col-md-6 col-12'>
              {/* <!-- Single Teacher --> */}
              <div className='single-teacher'>
                <div className='teacher-head overlay'>
                  <img
                    src='images/teachers/demo.jpeg'
                    alt='#'
                    style={{ width: '250px', height: '360px' }}
                  />
                  <ul className='social'>
                    <li>
                      <a href='#'>
                        <i className='fa fa-facebook'></i>
                      </a>
                    </li>
                    <li>
                      <a href='#'>
                        <i className='fa fa-twitter'></i>
                      </a>
                    </li>
                    <li>
                      <a href='#'>
                        <i className='fa fa-linkedin'></i>
                      </a>
                    </li>
                    <li>
                      <a href='#'>
                        <i className='fa fa-youtube'></i>
                      </a>
                    </li>
                  </ul>
                </div>
                <div className='teacher-content'>
                  <h4>
                    Fopa K. Duclair<span>Web Developer</span>
                  </h4>
                </div>
              </div>
              {/* <!--/ End Single Teacher --> */}
            </div>
            <div className='col-lg-4 col-md-6 col-12'>
              {/* <!-- Single Teacher --> */}
              <div className='single-teacher'>
                <div className='teacher-head overlay'>
                  <img
                    src='images/teachers/koffee.gif'
                    alt='#'
                    style={{ width: '360px', height: '360px' }}
                  />
                  <ul className='social'>
                    <li>
                      <a href='#'>
                        <i className='fa fa-facebook'></i>
                      </a>
                    </li>
                    <li>
                      <a href='#'>
                        <i className='fa fa-twitter'></i>
                      </a>
                    </li>
                    <li>
                      <a href='#'>
                        <i className='fa fa-linkedin'></i>
                      </a>
                    </li>
                    <li>
                      <a href='#'>
                        <i className='fa fa-youtube'></i>
                      </a>
                    </li>
                  </ul>
                </div>
                <div className='teacher-content'>
                  <h4>
                    Koffee<span>Jamaican Singer</span>
                  </h4>
                </div>
              </div>
              {/* <!--/ End Single Teacher --> */}
            </div>
            <div className='col-lg-4 col-md-6 col-12'>
              {/* <!-- Single Teacher --> */}
              <div className='single-teacher'>
                <div className='teacher-head overlay'>
                  <img
                    src='images/teachers/tems.png'
                    alt='#'
                    style={{ width: '320px', height: '360px' }}
                  />
                  <ul className='social'>
                    <li>
                      <a href='#'>
                        <i className='fa fa-facebook'></i>
                      </a>
                    </li>
                    <li>
                      <a href='#'>
                        <i className='fa fa-twitter'></i>
                      </a>
                    </li>
                    <li>
                      <a href='#'>
                        <i className='fa fa-linkedin'></i>
                      </a>
                    </li>
                    <li>
                      <a href='#'>
                        <i className='fa fa-youtube'></i>
                      </a>
                    </li>
                  </ul>
                </div>
                <div className='teacher-content'>
                  <h4>
                    Tems<span>Nigerian Singer</span>
                  </h4>
                </div>
              </div>
              {/* <!--/ End Single Teacher --> */}
            </div>
            <div className='col-lg-4 col-md-6 col-12'>
              {/* <!-- Single Teacher --> */}
              <div className='single-teacher'>
                <div className='teacher-head overlay'>
                  <img src='images/teachers/teacher-4.jpg' alt='#' />
                  <ul className='social'>
                    <li>
                      <a href='#'>
                        <i className='fa fa-facebook'></i>
                      </a>
                    </li>
                    <li>
                      <a href='#'>
                        <i className='fa fa-twitter'></i>
                      </a>
                    </li>
                    <li>
                      <a href='#'>
                        <i className='fa fa-linkedin'></i>
                      </a>
                    </li>
                    <li>
                      <a href='#'>
                        <i className='fa fa-youtube'></i>
                      </a>
                    </li>
                  </ul>
                </div>
                <div className='teacher-content'>
                  <h4>
                    Boamia Rone<span>Ui Designer</span>
                  </h4>
                </div>
              </div>
              {/* <!--/ End Single Teacher --> */}
            </div>
            <div className='col-lg-4 col-md-6 col-12'>
              {/* <!-- Single Teacher --> */}
              <div className='single-teacher'>
                <div className='teacher-head overlay'>
                  <img src='images/teachers/teacher-1.jpg' alt='#' />
                  <ul className='social'>
                    <li>
                      <a href='#'>
                        <i className='fa fa-facebook'></i>
                      </a>
                    </li>
                    <li>
                      <a href='#'>
                        <i className='fa fa-twitter'></i>
                      </a>
                    </li>
                    <li>
                      <a href='#'>
                        <i className='fa fa-linkedin'></i>
                      </a>
                    </li>
                    <li>
                      <a href='#'>
                        <i className='fa fa-youtube'></i>
                      </a>
                    </li>
                  </ul>
                </div>
                <div className='teacher-content'>
                  <h4>
                    Rohan Jonson<span>Web Developer</span>
                  </h4>
                </div>
              </div>
              {/* <!--/ End Single Teacher --> */}
            </div>
            <div className='col-lg-4 col-md-6 col-12'>
              {/* <!-- Single Teacher --> */}
              <div className='single-teacher'>
                <div className='teacher-head overlay'>
                  <img src='images/teachers/teacher-2.jpg' alt='#' />
                  <ul className='social'>
                    <li>
                      <a href='#'>
                        <i className='fa fa-facebook'></i>
                      </a>
                    </li>
                    <li>
                      <a href='#'>
                        <i className='fa fa-twitter'></i>
                      </a>
                    </li>
                    <li>
                      <a href='#'>
                        <i className='fa fa-linkedin'></i>
                      </a>
                    </li>
                    <li>
                      <a href='#'>
                        <i className='fa fa-youtube'></i>
                      </a>
                    </li>
                  </ul>
                </div>
                <div className='teacher-content'>
                  <h4>
                    Katheing William<span>Software Developer</span>
                  </h4>
                </div>
              </div>
              {/* <!--/ End Single Teacher --> */}
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  )
}

export default Teacher
