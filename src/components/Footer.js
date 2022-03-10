import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <>
      {/* <!-- Footer --> */}
      <footer className='footer section'>
        {/* <!-- Footer Top --> */}
        <div className='footer-top overlay'>
          <div className='container'>
            <div className='row'>
              <div className='col-lg-4 col-md-6 col-12'>
                {/* <!-- About --> */}
                <div className='single-widget about'>
                  <h2>About TheGeeks</h2>
                  <ul className='list'>
                    <li>
                      <i className='fa fa-phone'></i>Phone: +123 456-7890{' '}
                    </li>
                    <li>
                      <i className='fa fa-envelope'></i>Email:{' '}
                      <Link to='mailto:info@youremail.com'>
                        Info@youremail.com
                      </Link>
                    </li>
                    <li>
                      <i className='fa fa-map-o'></i>Address: 123, Jolfikar
                      state, Us
                    </li>
                  </ul>
                  {/* <!-- Social --> */}
                  <ul className='social'>
                    <li>
                      <Link to='#'>
                        <i className='fa fa-twitter'></i>
                      </Link>
                    </li>
                    <li className='active'>
                      <Link to='#'>
                        <i className='fa fa-facebook'></i>
                      </Link>
                    </li>
                    <li>
                      <Link to='#'>
                        <i className='fa fa-google-plus'></i>
                      </Link>
                    </li>
                    <li>
                      <Link to='#'>
                        <i className='fa fa-linkedin'></i>
                      </Link>
                    </li>
                    <li>
                      <Link to='#'>
                        <i className='fa fa-youtube'></i>
                      </Link>
                    </li>
                  </ul>
                  {/* <!-- End Social --> */}
                </div>
                {/* <!--/ End About --> */}
              </div>
              <div className='col-lg-4 col-md-6 col-12'>
                {/* <!-- Useful Links --> */}
                <div className='single-widget list'>
                  <h2>Useful Links</h2>
                  <ul>
                    <li>
                      <i className='fa fa-angle-right'></i>
                      <Link to='#'>Home</Link>
                    </li>
                    <li>
                      <i className='fa fa-angle-right'></i>
                      <Link to='#'>About Eduland</Link>
                    </li>
                    <li>
                      <i className='fa fa-angle-right'></i>
                      <Link to='#'>Our Courses</Link>
                    </li>
                    <li>
                      <i className='fa fa-angle-right'></i>
                      <Link to='#'>Upcoming Events</Link>
                    </li>
                    <li>
                      <i className='fa fa-angle-right'></i>
                      <Link to='#'>Faq's</Link>
                    </li>
                  </ul>
                </div>
                {/* <!--/ End Useful Links --> */}
              </div>
              <div className='col-lg-4 col-md-6 col-12'>
                {/* <!-- Useful Links --> */}
                <div className='single-widget opening-times'>
                  <h2>Opening Hourse</h2>
                  <ul className='list'>
                    <li>
                      <span>Saturday - Sunday</span>
                      <div className='value'>09am - 05pm</div>
                    </li>
                    <li>
                      <span>Monday - Twisday</span>
                      <div className='value'>10AM - 02PM</div>
                    </li>
                    <li>
                      <span>Widnesday</span>
                      <div className='value'>10AM - 12PM</div>
                    </li>
                    <li>
                      <span>Thursday</span>
                      <div className='value'>08AM - 05PM</div>
                    </li>
                    <li>
                      <span>Friday</span>
                      <div className='value off'>closed</div>
                    </li>
                  </ul>
                </div>
                {/* <!--/ End Useful Links --> */}
              </div>
            </div>
          </div>
        </div>
        {/* <!--/ End Footer Top --> */}
        {/* <!-- Footer Bottom --> */}
        <div className='footer-bottom'>
          <div className='container'>
            <div className='row'>
              <div className='col-12'>
                {/* <!-- Copyright --> */}
                <div className='copyright'>
                  <p>© Copyright TheGeeks 2022</p>
                </div>
                {/* <!--/ End Copyright --> */}
              </div>
            </div>
          </div>
        </div>
        {/* <!--/ End Footer Bottom --> */}
      </footer>
      {/* <!--/ End Footer --> */}
    </>
  )
}

export default Footer
