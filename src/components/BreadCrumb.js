import React from 'react'
import { Link } from 'react-router-dom'

const BreadCrumb = () => {
  return (
    <>
      {/* <!-- Breadcrumb --> */}
      <div
        className='breadcrumbs overlay'
        style={{ backgroundImage: 'url(' + 'images/breadcrumb-bg.jpg' + ')' }}
      >
        <div className='container'>
          <div className='row'>
            <div className='col-lg-6 col-md-6 col-12'>
              <h2>Settings</h2>
            </div>
            <div className='col-lg-6 col-md-6 col-12'>
              <ul className='bread-list'>
                <li>
                  <a href='/'>
                    Home<i className='fa fa-angle-right'></i>
                  </a>
                </li>
                <li>
                  <a href='#'>
                    Settings<i className='fa fa-angle-right'></i>
                  </a>
                </li>
                <li className='active'>
                  <Link to='/events'>Security</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      {/* <!--/ End Breadcrumb --> */}
    </>
  )
}

export default BreadCrumb
