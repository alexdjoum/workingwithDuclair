import React from 'react'
import { Link } from 'react-router-dom'
import BreadCrumb from '../components/BreadCrumb'
import Header from '../components/Header'

export default function Events() {
  return (
    <>
      <Header />
      {/* <!--/ End Header --> */}

      <BreadCrumb />

      {/* <!-- Events --> */}
      <section className='events archive section'>
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
            <div className='col-lg-6 col-md-6 col-12'>
              {/* <!-- Single Event --> */}
              <div className='single-event'>
                <div className='event-image'>
                  <img src='images/events/event1.jpg' alt='#' />
                  <div className='event-date'>
                    <p>
                      23<span>March</span>
                    </p>
                  </div>
                </div>
                <div className='event-content'>
                  <h3 className='event-title'>
                    <a href='event-single.html'>Admission Fair Spring 2019</a>
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
            <div className='col-lg-6 col-md-6 col-12'>
              {/* <!-- Single Event --> */}
              <div className='single-event'>
                <div className='event-image'>
                  <img src='images/events/event2.jpg' alt='#' />
                  <div className='event-date'>
                    <p>
                      25<span>April</span>
                    </p>
                  </div>
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
              {/* <!-- End Single Event --> */}
            </div>
            <div className='col-lg-6 col-md-6 col-12'>
              {/* <!-- Single Event --> */}
              <div className='single-event'>
                <div className='event-image'>
                  <img src='images/events/event3.jpg' alt='#' />
                  <div className='event-date'>
                    <p>
                      05<span>Jun</span>
                    </p>
                  </div>
                </div>
                <div className='event-content'>
                  <h3 className='event-title'>
                    <a href='event-single.html'>Actualized Network Seminar</a>
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
            <div className='col-lg-6 col-md-6 col-12'>
              {/* <!-- Single Event --> */}
              <div className='single-event'>
                <div className='event-image'>
                  <img src='images/events/event4.jpg' alt='#' />
                  <div className='event-date'>
                    <p>
                      23<span>March</span>
                    </p>
                  </div>
                </div>
                <div className='event-content'>
                  <h3 className='event-title'>
                    <a href='event-single.html'>Admission Fair Spring 2019</a>
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
            <div className='col-lg-6 col-md-6 col-12'>
              {/* <!-- Single Event --> */}
              <div className='single-event'>
                <div className='event-image'>
                  <img src='images/events/event5.jpg' alt='#' />
                  <div className='event-date'>
                    <p>
                      23<span>March</span>
                    </p>
                  </div>
                </div>
                <div className='event-content'>
                  <h3 className='event-title'>
                    <a href='event-single.html'>Admission Fair Spring 2019</a>
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
            <div className='col-lg-6 col-md-6 col-12'>
              {/* <!-- Single Event --> */}
              <div className='single-event'>
                <div className='event-image'>
                  <img src='images/events/event6.jpg' alt='#' />
                  <div className='event-date'>
                    <p>
                      25<span>April</span>
                    </p>
                  </div>
                </div>
                <div className='event-content'>
                  <h3 className='event-title'>
                    <a href='event-single.html'>
                      Internation Web Developments Awards!
                    </a>
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
      </section>
    </>
  )
}
