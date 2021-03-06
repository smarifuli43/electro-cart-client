import React, { useState } from 'react';
import { CloseButton } from 'react-bootstrap';
import { NavLink, Outlet} from 'react-router-dom';
import { Link } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';
import './Dashboard.css';


const Dashboard = () => {
  const [menustate, setMenuState] = useState(false);
  const { user,LogOUt, admin } = useAuth();

  return (
    <div className='container-fluid' style={{ background: '#F4F7FC' }}>
      <div className='dashboard-header py-3 px-4 d-flex justify-content-between align-items-center'>
        <button
          className='hamburger btn '
          onClick={() => setMenuState(!menustate)}
        >
          <div className='line1'></div>
          <div className='line2'></div>
          <div className='line3'></div>
        </button>
      </div>
      <div className='wrapper'>
        <div
          className={
            menustate
              ? 'sidebar-wrapper toggle-sidebar px-2 pt-2'
              : 'sidebar-wrapper px-2'
          }
        >
          <div className='d-flex flex-column px-2 position-relative'>
            <CloseButton
              onClick={() => setMenuState(false)}
              className=' position-absolute top-0 end-0 m-3 p-2 bg-white close-btn'
            />
            <div className=' mt-4 text-center'>
              {user.photoURL ? (
                <img
                  src={user.photoURL}
                  alt=''
                  className=' mt-4 rounded-circle'
                  style={{ width: '60px', height: '60px' }}
                />
              ) : (
                <div
                  className='mt-3 bg-white d-flex align-items-center justify-content-center rounded-circle mx-auto'
                  style={{ width: '60px', height: '60px' }}
                >
                  {' '}
                  <i
                    className='fas fa-user text-dark'
                    style={{ fontSize: '30px' }}
                  ></i>
                </div>
              )}
              {user.displayName && (
                <h6 className='text-white mt-2'>{user.displayName}</h6>
              )}
            </div>
            <hr className='text-white-50' />
            <Link to='/home' className='mt-3 text-secondary'>
              <span>
                <i className='fas fa-home me-2 f'></i>
              </span>
              Home
            </Link>
            <Link to='/dashboard' className='mt-3 text-secondary'>
              <span>
                <i className='fas fa-tools me-2 f'></i>
              </span>
              Dashboard
            </Link>
            {!admin && (
              <>
                <NavLink
                  to='/dashboard/myorders'
                  className={({ isActive }) =>
                    isActive ? 'active-dash mt-3' : 'mt-3 text-secondary'
                  }
                >
                  <span>
                    <i className='fas fa-shopping-basket me-2 f'></i>
                  </span>
                  My order
                </NavLink>
                <NavLink
                  to='/dashboard/addreview'
                  className={({ isActive }) =>
                    isActive ? 'active-dash mt-3' : 'mt-3  text-secondary'
                  }
                >
                  {' '}
                  <span>
                    <i className='far fa-comment-alt me-2 '></i>
                  </span>
                  Review
                </NavLink>
              </>
            )}

            {admin && (
              <>
                <NavLink
                  to='/dashboard/addproduct'
                  className={({ isActive }) =>
                    isActive ? 'active-dash mt-3' : 'mt-3  text-secondary'
                  }
                >
                  {' '}
                  <span>
                    <i className='fas fa-plus me-2'></i>
                  </span>
                  Add Product
                </NavLink>
                <NavLink
                  to='/dashboard/makeadmin'
                  className={({ isActive }) =>
                    isActive ? 'active-dash mt-3' : 'mt-3  text-secondary'
                  }
                >
                  {' '}
                  <span>
                    <i className='fas fa-user-plus me-2'></i>
                  </span>
                  Make Admin
                </NavLink>
                <NavLink
                  to='/dashboard/manageorders'
                  className={({ isActive }) =>
                    isActive ? 'active-dash mt-3' : 'mt-3  text-secondary'
                  }
                >
                  {' '}
                  <span>
                    <i className='fas fa-th-large me-2'></i>
                  </span>
                  Manage Orders
                </NavLink>
              </>
            )}
            <button className='btn-dash mt-4 ' onClick={LogOUt}>
              <i className='fas fa-sign-out-alt me-2'></i>
              Logout
            </button>
          </div>
        </div>
        <div className='pb-5 pt-md-5 w-100 container dash-container'>
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;