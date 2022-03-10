import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import BreadCrumb from '../components/BreadCrumb'
import Footer from '../components/Footer'
import Header from '../components/Header'
import './settings.css'
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'

const Settings = () => {
  const [phone, setPhone] = useState('')

  return (
    <React.Fragment>
      <Header />
      <BreadCrumb />
      <div className='container-xl px-4 mt-4'>
        {/* <!-- Account page navigation--> */}
        <nav className='nav nav-borders'>
          <Link
            className='nav-link'
            to='https://www.bootdey.com/snippets/view/bs5-profile-billing-page'
            target='__blank'
          >
            Billing
          </Link>
          <Link
            className='nav-link active'
            to='https://www.bootdey.com/snippets/view/bs5-profile-security-page'
            target='__blank'
          >
            Security
          </Link>
          <Link
            className='nav-link'
            to='https://www.bootdey.com/snippets/view/bs5-edit-notifications-page'
            target='__blank'
          >
            Notifications
          </Link>
        </nav>
        <hr className='mt-0 mb-4' />
        <div className='row'>
          <div className='col-lg-8'>
            {/* <!-- Change password card--> */}
            <div className='card mb-4'>
              <div className='card-header'>Change Password</div>
              <div className='card-body'>
                <form>
                  {/* <!-- Form Group (current password)--> */}
                  <div className='mb-3'>
                    <label className='small mb-1' htmlFor='currentPassword'>
                      Current Password
                    </label>
                    <input
                      className='form-control'
                      id='currentPassword'
                      type='password'
                      placeholder='Enter current password'
                    />
                  </div>
                  {/* <!-- Form Group (new password)--> */}
                  <div className='mb-3'>
                    <label className='small mb-1' htmlFor='newPassword'>
                      New Password
                    </label>
                    <input
                      className='form-control'
                      id='newPassword'
                      type='password'
                      placeholder='Enter new password'
                    />
                  </div>
                  {/* <!-- Form Group (confirm password)--> */}
                  <div className='mb-3'>
                    <label className='small mb-1' htmlFor='confirmPassword'>
                      Confirm Password
                    </label>
                    <input
                      className='form-control'
                      id='confirmPassword'
                      type='password'
                      placeholder='Confirm new password'
                    />
                  </div>
                  <button className='btn btn-success' type='button'>
                    Save
                  </button>
                </form>
              </div>
            </div>
            {/* <!-- Security preferences card--> */}
            <div className='card mb-4'>
              <div className='card-header'>Security Preferences</div>
              <div className='card-body'>
                {/* <!-- Account privacy optinos--> */}
                <h5 className='mb-1'>Account Privacy</h5>
                <p className='small text-muted'>
                  By setting your account to private, your profile information
                  and posts will not be visible to users outside of your user
                  groups.
                </p>
                <form>
                  <div className='form-check'>
                    <input
                      className='form-check-input'
                      id='radioPrivacy1'
                      type='radio'
                      name='radioPrivacy'
                      checked
                    />
                    <label className='form-check-label' htmlFor='radioPrivacy1'>
                      Public (posts are available to all users)
                    </label>
                  </div>
                  <div className='form-check'>
                    <input
                      className='form-check-input'
                      id='radioPrivacy2'
                      type='radio'
                      name='radioPrivacy'
                    />
                    <label className='form-check-label' htmlFor='radioPrivacy2'>
                      Private (posts are available to only users in your groups)
                    </label>
                  </div>
                </form>
                <hr className='my-4' />
                {/* <!-- Data sharing options--> */}
                <h5 className='mb-1'>Data Sharing</h5>
                <p className='small text-muted'>
                  Sharing usage data can help us to improve our products and
                  better serve our users as they navigation through our
                  application. When you agree to share usage data with us, crash
                  reports and usage analytics will be automatically sent to our
                  development team for investigation.
                </p>
                <form>
                  <div className='form-check'>
                    <input
                      className='form-check-input'
                      id='radioUsage1'
                      type='radio'
                      name='radioUsage'
                      checked
                    />
                    <label className='form-check-label' htmlFor='radioUsage1'>
                      Yes, share data and crash reports with app developers
                    </label>
                  </div>
                  <div className='form-check'>
                    <input
                      className='form-check-input'
                      id='radioUsage2'
                      type='radio'
                      name='radioUsage'
                    />
                    <label className='form-check-label' htmlFor='radioUsage2'>
                      No, limit my data sharing with app developers
                    </label>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div className='col-lg-4'>
            {/* <!-- Two factor authentication card--> */}
            <div className='card mb-4'>
              <div className='card-header'>Two-Factor Authentication</div>
              <div className='card-body'>
                <p>
                  Add another level of security to your account by enabling
                  two-factor authentication. We will send you a text message to
                  verify your login attempts on unrecognized devices and
                  browsers.
                </p>
                <form>
                  <div className='form-check'>
                    <input
                      className='form-check-input'
                      id='twoFactorOn'
                      type='radio'
                      name='twoFactor'
                      checked
                    />
                    <label className='form-check-label' htmlFor='twoFactorOn'>
                      On
                    </label>
                  </div>
                  <div className='form-check'>
                    <input
                      className='form-check-input'
                      id='twoFactorOff'
                      type='radio'
                      name='twoFactor'
                    />
                    <label className='form-check-label' htmlFor='twoFactorOff'>
                      Off
                    </label>
                  </div>
                  <div className='mt-3'>
                    <label className='small mb-1' htmlFor='twoFactorSMS'>
                      SMS Number
                    </label>
                    {/* <input
                      className='form-control'
                      id='twoFactorSMS'
                      type='tel'
                      placeholder='Enter a phone number'
                      value='+237 653-448-276'
                    /> */}
                    <PhoneInput
                      country={'cm'}
                      value={phone}
                      onChange={(phone) => setPhone(phone)}
                    />
                  </div>
                </form>
              </div>
            </div>
            {/* <!-- Delete account card--> */}
            <div className='card mb-4'>
              <div className='card-header'>Delete Account</div>
              <div className='card-body'>
                <p>
                  Deleting your account is a permanent action and cannot be
                  undone. If you are sure you want to delete your account,
                  select the button below.
                </p>
                <button
                  className='btn btn-danger-soft text-danger'
                  type='button'
                >
                  I understand, delete my account
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </React.Fragment>
  )
}

export default Settings
