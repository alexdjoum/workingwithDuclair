import React from 'react'
import { Link } from 'react-router-dom'
import { deleteCookie } from '../helpers/cookies'
import { getLocalStorage } from '../helpers/localStorage'

const Header = () => {
  const requestStyle = {
    whiteSpace: 'normal',
    verticalAlign: 'bottom',
  }

  const userauth = localStorage.getItem('user')
  const disconnect = () => {
    localStorage.removeItem('user')
    deleteCookie('token')
  }
  return (
    <>
      <header className='header'>
        {/* <!-- Header Inner --> */}
        <div className='header-inner overlay'>
          <div className='container'>
            <div className='row'>
              <div className='col-lg-3 col-md-3 col-12'>
                {/* <!-- Logo --> */}
                <div className='logo'>
                  <Link to='/'>
                    <img src='images/logo.png' alt='#' />
                  </Link>
                </div>
                {/* <!--/ End Logo --> */}
                <div className='mobile-menu'></div>
              </div>
              <div className='col-lg-9 col-md-9 col-12'>
                <div className='menu-bar'>
                  <nav className='navbar navbar-default'>
                    <div className='navbar-collapse'>
                      {/* <!-- Main Menu --> */}
                      <ul id='nav' className='nav menu navbar-nav'>
                        <li className='active'>
                          <Link to='/'>
                            <i className='fa fa-home'></i>Home
                          </Link>
                        </li>
                        <li>
                          <Link to='#'>
                            <i className='fa fa-clone'></i>Pages
                          </Link>
                          <ul className='dropdown'>
                            <li>
                              <Link to='/teacher'>Teachers</Link>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <Link to='courses.html'>
                            <i className='fa fa-phone'></i>Messages
                          </Link>
                        </li>
                        <li>
                          <Link to='notifications.html'>
                            <i className='fa fa-bell'></i>Notifications
                          </Link>
                        </li>
                        {/* <li>
                          <Link to='courses.html'>
                            <i className='fa fa-clone'></i>Our Courses
                          </Link>
                        </li> */}
                        {/* <li className='nav-item dropdown'>
                          <Link
                            className='nav-link dropdown-toggle mr-lg-2'
                            id='contactsDropdown'
                            to='#'
                            data-toggle='dropdown'
                            aria-haspopup='true'
                            aria-expanded='false'
                          >
                            <i className='fa fa-fw fa-bell'></i>
                            <span className='d-lg-none'>
                              Contacts
                              <span className='badge badge-pill badge-warning'>
                                6 new
                              </span>
                            </span>
                            <span className='indicator text-warning d-none d-lg-block'>
                              <i className='fa fa-fw fa-circle'></i>
                            </span>
                          </Link>
                          <div
                            className='dropdown-menu dropdown-menu-right'
                            style={{ minWidth: '300px' }}
                            aria-labelledby='contactsDropdown'
                          >
                            <h6 className='dropdown-header'>Contacts:</h6>
                            <div className='dropdown-divider'></div>
                            <Link
                              style={requestStyle}
                              className='dropdown-item'
                              to='#'
                            >
                              <img
                                src='https://orig00.deviantart.net/d7b0/f/2011/166/d/4/avatar_100x100_by_demonfox_zephz-d3iyw6a.png'
                                className='rounded-circle'
                                style={{ width: '50px', height: '50px' }}
                              />
                              <div
                                className='text-left user-item'
                                style={{
                                  display: 'inline-block',
                                  marginLeft: '10px',
                                  width: '100px',
                                  requestStyle,
                                }}
                              >
                                FirstName LastName
                              </div>
                              <span className='text-right'>
                                <input
                                  type='button'
                                  className='btn btn-primary btn-sm'
                                  value='Accept'
                                />
                                <input
                                  type='button'
                                  className='btn btn-default btn-sm'
                                  value='Reject'
                                />
                              </span>
                            </Link>
                            <div className='dropdown-divider'></div>
                            <Link className='dropdown-item' to='#'>
                              <img
                                src='https://orig00.deviantart.net/d7b0/f/2011/166/d/4/avatar_100x100_by_demonfox_zephz-d3iyw6a.png'
                                className='rounded-circle'
                                style={{ width: '50px', height: '50px' }}
                              />
                              <div
                                className='text-left user-item'
                                style={{
                                  display: 'inline-block',
                                  marginLeft: '10px',
                                  width: '100px',
                                }}
                              >
                                FirstName LastName
                              </div>
                              <div style={{ display: 'inline-block' }}>
                                <input
                                  type='button'
                                  className='btn btn-primary btn-sm'
                                  value='Accept'
                                />
                                <input
                                  type='button'
                                  className='btn btn-default btn-sm'
                                  value='Reject'
                                />
                              </div>
                            </Link>
                          </div>
                        </li> */}
                        <li>
                          <Link to='/events'>
                            <i className='fa fa-bullhorn'></i>Events
                          </Link>
                        </li>
                        {/* <li>
                          <Link to='/profile/:username'>
                            <i className='fa fa-bullhorn'></i>Profile
                          </Link>
                        </li> */}
                        {/* <li>
                          <Link to='/contact'>
                            <i className='fa fa-address-book'></i>Contact
                          </Link>
                        </li> */}
                        {userauth ? (
                          <li>
                            <Link to='/' onClick={disconnect}>
                              <i className='fa fa-user'></i>Logout
                            </Link>
                          </li>
                        ) : (
                          ''
                        )}
                      </ul>
                      {/* <!-- End Main Menu --> */}
                    </div>
                  </nav>
                  {/* <!-- Search Area --> */}
                  <div className='search-area'>
                    <Link to='#header' className='icon'>
                      <i className='fa fa-search'></i>
                    </Link>
                    <form className='search-form'>
                      <input
                        type='text'
                        placeholder='ex: premium course'
                        name='search'
                      />
                      <button value='search ' type='submit'>
                        <i className='fa fa-search'></i>
                      </button>
                    </form>
                  </div>
                  {/* <!-- End Search Area--> */}
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <!--/ End Header Inner --> */}
      </header>
    </>
  )
}

export default Header
