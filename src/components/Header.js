import React from 'react'
import { Link } from 'react-router-dom'
import { deleteCookie } from '../helpers/cookies'
import { getLocalStorage } from '../helpers/localStorage'

const Header = () => {
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
                          <a href='#'>
                            <i className='fa fa-clone'></i>Pages
                          </a>
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
                        <li>
                          <Link to='courses.html'>
                            <i className='fa fa-clone'></i>Our Courses
                          </Link>
                        </li>
                        <li>
                          <Link to='/events'>
                            <i className='fa fa-bullhorn'></i>Events
                          </Link>
                        </li>
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
                    <a href='#header' className='icon'>
                      <i className='fa fa-search'></i>
                    </a>
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
